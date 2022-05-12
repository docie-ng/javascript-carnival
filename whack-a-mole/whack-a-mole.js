// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Whack-a-Mole!')

let holes = document.getElementsByTagName('TD')

// for (let i = 0; i < holes.length; i++) {
//   holes[i].onclick = whack
// }
// // checking for clicks
// function whack(e) {
//   let holes = e.target
//   console.log('whack ')
// }

// Randomly put the mole inside

function putMoleinHole() {
  let randomIndex = Math.floor(Math.random() * 24)
  let holes = holes[randomIndex]
  console.log(randomIndex)
}
putMoleinHole()
