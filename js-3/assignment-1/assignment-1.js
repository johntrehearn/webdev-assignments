let numbers = [];

for (let i = 0; i < 5; i++) {
    numbers.push(prompt("Please enter number: "));
}
for (let j = 4; j >= 0; j--) {
    console.log(numbers[j]);
}
