// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Inflate The Unicorn!')

// image data to be stored //

let unicornArray = new Array()
unicornArray[0] = new Image()
unicornArray[0].src = './images/unicorn-0.png'

unicornArray[1] = new Image()
unicornArray[1].src = './images/unicorn-1.png'

unicornArray[2] = new Image()
unicornArray[2].src = './images/unicorn-2.png'

unicornArray[3] = new Image()
unicornArray[3].src = './images/unicorn-3.png'

// console.log(unicornArray)

let images = document.getElementsByClassName('inflate-an-image')

for (let i = 0; i < images.length; i++) {
  images[i].onclick = changeImage
}

// CLICKING THE TILES

function changeImage(e) {
  let images = e.target
  // console.log('i clicked on: ' + images)
  for (let i = 0; i < unicornArray.length; i++) {
    if (unicornArray[i].src === images.src) {
      i++
      if ((images.src = unicornArray[0].src)) {
        images.src = unicornArray[i++].src
      }
    }
  }
}
console.log(changeImage)
