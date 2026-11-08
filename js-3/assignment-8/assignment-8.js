function concat([...arrays]) {
    let result = "";
    for (let i = 0; i < arrays.length; i++) {
        result = result += arrays[i];
    }
    return result;
}

let result = concat(["Beer", "is", "really", "nice"]);
document.querySelector("#target").innerHTML += `<p>${result}</p>`;