from app import db
from app.Components import model

class Context(db.Model, model.Component):
    __tablename__ = 'context'

    id = db.Column(db.Integer, primary_key=True)
    user = db.Column(db.Integer, db.ForeignKey('user.id'))
    title = db.Column(db.String(100), nullable=False)
    context = db.Column(db.Text, nullable=False)