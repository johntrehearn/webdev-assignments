
document.getElementById("start").addEventListener("click", () => {
    number1 = document.getElementById("num1").value;
    number2 = document.getElementById("num2").value;

    operation = document.getElementById("operation").value;
    console.log(operation);
    if (operation == "add") {
        result = parseInt(number1) + parseInt(number2);
    } else if (operation == "sub") {
        result = parseInt(number1) - parseInt(number2);
    } else if (operation == "multi") {
        result = parseInt(number1) * parseInt(number2);
    } else if (operation == "div") {
        result = parseInt(number1) / parseInt(number2);
    }
    document.getElementById("result").innerHTML = result;
})