function rollDice() {
    let roll = parseInt(Math.random() * 6 + 1);
    document.querySelector("#target").innerHTML += `<li>${roll}</li>`;
    while (roll != 6) {
        roll = parseInt(Math.random() * 6 + 1);
         document.querySelector("#target").innerHTML += `<li>${roll}</li>`;
    }

}

rollDice();