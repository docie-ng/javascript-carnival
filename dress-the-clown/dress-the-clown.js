// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Dress The Clown!')

var headIndex = 0
var bodyIndex = 0
var shoesIndex = 0
var whichIndex = 0

var head = document.getElementById('head')
var body = document.getElementById('body')
var shoes = document.getElementById('shoes')

document.onkeydown = checkKey

function checkKey(e) {
  if (e.keyCode == '38') {
    changeCategory(-1)
  } else if (e.keyCode == '40') {
    changeCategory(1)
  } else if (e.keyCode == '37') {
    leftRight(-1)
  } else if (e.keyCode == '39') {
    leftRight(1)
  }
}

function leftRight(switchImage) {
  if (whichIndex == 0) {
    headIndex += switchImage

    if (headIndex < 0) headIndex = 5
    if (headIndex > 5) headIndex = 0

    head.src = './images/head' + headIndex + '.png'
  }

  if (whichIndex == 1) {
    bodyIndex += switchImage

    if (bodyIndex < 0) bodyIndex = 5
    if (bodyIndex > 5) bodyIndex = 0

    body.src = './images/body' + bodyIndex + '.png'
  }

  if (whichIndex == 2) {
    shoesIndex += switchImage

    if (shoesIndex < 0) shoesIndex = 5
    if (shoesIndex > 5) shoesIndex = 0

    shoes.src = './images/shoes' + shoesIndex + '.png'
  }
}

function changeCategory(switchImage) {
  whichIndex += switchImage

  if (whichIndex < 0) whichIndex = 2

  if (whichIndex > 2) whichIndex = 0
}
