let homescore = document.getElementById("score");
let score = 0;
console.log(homescore);

function add1() {
    score += 1;
    homescore.textContent = score;
}

function add2() {
    score += 2;
    homescore.textContent = score;
}

function add3() {
    score += 3;
    homescore.textContent = score;
}
