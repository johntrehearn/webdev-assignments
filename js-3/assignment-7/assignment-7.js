function rollDice(sides) {
    let roll = parseInt(Math.random() * sides + 1);
    document.querySelector("#target").innerHTML += `<li>${roll}</li>`;
    while (roll != sides) {
        roll = parseInt(Math.random() * sides + 1);
         document.querySelector("#target").innerHTML += `<li>${roll}</li>`;
    }

}

let sides = prompt("How many sided dice do you want?: ");
rollDice(sides);