let numberOfCanditates = parseInt(prompt("Please enter the number of candidates: "));
let candidates = [];

for (let i = 0; i < numberOfCanditates; i++) {
    candidates.push({
        name: prompt("Please enter candidate name: "),
        votes: 0
    });
}

let numberOfVoters = parseInt(prompt("Please enter the number of voters: "));
for (let i = 0; i < numberOfVoters; i++) {
    let voteFor = prompt("Who would you like to vote for? ");
    if (voteFor === "") {
       continue;
    } else {
    for (let h = 0; h < candidates.length; h++) {
            if (voteFor === candidates[h].name) {
                candidates[h].votes += 1;
            }
        }
    }
}
let winner = candidates[0];

for (let k = 1; k < candidates.length; k++) {
    if (candidates[k].votes > winner.votes) {
        winner = candidates[k];
    }
}

sortedCandidates = candidates.sort((a, b) => b.votes - a.votes);

console.log("The winner is " + winner.name + " with " + winner.votes + " votes.\n");
console.log("results: ");
for (let l = 0; l < sortedCandidates.length; l++) {
    console.log(sortedCandidates[l].name + ": " + sortedCandidates[l].votes + " votes");
}