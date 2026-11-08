let numbers = [];

let inputNo;

while (inputNo != 0){
    inputNo = parseFloat(prompt("Please enter a number (0 to end): "))
    if (inputNo != 0) {
        numbers.push(inputNo)
    }
}

numbers.sort((a, b) => b - a);
console.log(numbers)