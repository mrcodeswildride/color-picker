let box = document.getElementById(`box`)

let colorParagraph = document.getElementById(`colorParagraph`)
let redSlider = document.getElementById(`redSlider`)
let greenSlider = document.getElementById(`greenSlider`)
let blueSlider = document.getElementById(`blueSlider`)

let randomButton = document.getElementById(`randomButton`)

redSlider.addEventListener(`input`, mixColors)
greenSlider.addEventListener(`input`, mixColors)
blueSlider.addEventListener(`input`, mixColors)

randomButton.addEventListener(`click`, randomColor)

function mixColors() {
  colorParagraph.innerHTML = `rgb(${redSlider.value}, ${greenSlider.value}, ${blueSlider.value})`
  box.style.backgroundColor = colorParagraph.innerHTML
}

function randomColor() {
  redSlider.value = Math.floor(Math.random() * 256)
  greenSlider.value = Math.floor(Math.random() * 256)
  blueSlider.value = Math.floor(Math.random() * 256)
  mixColors()
}
