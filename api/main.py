from flask import Flask, request
from flask import request
from flask_cors import CORS
from mongo_client import insert_test_document
import requests

UNSPLASH_URL = 'https://api.unsplash.com/photos/random'
UNSPLASH_KEY = 't11X0zZNEoDJNqc7e3M0Uj3RIV37FQAzf5g9yhk9k8U'
# DEBUG = bool(os.environ.get("DEBUG", True))
if not UNSPLASH_KEY:
    raise EnvironmentError("Please insert an UNSPLASH_KEY")
app = Flask(__name__)

CORS(app)

# app.config["DEBUG"] = DEBUG
insert_test_document()


@app.route("/new-image")
def new_image():
    word = request.args.get("query")

    headers = {
        "Accept-Version": "v1",
        "Authorization": "Client-ID " + UNSPLASH_KEY
    }
    params = {
        "query": word
    }
    response = requests.get(url=UNSPLASH_URL, headers=headers, params=params)
    data = response.json()
    return data


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5050)
