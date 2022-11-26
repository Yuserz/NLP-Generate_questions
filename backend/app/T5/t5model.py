from transformers import T5ForConditionalGeneration, T5Tokenizer, AutoTokenizer, AutoModelWithLMHead
import nltk
from nltk import tokenize
import random
from wonderwords import RandomWord
import re

QModel_name = "allenai/t5-small-squad2-question-generation"
AModel_name = "MaRiOrOsSi/t5-base-finetuned-question-answering"

QModel, AModel = None, None
QTokenizer, ATokenizer = None, None

def initialize():
    global QModel, AModel, QTokenizer, ATokenizer
    print('Initializing t5 Models...')
    QModel = T5ForConditionalGeneration.from_pretrained(QModel_name)
    QTokenizer = T5Tokenizer.from_pretrained(QModel_name)

    AModel = AutoModelWithLMHead.from_pretrained(AModel_name)
    ATokenizer = AutoTokenizer.from_pretrained(AModel_name)

    nltk.download('averaged_perceptron_tagger')

def validateInitialization():
    if not QModel or not AModel or not QTokenizer or not ATokenizer:
        initialize()

# generate question using allenai/t5-small-squad2-question-generation model
def getQuestion(sentence, **generator_args):
    input_ids = QTokenizer.encode(sentence, return_tensors="pt")
    res = QModel.generate(input_ids, **generator_args)
    output = QTokenizer.batch_decode(res, skip_special_tokens=True)
    return output

# generate answer using MaRiOrOsSi/t5-base-finetuned-question-answering model
def getAnswer(question, context):
    input = f"question: {question} context: {context}"
    encoded_input = ATokenizer([input],
                                    return_tensors='pt',
                                    max_length=512,
                                    truncation=True)
    output = AModel.generate(input_ids = encoded_input.input_ids,
                                    attention_mask = encoded_input.attention_mask)
    output = ATokenizer.decode(output[0], skip_special_tokens=True)

    return output

def getChoices(answer):
    choices = []
    choices.append(answer)
    
    # check if answer contains numbers
    if any(i.isdigit() for i in answer):
        nums = re.findall(r'\d+', answer)
        for i in range(3):
            choice = answer
            for num in nums:
                val = 10
                new = num

                # check if num's first digit is 0 then change to 1 (ex. 099 to 199)
                if len(num) > len(str(int(num))) and len(str(int(num)))>=2:
                    new = int(num) + pow(10, len(num)-1)

                # adjust value range
                if len(str(new)) == 2:
                    val = 5
                if len(str(new)) == 1:
                    val = 2

                rand = random.randint(abs(int(new)-val), int(new)+val)
                choice = choice.replace(str(num), str(rand))

            choices.append(choice)

        return choices

    else:
        answer_tokenize = tokenize.word_tokenize(answer)
        tokens = nltk.pos_tag(answer_tokenize)
        word = random.choice(tokens)
        r = RandomWord()

        for i in range(3):
            new = None
            if word[1] == 'JJS':
                new =  r.word(include_parts_of_speech=["adjectives"])
            else:
                new =  r.word(include_parts_of_speech=["noun"])

            choices.append(answer.replace(word[0], new.capitalize()))

        return choices

def generate_QA(context):
    # check if all models are initialized
    validateInitialization()

    sentences = tokenize.sent_tokenize(context)

    questions = []
    for sentence in sentences:
        question  = getQuestion(sentence)[0]

        if question:
            questions.append(question)

    qa = []
    for question in questions:
        answer = getAnswer(question, context)

        if answer:
            qa.append({'question': question, 'answer': answer, 'choices': getChoices(answer)})
    
    return qa
