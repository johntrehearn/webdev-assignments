from flask import Flask, request

app = Flask(__name__)
@app.route('/prime')
def prime_number():
    args = request.args
    number1 = int(args.get("number1"))
    isPrime = False
    if number1 > 1:
        isPrime = True
    for i in range(2, number1):
        if number1 % i == 0:
            isPrime = False
            break
    response = {
        "Number": number1,
        "isPrime": isPrime
    }

    return response

if __name__ == '__main__':
    app.run(use_reloader=True, host='127.0.0.1', port=5000)