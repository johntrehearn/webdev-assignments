from flask import Flask, request
import json

app = Flask(__name__)
@app.route('/translate/<word>')
def translate(word):
    wordLower = word.lower()

    with open("dictionary.json", encoding="utf-8") as file:
        dictionary = json.load(file)

    for key, value in dictionary.items():
        if str(key) == wordLower:
            response = {
                "English": key,
                "Finnish": value
            }
            return response

    response =  {
        "error": "Word not found"
        }, 404

    return response

if __name__ == '__main__':
    app.run(use_reloader=True, host='127.0.0.1', port=5000)