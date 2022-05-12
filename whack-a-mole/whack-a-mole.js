// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Whack-a-Mole!')

let holes = document.getElementsByTagName('TD')
let img = document.createElement('img')
img.classList.add('mole')
img.src = 'mole.PNG'
img.onclick = whackedMole

// Randomly put the mole inside

function putMoleinHole() {
  let randomIndex = Math.floor(Math.random() * 24)
  let randomCell = holes[randomIndex]

  randomCell.appendChild(img)
}
putMoleinHole()

function whackedMole() {
  img.remove(img)
  putMoleinHole()
}
