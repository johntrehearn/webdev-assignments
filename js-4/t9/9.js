
document.getElementById("start").addEventListener("click", () => {

let calcText= document.getElementById("calculation").value;

for (let i = 0; i < calcText.length; i++) {
    if (calcText[i] == "+") {
        let numbers = calcText.split("+");
        let num1 = parseInt(numbers[0]);
        let num2 = parseInt(numbers[1]);
        let calc = num1 + num2;
        document.getElementById("result").innerHTML = calc;
    } else if (calcText[i] == "-") {
        let numbers = calcText.split("-");
        let num1 = parseInt(numbers[0]);
        let num2 = parseInt(numbers[1]);
        let calc = num1 - num2;
        document.getElementById("result").innerHTML = calc;
    } else if (calcText[i] == "*") {
        let numbers = calcText.split("*");
        let num1 = parseInt(numbers[0]);
        let num2 = parseInt(numbers[1]);
        let calc = num1 * num2;
        document.getElementById("result").innerHTML = calc;
    }else if (calcText[i] == "/") {
        let numbers = calcText.split("/");
        let num1 = parseInt(numbers[0]);
        let num2 = parseInt(numbers[1]);
        let calc = num1 / num2;
        document.getElementById("result").innerHTML = calc;
    }
}

})