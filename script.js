let box = document.getElementById(`box`)
let redSlider = document.getElementById(`redSlider`)
let greenSlider = document.getElementById(`greenSlider`)
let blueSlider = document.getElementById(`blueSlider`)
let randomButton = document.getElementById(`randomButton`)
let colorText = document.getElementById(`colorText`)

redSlider.addEventListener(`input`, changeColor)
greenSlider.addEventListener(`input`, changeColor)
blueSlider.addEventListener(`input`, changeColor)
randomButton.addEventListener(`click`, changeRandomColor)

function changeColor() {
  box.style.backgroundColor = `rgb(${redSlider.value}, ${greenSlider.value}, ${blueSlider.value})`
  colorText.innerHTML = `rgb(${redSlider.value}, ${greenSlider.value}, ${blueSlider.value})`
}

function changeRandomColor() {
  redSlider.value = Math.floor(Math.random() * 256)
  greenSlider.value = Math.floor(Math.random() * 256)
  blueSlider.value = Math.floor(Math.random() * 256)
  changeColor()
}