from flask import request
from flask_login import login_required, current_user
from app import app
from app.Components.response import Response
from app.models import Context, Question, Choice

@app.route('/history', methods=['POST', 'GET'])
@login_required
def history():
    if request.method == 'POST':
        data = request.get_json()

        title = data['title']
        context = data['context']
        datas = data['questions']

        context = Context(
            context=context,
            title=title,
            user=current_user.id
        )

        context.create()

        for dat in datas:
            quest = Question(
                context=context.id,
                question=dat['question'],
                answer=dat['answer'],
                userAnswer=dat['userAnswer']
            )

            quest.create()

            for choice in dat['choices']:
                c = Choice(
                    question=quest.id,
                    choice=choice
                )

                c.create()
    
        return Response(
            status=201,
        )
    
    if request.method == 'GET':
        res = []

        contexts = Context.query.filter_by(user=current_user.id).all()

        for context in contexts:
            data = context.to_dict(exclude='user')
            res.append(data)

        return Response(
            data=res,
            status=200
        )
                
@app.route('/history/<id>', methods=['GET', 'DELETE'])
@login_required
def historyDetail(id):
    if request.method == 'GET':
        context = Context.query.get(id)
        res = context.to_dict(exclude='user')
        questions = Question.query.filter_by(context=context.id).all()

        data = []
        for question in questions:
            quest = question.to_dict(exclude='context')
            choices = Choice.query.filter_by(question=question.id).all()
            quest['choices'] = [choice.choice for choice in choices]
            data.append(quest)
        
        res['questions'] = data

        return Response(
            data=res,
            status=200
        )