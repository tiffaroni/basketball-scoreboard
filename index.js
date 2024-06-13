let homescore = document.getElementById("homescore");
let hscore = 0;

let guestScore = document.getElementById("guestscore");
let gScore = 0;

function homeAdd1() {
    hscore += 1;
    homescore.textContent = hscore;
}

function homeAdd2() {
    hscore += 2
    homescore.textContent = hscore;
}

function homeAdd3() {
    hscore += 3;
    homescore.textContent = hscore;
}


function guestAdd1() {
    gScore += 1;
    guestScore.textContent = gScore;
}

function guestAdd2() {
    gScore += 2
    guestScore.textContent = gScore;
}

function guestAdd3() {
    gScore += 3;
    guestScore.textContent = gScore;
}
