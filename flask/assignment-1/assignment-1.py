from flask import Flask, request

app = Flask(__name__)
@app.route('/prime')
def prime_number():
    args = request.args
    number1 = int(args.get("number1"))
    if 