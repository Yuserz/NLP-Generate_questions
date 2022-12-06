from flask import request
from flask_login import login_required, current_user
from app import app
from app.Components.response import Response
from app.Models.subject import Subject

@app.route('/subject', methods=['GET', 'POST'])
@login_required
def subject():
    if request.method == 'POST':
        data = request.get_json()

        subject = Subject(
            subject=data['subject'],
            user=current_user.id
        )

        subject.create()

        return Response(
            status=201
        )

    if request.method == 'GET':
        subjects = Subject.query.filter_by(user=current_user.id).all()

        res = [subject.to_dict(exclude='user') for subject in subjects]

        return Response(
            status=200,
            data=res
        )