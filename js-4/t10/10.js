
document.getElementById("source").addEventListener("submit", (event) => {
    
    event.preventDefault();
    const entryForm = document.getElementById("source");
    let firstName = entryForm.elements["firstname"].value;
    let lastName = entryForm.elements["lastname"].value;
    // console.log(firstName);
    // console.log(lastName);

    document.getElementById("target").innerHTML = `Your name is ${firstName} ${lastName}`;
});