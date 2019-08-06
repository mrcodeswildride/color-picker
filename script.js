var box = document.getElementById("box");
var colorText = document.getElementById("colorText");
var redInput = document.getElementById("red");
var greenInput = document.getElementById("green");
var blueInput = document.getElementById("blue");
var randomColorButton = document.getElementById("randomColor");
var invertColorButton = document.getElementById("invertColor");

redInput.addEventListener("input", setColor);
greenInput.addEventListener("input", setColor);
blueInput.addEventListener("input", setColor);
randomColorButton.addEventListener("click", setRandomColor);
invertColorButton.addEventListener("click", setInvertedColor);

function setColor() {
    box.style.backgroundColor = "rgb(" + redInput.value + ", " + greenInput.value + ", " + blueInput.value + ")";
    colorText.innerHTML = "rgb(" + redInput.value + ", " + greenInput.value + ", " + blueInput.value + ")";
}

function setRandomColor() {
    redInput.value = Math.floor(Math.random() * 256);
    greenInput.value = Math.floor(Math.random() * 256);
    blueInput.value = Math.floor(Math.random() * 256);

    setColor();
}

function setInvertedColor() {
    redInput.value = 255 - redInput.value;
    greenInput.value = 255 - greenInput.value;
    blueInput.value = 255 - blueInput.value;

    setColor();
}
