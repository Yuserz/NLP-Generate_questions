from flask import request
from flask_login import login_required
from app import app
from app.Components.response import Response
from app.T5 import t5model

@app.route('/generate', methods=['POST'])
def generate():
    if request.method == 'POST':
        req = request.get_json()

        try:
            result = t5model.generate_QA(req['context'])
        except Exception as e:
            return Response(
                status=500,
                data=str(e)
            )

        if not result:
            return Response(
                status=200,
            )

        return Response(
            status=200,
            data=result
        )