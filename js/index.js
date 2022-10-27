// we declare the variables 

let count = 0

let countEl = document.getElementById("count")
let savedEl = document.getElementById("saved")

function increase() {
    count += 1
    countEl.textContent = count
}

function reduce() {
    count -= 1
    countEl.textContent = count
}

function save() {
    savedEl.textContent += count + " - "
    count = 0
    countEl.textContent = 0
}

