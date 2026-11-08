let numbers = [];

let match = false;

while (match === false) {
    let inputNo = parseInt(prompt("Please enter a number : "));
    for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === inputNo) {
        match = true;
        break;
    }
} 

if (match === false) {
    numbers.push(inputNo);
}

}

alert("That number has already been entered.")

numbers.sort((a, b) => a - b);

for (let j = 0; j < numbers.length; j++) {

    console.log(numbers[j]);
}




