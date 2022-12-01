from app import db
from app.Components import model

class Context(db.Model, model.Component):
    __tablename__ = 'context'

    id = db.Column(db.Integer, primary_key=True)
    user = db.Column(db.Integer, db.ForeignKey('user.id'))
    course = db.Column(db.String(64), nullable=False)
    subject = db.Column(db.String(64), nullable=False)
    context = db.Column(db.Text, nullable=False)