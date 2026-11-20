from flask import Flask, request
import json

app = Flask(__name__)

@app.route('/add')
def add_word():
    en = request.args.get("en")
    fi = request.args.get("fi")

    with open("dictionary.json", encoding="utf-8") as file:
        dictionary = json.load(file)

    dictionary[en] = fi

    with open("dictionary.json", "w", encoding="utf-8") as file:
        json.dump(dictionary, file, ensure_ascii=False, indent=4)

    return {"English": en, "Finnish": fi}, 200

if __name__ == '__main__':
    app.run(use_reloader=True, host='127.0.0.1', port=5000)
