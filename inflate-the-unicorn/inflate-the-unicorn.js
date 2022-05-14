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

let images = document.getElementsByClassName('inflate-an-image')
let number = [0]
let popup = 'Unicorn' + number

for (let i = 0; i < images.length; i++) {
  images[i].onclick = changeImage
}

// CLICKING THE UNICORNS

function changeImage(e) {
  let images = e.target
  for (let i = 0; i < unicornArray.length; i++) {
    if (unicornArray[i].src === images.src) {
      i++
      if ((images.src = unicornArray[0].src)) {
        images.src = unicornArray[i++].src
      }
    }
  }
  if (images.src === unicornArray[3].src) {
    alert('Woo hoo ' + (popup + number++) + ' says thanks!')
  }
}
