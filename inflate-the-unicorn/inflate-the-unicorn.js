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

// // calling on the image when click happens //

function changeImage() {
  let nextImage = document.getElementById('unicorn1')
  for (let i = 0; i < unicornArray.length; i++) {
    if (unicornArray[i].src === nextImage.src) {
      i++
      if ((document.getElementById('unicorn1').src = unicornArray[0].src)) {
        document.getElementById('unicorn1').src = unicornArray[i++].src
      }
    }
  }
}
console.log(changeImage)
