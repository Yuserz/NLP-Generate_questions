from app import db
from app.Components import model

class Choice(db.Model, model.Component):
    __tablename__ = 'choice'

    id = db.Column(db.Integer, primary_key=True)
    question = db.Column(db.Integer, db.ForeignKey('question.id'))
    choice = db.Column(db.Text, nullable=False)