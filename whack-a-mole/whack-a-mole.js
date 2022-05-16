// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Whack-a-Mole!')

let holes = document.getElementsByTagName('TD')
let img = document.createElement('img')
img.classList.add('mole')
img.src = 'mole.PNG'
img.onclick = whackedMole

var audio = new Audio()
audio.src = 'whack-audio.wav'

// Randomly put the mole inside

function putMoleinHole() {
  let randomIndex = Math.floor(Math.random() * 25)
  let randomCell = holes[randomIndex]

  randomCell.appendChild(img)
}
putMoleinHole()

function whackedMole() {
  audio.play()
  img.remove(img)
  putMoleinHole()
}
