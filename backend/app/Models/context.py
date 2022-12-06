from app import db
from app.Components import model

class Context(db.Model, model.Component):
    id = db.Column(db.Integer, primary_key=True)
    user = db.Column(db.Integer, db.ForeignKey('user.id'))
    subject = db.Column(db.Integer, db.ForeignKey('subject.id'))

    topic = db.Column(db.String(64), nullable=False)
    context = db.Column(db.Text, nullable=False)