from transformers import T5ForConditionalGeneration, T5Tokenizer, AutoTokenizer, AutoModelWithLMHead
import nltk
from nltk import tokenize
import random
from wonderwords import RandomWord
import re
import string

MAX_QUESTIONS = 5

QModel_Allenai = "allenai/t5-small-squad2-question-generation"
QModel_Thomas = "ThomasSimonini/t5-end2end-question-generation"
AModel_name = "MaRiOrOsSi/t5-base-finetuned-question-answering"

QModelAllenai, QModelThomas, AModel = None, None, None
QTokenizer, ATokenizer = None, None

def initialize():
    global QModelAllenai, AModel, QTokenizer, ATokenizer, QModelThomas
    print('Initializing t5 Models...')
    QModelAllenai = T5ForConditionalGeneration.from_pretrained(QModel_Allenai)
    QModelThomas = T5ForConditionalGeneration.from_pretrained(QModel_Thomas)
    QTokenizer = T5Tokenizer.from_pretrained(QModel_Allenai)

    AModel = AutoModelWithLMHead.from_pretrained(AModel_name)
    ATokenizer = AutoTokenizer.from_pretrained(AModel_name)

    nltk.download('punkt')
    nltk.download('averaged_perceptron_tagger')

def validateInitialization():
    if not QModelAllenai or not AModel or not QTokenizer or not ATokenizer:
        initialize()

# generate question using allenai/t5-small-squad2-question-generation model
def getQuestionAllenai(sentence, **generator_args):
    input_ids = QTokenizer.encode(sentence, return_tensors="pt")
    res = QModelAllenai.generate(input_ids, **generator_args)
    output = QTokenizer.batch_decode(res, skip_special_tokens=True)
    return output

def getQuestionThomas(input_string, **generator_args):
    generator_args = {
        "max_length": 256,
        "num_beams": 3,
        "length_penalty": 1.5,
        "no_repeat_ngram_size": 3,
        "early_stopping": True,
    }
    input_string = "generate questions: " + input_string + " </s>"
    input_ids = QTokenizer.encode(input_string, return_tensors="pt")
    res = QModelThomas.generate(input_ids, **generator_args)
    output = QTokenizer.batch_decode(res, skip_special_tokens=True)
    output = [item.split("<extra_id_-1>") for item in output]
    return output[0]

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

    def getRandom(choice, num, value):
        rand = random.randint(abs(int(num)-value), int(num)+value)

        ch = choice.replace(str(num), str(rand))
        if ch in choices:
            ch = getRandom(choice, num, value)

        return ch
    
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
                    val = 3

                choice = getRandom(choice, new, val)

            choices.append(choice)

    else:
        answer_tokenize = tokenize.word_tokenize(answer)
        tokens = nltk.pos_tag(answer_tokenize)
        
        r = RandomWord()

        def getRandomWord():
            word = random.choice(tokens)
            
            if word[0] == '``' or word[0] == "''":
                choice = getRandomWord()

            if word[1] == 'JJS':
                new =  r.word(include_parts_of_speech=["adjectives"])
            else:
                if word[0].endswith("."):
                    new = random.choice(string.ascii_uppercase) + "."
                else:
                    new =  r.word(include_parts_of_speech=["noun"])

            choice = answer.replace(word[0], new.capitalize() if word[0][0].isupper() else new)

            if choice in choices:
                choice = getRandomWord()

            return choice

        for i in range(3):
            choices.append(getRandomWord())

    random.shuffle(choices)
    return choices

def generate_Question_Allenai(context):
    sentences = tokenize.sent_tokenize(context)

    questions = []
    for sentence in sentences:
        question  = getQuestionAllenai(sentence)[0]

        if question:
            questions.append(question)
    
    return questions

def generate_Question_Thomas(context):
    questions = [question for question in getQuestionThomas(context) if question]
    
    return questions
    

def generate_QA(context):
    # check if all models are initialized
    validateInitialization()

    qa = []
    
    qThomas = generate_Question_Thomas(context)
    
    for question in qThomas:
        answer = getAnswer(question, context)

        if answer:
            choices = getChoices(answer)
            qa.append({'question': question, 'answer': answer, 'choices': choices })
    
    qAllenai = generate_Question_Allenai(context)

    # shuffle questions from Allenai
    random.shuffle(qAllenai)

    for question in qAllenai:
        answer = getAnswer(question, context)

        if answer and len(qa) < MAX_QUESTIONS:
            choices = getChoices(answer)
            qa.append({'question': question, 'answer': answer, 'choices': choices})

    return qa