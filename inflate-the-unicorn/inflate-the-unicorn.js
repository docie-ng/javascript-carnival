// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Inflate The Unicorn!')

// image data to be stored //

// let unicornArray = new Array()
// unicornArray[0] = new Image()
// unicornArray[0].src = './images/unicorn-0.png'
// unicornArray[1] = new Image()
// unicornArray[1].src = './images/unicorn-1.png'
// unicornArray[2] = new Image()
// unicornArray[2].src = './images/unicorn-2.png'
// unicornArray[3] = new Image()
// unicornArray[3].src = './images/unicorn-3.png'

// console.log(unicornArray)

// // calling on the image when click happens //

function changeImage() {
  let nextImage = document.getElementById('unicorn 1')
  if (nextImage.src.match('./images/unicorn-0.png'))
    nextImage.src = './images/unicorn-1.png'
  else nextImage.src.match('./images/unicorn-2.png')
  nextImage.src = './images/unicorn-3.png'
}
console.log(changeImage)
