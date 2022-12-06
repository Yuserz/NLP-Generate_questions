from app import db
from app.Components import model

class Subject(db.Model, model.Component):
    id = db.Column(db.Integer, primary_key=True)
    user = db.Column(db.Integer, db.ForeignKey('user.id'))
    subject = db.Column(db.String(50), nullable=False)