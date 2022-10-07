var firstPar = document.body.firstElementChild;
var secondPar = document.getElementsByClassName(`second-paragraph`)[0];
var styleButton = document.getElementById("background-btn");
styleButton.addEventListener('click', (setBackground));
function setBackground() {
    firstPar.style.backgroundColor = 'red';
    secondPar.style.backgroundColor = 'yellow';
}
