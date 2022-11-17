"""import libraries"""
from flask import jsonify
from app import create_app
from models import Articles, articles_schema

# Create an application instance
app = create_app()

# Define a route to fetch the avaialable articles
@app.route("/", methods=["GET"], strict_slashes=False)
@app.route("/articles", methods=["GET"], strict_slashes=False)

def articles():
    """Function query"""
    articles = Articles.query.all()
    results = articles_schema.dump(articles)

    return jsonify(results)


if __name__ == "__main__":
    app.run(debug=True)
