NoParticipants = prompt("Please enter the number of participants: ");
let participants = [];

for (let i = 0; i < NoParticipants; i++) {
    participants.push(prompt("Please enter participant name: "));
}

participants.sort();

for (let j = 0; j < participants.length; j++) {
    document.querySelector("#target").innerHTML += `<li>${participants[j]}</li>`;
}
