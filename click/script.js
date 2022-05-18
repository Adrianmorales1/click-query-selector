var count = 1;
var countElement = document.querySelector("#count");

console.log(countElement);

function add() {
    count++;
    countElement.innerText = `the count is ${count}`
    console.log(count)
}

function subtract() {
    count--;
    countElement.innerText = `the count is ${count}`
    console.log(count)
}