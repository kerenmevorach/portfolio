let firstsquare = document.getElementById('square1')
let secondsquare = document.getElementById('square2')
let thirdsquare = document.getElementById('square3')
let fourthsquare = document.getElementById('square4')

// let heightslider1 = document.getElementById("slider1");
// let heightslider2 = document.getElementById("slider2");
// let heightslider3 = document.getElementById("slider3");
// let heightslider4 = document.getElementById("slider4");

let heightleftslider = document.getElementById('leftslider')
let heightrightslider = document.getElementById('rightslider')

let bverticalleft = document.getElementById('bvertical1')
let bverticalright = document.getElementById('bvertical2')
let bhorizontaltop = document.getElementById('btophorizontal')
let bhorizontalmiddle = document.getElementById('bmiddlehorizontal')
let bhorizontalbottom = document.getElementById('bbottomhorizontal')

let a1verticalleft = document.getElementById('a1vertical1')
let a1verticalright = document.getElementById('a1vertical2')
let a1horizontaltop = document.getElementById('a1tophorizontal')
let a1horizontalmiddle = document.getElementById('a1middlehorizontal')
let a1lefthorizontal = document.getElementById('a1lefthorizontal')
let a1righthorizontal = document.getElementById('a1righthorizontal')

let ttophorizontal = document.getElementById('ttophorizontal')
let tvertical1 = document.getElementById('tvertical1')
let tvertical2 = document.getElementById('tvertical2')
let tvertical3 = document.getElementById('tvertical3')
let tbottomhorizontal = document.getElementById('tbottomhorizontal')


let a2verticalleft = document.getElementById('a2vertical1')
let a2verticalright = document.getElementById('a2vertical2')
let a2horizontaltop = document.getElementById('a2tophorizontal')
let a2horizontalmiddle = document.getElementById('a2middlehorizontal')
let a2lefthorizontal = document.getElementById('a2lefthorizontal')
let a2righthorizontal = document.getElementById('a2righthorizontal')

let shoemuseum = document.getElementById('shoe')

let shape = document.getElementById('shape')
let outline = document.getElementById('outline')
let navy = document.getElementById('navy')
let navyoutline = document.getElementById('navyoutline')
let red = document.getElementById('red')
let redoutline = document.getElementById('redoutline')
let green = document.getElementById('green')
let greenoutline = document.getElementById('greenoutline')
let pink = document.getElementById('pink')
let pinkoutline = document.getElementById('pinkoutline')
let blue = document.getElementById('blue')
let blueoutline = document.getElementById('blueoutline')
let orange = document.getElementById('orange')
let orangeoutline = document.getElementById('orangeoutline')
let black = document.getElementById('black')
let blackoutline = document.getElementById('blackoutline')

// height:


let square1height = Math.random() * (370 - 110) + 110
let square2height = Math.random() * (370 - 110) + 110
let square3height = 475 - square1height
let square4height = 475 - square2height

firstsquare.style.height = square1height + 'px'
secondsquare.style.height = square2height + 'px'
thirdsquare.style.height = square3height + 'px'
fourthsquare.style.height = square4height + 'px'

// // width:

// let square1width = Math.random() * (350 - 40 + 1) + 40;
// let square2width = 350 - square1width;
// let square3width = square1width;
// let square4width = square2width;

// firstsquare.style.width = square1width + 'px';
// secondsquare.style.width = ssquare2width + 'px';
// thirdsquare.style.width = square3width + 'px';
// fourthsquare.style.width = square4width + 'px';

// colors:

let colors = [
  'black',
  'rgb(54, 73, 131)',
  'rgb(0, 133, 219)',
  'rgb(179, 230, 14)',
  'rgb(204, 0, 51)',
  'rgb(220, 116, 337)',
  'rgb(255, 161, 0)',
]
// "rgb(239, 239, 203"]

let randomcolor1 = colors[Math.floor(Math.random() * colors.length)]
let randomcolor2 = colors[Math.floor(Math.random() * colors.length)]
let randomcolor3 = colors[Math.floor(Math.random() * colors.length)]
let randomcolor4 = colors[Math.floor(Math.random() * colors.length)]

bverticalleft.style.backgroundColor = randomcolor1
bverticalright.style.backgroundColor = randomcolor1
bhorizontaltop.style.backgroundColor = randomcolor1
bhorizontalmiddle.style.backgroundColor = randomcolor1
bhorizontalbottom.style.backgroundColor = randomcolor1

a1verticalleft.style.backgroundColor = randomcolor1
a1verticalright.style.backgroundColor = randomcolor1
a1horizontaltop.style.backgroundColor = randomcolor1
a1horizontalmiddle.style.backgroundColor = randomcolor1
a1lefthorizontal.style.backgroundColor = randomcolor1
a1righthorizontal.style.backgroundColor = randomcolor1

ttophorizontal.style.backgroundColor = randomcolor1
tvertical1.style.backgroundColor = randomcolor1
tvertical2.style.backgroundColor = randomcolor1
tvertical3.style.backgroundColor = randomcolor1
tbottomhorizontal.style.backgroundColor = randomcolor1

a2verticalleft.style.backgroundColor = randomcolor1
a2verticalright.style.backgroundColor = randomcolor1
a2horizontaltop.style.backgroundColor = randomcolor1
a2horizontalmiddle.style.backgroundColor = randomcolor1
a2lefthorizontal.style.backgroundColor = randomcolor1
a2righthorizontal.style.backgroundColor = randomcolor1

shoemuseum.style.color = randomcolor1

// slider:

heightleftslider.oninput = function () {
  firstsquare.style.height = heightleftslider.value + 'px'
  thirdsquare.style.height = 475 - heightleftslider.value + 'px'
}

heightrightslider.oninput = function () {
  secondsquare.style.height = heightrightslider.value + 'px'
  fourthsquare.style.height = 475 - heightrightslider.value + 'px'
}

navy.onclick = function () {
  navyoutline.style.display = 'inline-block'
  redoutline.style.display = 'none'
  greenoutline.style.display = 'none'
  pinkoutline.style.display = 'none'
  blueoutline.style.display = 'none'
  orangeoutline.style.display = 'none'
  blackoutline.style.display = 'none'

  bverticalleft.style.backgroundColor = 'rgb(54, 73, 131)'
  bverticalright.style.backgroundColor = 'rgb(54, 73, 131)'
  bhorizontaltop.style.backgroundColor = 'rgb(54, 73, 131)'
  bhorizontalmiddle.style.backgroundColor = 'rgb(54, 73, 131)'
  bhorizontalbottom.style.backgroundColor = 'rgb(54, 73, 131)'

  a1verticalleft.style.backgroundColor = 'rgb(54, 73, 131)'
  a1verticalright.style.backgroundColor = 'rgb(54, 73, 131)'
  a1horizontaltop.style.backgroundColor = 'rgb(54, 73, 131)'
  a1horizontalmiddle.style.backgroundColor = 'rgb(54, 73, 131)'
  a1lefthorizontal.style.backgroundColor = 'rgb(54, 73, 131)'
  a1righthorizontal.style.backgroundColor = 'rgb(54, 73, 131)'

  ttophorizontal.style.backgroundColor = 'rgb(54, 73, 131)'
  tvertical3.style.backgroundColor = 'rgb(54, 73, 131)'
  tvertical1.style.backgroundColor = 'rgb(54, 73, 131)'
  tvertical2.style.backgroundColor = 'rgb(54, 73, 131)'
  tbottomhorizontal.style.backgroundColor = 'rgb(54, 73, 131)'

  a2verticalleft.style.backgroundColor = 'rgb(54, 73, 131)'
  a2verticalright.style.backgroundColor = 'rgb(54, 73, 131)'
  a2horizontaltop.style.backgroundColor = 'rgb(54, 73, 131)'
  a2horizontalmiddle.style.backgroundColor = 'rgb(54, 73, 131)'
  a2lefthorizontal.style.backgroundColor = 'rgb(54, 73, 131)'
  a2righthorizontal.style.backgroundColor = 'rgb(54, 73, 131)'

  shoemuseum.style.color = 'rgb(54, 73, 131)'
}

red.onclick = function () {
  navyoutline.style.display = 'none'
  redoutline.style.display = 'inline-block'
  greenoutline.style.display = 'none'
  pinkoutline.style.display = 'none'
  blueoutline.style.display = 'none'
  orangeoutline.style.display = 'none'
  blackoutline.style.display = 'none'

  bverticalleft.style.backgroundColor = 'rgb(204, 0, 51)'
  bverticalright.style.backgroundColor = 'rgb(204, 0, 51)'
  bhorizontaltop.style.backgroundColor = 'rgb(204, 0, 51)'
  bhorizontalmiddle.style.backgroundColor = 'rgb(204, 0, 51)'
  bhorizontalbottom.style.backgroundColor = 'rgb(204, 0, 51)'

  a1verticalleft.style.backgroundColor = 'rgb(204, 0, 51)'
  a1verticalright.style.backgroundColor = 'rgb(204, 0, 51)'
  a1horizontaltop.style.backgroundColor = 'rgb(204, 0, 51)'
  a1horizontalmiddle.style.backgroundColor = 'rgb(204, 0, 51)'
  a1lefthorizontal.style.backgroundColor = 'rgb(204, 0, 51)'
  a1righthorizontal.style.backgroundColor = 'rgb(204, 0, 51)'

  ttophorizontal.style.backgroundColor = 'rgb(204, 0, 51)'
  tvertical3.style.backgroundColor = 'rgb(204, 0, 51)'
  tvertical1.style.backgroundColor = 'rgb(204, 0, 51)'
  tvertical2.style.backgroundColor = 'rgb(204, 0, 51)'
  tbottomhorizontal.style.backgroundColor = 'rgb(204, 0, 51)'

  a2verticalleft.style.backgroundColor = 'rgb(204, 0, 51)'
  a2verticalright.style.backgroundColor = 'rgb(204, 0, 51)'
  a2horizontaltop.style.backgroundColor = 'rgb(204, 0, 51)'
  a2horizontalmiddle.style.backgroundColor = 'rgb(204, 0, 51)'
  a2lefthorizontal.style.backgroundColor = 'rgb(204, 0, 51)'
  a2righthorizontal.style.backgroundColor = 'rgb(204, 0, 51)'


  shoemuseum.style.color = 'rgb(204, 0, 51)'
}

green.onclick = function () {
  navyoutline.style.display = 'none'
  redoutline.style.display = 'none'
  greenoutline.style.display = 'inline-block'
  pinkoutline.style.display = 'none'
  blueoutline.style.display = 'none'
  orangeoutline.style.display = 'none'
  blackoutline.style.display = 'none'

  bverticalleft.style.backgroundColor = 'rgb(179, 230, 14)'
  bverticalright.style.backgroundColor = 'rgb(179, 230, 14)'
  bhorizontaltop.style.backgroundColor = 'rgb(179, 230, 14)'
  bhorizontalmiddle.style.backgroundColor = 'rgb(179, 230, 14)'
  bhorizontalbottom.style.backgroundColor = 'rgb(179, 230, 14)'

  a1verticalleft.style.backgroundColor = 'rgb(179, 230, 14)'
  a1verticalright.style.backgroundColor = 'rgb(179, 230, 14)'
  a1horizontaltop.style.backgroundColor = 'rgb(179, 230, 14)'
  a1horizontalmiddle.style.backgroundColor = 'rgb(179, 230, 14)'
  a1lefthorizontal.style.backgroundColor = 'rgb(179, 230, 14)'
  a1righthorizontal.style.backgroundColor = 'rgb(179, 230, 14)'

  ttophorizontal.style.backgroundColor = 'rgb(179, 230, 14)'
  tvertical3.style.backgroundColor = 'rgb(179, 230, 14)'
  tvertical1.style.backgroundColor = 'rgb(179, 230, 14)'
  tvertical2.style.backgroundColor = 'rgb(179, 230, 14)'
  tbottomhorizontal.style.backgroundColor = 'rgb(179, 230, 14)'

  a2verticalleft.style.backgroundColor = 'rgb(179, 230, 14)'
  a2verticalright.style.backgroundColor = 'rgb(179, 230, 14)'
  a2horizontaltop.style.backgroundColor = 'rgb(179, 230, 14)'
  a2horizontalmiddle.style.backgroundColor = 'rgb(179, 230, 14)'
  a2lefthorizontal.style.backgroundColor = 'rgb(179, 230, 14)'
  a2righthorizontal.style.backgroundColor = 'rgb(179, 230, 14)'

  shoemuseum.style.color = 'rgb(179, 230, 14)'
}

pink.onclick = function () {
  navyoutline.style.display = 'none'
  redoutline.style.display = 'none'
  greenoutline.style.display = 'none'
  pinkoutline.style.display = 'inline-block'
  blueoutline.style.display = 'none'
  orangeoutline.style.display = 'none'
  blackoutline.style.display = 'none'

  bverticalleft.style.backgroundColor = 'rgb(220, 116, 337)'
  bverticalright.style.backgroundColor = 'rgb(220, 116, 337)'
  bhorizontaltop.style.backgroundColor = 'rgb(220, 116, 337)'
  bhorizontalmiddle.style.backgroundColor = 'rgb(220, 116, 337)'
  bhorizontalbottom.style.backgroundColor = 'rgb(220, 116, 337)'

  a1verticalleft.style.backgroundColor = 'rgb(220, 116, 337)'
  a1verticalright.style.backgroundColor = 'rgb(220, 116, 337)'
  a1horizontaltop.style.backgroundColor = 'rgb(220, 116, 337)'
  a1horizontalmiddle.style.backgroundColor = 'rgb(220, 116, 337)'
  a1lefthorizontal.style.backgroundColor = 'rgb(220, 116, 337)'
  a1righthorizontal.style.backgroundColor = 'rgb(220, 116, 337)'

  ttophorizontal.style.backgroundColor = 'rgb(220, 116, 337)'
  tvertical3.style.backgroundColor = 'rgb(220, 116, 337)'
  tvertical1.style.backgroundColor = 'rgb(220, 116, 337)'
  tvertical2.style.backgroundColor = 'rgb(220, 116, 337)'
  tbottomhorizontal.style.backgroundColor = 'rgb(220, 116, 337)'

  a2verticalleft.style.backgroundColor = 'rgb(220, 116, 337)'
  a2verticalright.style.backgroundColor = 'rgb(220, 116, 337)'
  a2horizontaltop.style.backgroundColor = 'rgb(220, 116, 337)'
  a2horizontalmiddle.style.backgroundColor = 'rgb(220, 116, 337)'
  a2lefthorizontal.style.backgroundColor = 'rgb(220, 116, 337)'
  a2righthorizontal.style.backgroundColor = 'rgb(220, 116, 337)'

  shoemuseum.style.color = 'rgb(220, 116, 337)'
}

blue.onclick = function () {
  navyoutline.style.display = 'none'
  redoutline.style.display = 'none'
  greenoutline.style.display = 'none'
  pinkoutline.style.display = 'none'
  blueoutline.style.display = 'inline-block'
  orangeoutline.style.display = 'none'
  blackoutline.style.display = 'none'

  bverticalleft.style.backgroundColor = 'rgb(0, 133, 219)'
  bverticalright.style.backgroundColor = 'rgb(0, 133, 219)'
  bhorizontaltop.style.backgroundColor = 'rgb(0, 133, 219)'
  bhorizontalmiddle.style.backgroundColor = 'rgb(0, 133, 219)'
  bhorizontalbottom.style.backgroundColor = 'rgb(0, 133, 219)'

  a1verticalleft.style.backgroundColor = 'rgb(0, 133, 219)'
  a1verticalright.style.backgroundColor = 'rgb(0, 133, 219)'
  a1horizontaltop.style.backgroundColor = 'rgb(0, 133, 219)'
  a1horizontalmiddle.style.backgroundColor = 'rgb(0, 133, 219)'
  a1lefthorizontal.style.backgroundColor = 'rgb(0, 133, 219)'
  a1righthorizontal.style.backgroundColor = 'rgb(0, 133, 219)'

  ttophorizontal.style.backgroundColor = 'rgb(0, 133, 219)'
  tvertical3.style.backgroundColor = 'rgb(0, 133, 219)'
  tvertical1.style.backgroundColor = 'rgb(0, 133, 219)'
  tvertical2.style.backgroundColor = 'rgb(0, 133, 219)'
  tbottomhorizontal.style.backgroundColor = 'rgb(0, 133, 219)'

  a2verticalleft.style.backgroundColor = 'rgb(0, 133, 219)'
  a2verticalright.style.backgroundColor = 'rgb(0, 133, 219)'
  a2horizontaltop.style.backgroundColor = 'rgb(0, 133, 219)'
  a2horizontalmiddle.style.backgroundColor = 'rgb(0, 133, 219)'
  a2lefthorizontal.style.backgroundColor = 'rgb(0, 133, 219)'
  a2righthorizontal.style.backgroundColor = 'rgb(0, 133, 219)'

  shoemuseum.style.color = 'rgb(0, 133, 219)'
}

orange.onclick = function () {
  navyoutline.style.display = 'none'
  redoutline.style.display = 'none'
  greenoutline.style.display = 'none'
  pinkoutline.style.display = 'none'
  blueoutline.style.display = 'none'
  orangeoutline.style.display = 'inline-block'
  blackoutline.style.display = 'none'

  bverticalleft.style.backgroundColor = 'rgb(255, 161, 0)'
  bverticalright.style.backgroundColor = 'rgb(255, 161, 0)'
  bhorizontaltop.style.backgroundColor = 'rgb(255, 161, 0)'
  bhorizontalmiddle.style.backgroundColor = 'rgb(255, 161, 0)'
  bhorizontalbottom.style.backgroundColor = 'rgb(255, 161, 0)'

  a1verticalleft.style.backgroundColor = 'rgb(255, 161, 0)'
  a1verticalright.style.backgroundColor = 'rgb(255, 161, 0)'
  a1horizontaltop.style.backgroundColor = 'rgb(255, 161, 0)'
  a1horizontalmiddle.style.backgroundColor = 'rgb(255, 161, 0)'
  a1lefthorizontal.style.backgroundColor = 'rgb(255, 161, 0)'
  a1righthorizontal.style.backgroundColor = 'rgb(255, 161, 0)'

  ttophorizontal.style.backgroundColor = 'rgb(255, 161, 0)'
  tvertical3.style.backgroundColor = 'rgb(255, 161, 0)'
  tvertical1.style.backgroundColor = 'rgb(255, 161, 0)'
  tvertical2.style.backgroundColor = 'rgb(255, 161, 0)'
  tbottomhorizontal.style.backgroundColor = 'rgb(255, 161, 0)'

  a2verticalleft.style.backgroundColor = 'rgb(255, 161, 0)'
  a2verticalright.style.backgroundColor = 'rgb(255, 161, 0)'
  a2horizontaltop.style.backgroundColor = 'rgb(255, 161, 0)'
  a2horizontalmiddle.style.backgroundColor = 'rgb(255, 161, 0)'
  a2lefthorizontal.style.backgroundColor = 'rgb(255, 161, 0)'
  a2righthorizontal.style.backgroundColor = 'rgb(255, 161, 0)'

  shoemuseum.style.color = 'rgb(255, 161, 0)'
}

black.onclick = function () {
  navyoutline.style.display = 'none'
  redoutline.style.display = 'none'
  greenoutline.style.display = 'none'
  pinkoutline.style.display = 'none'
  blueoutline.style.display = 'none'
  orangeoutline.style.display = 'none'
  blackoutline.style.display = 'inline-block'

  bverticalleft.style.backgroundColor = 'black'
  bverticalright.style.backgroundColor = 'black'
  bhorizontaltop.style.backgroundColor = 'black'
  bhorizontalmiddle.style.backgroundColor = 'black'
  bhorizontalbottom.style.backgroundColor = 'black'

  a1verticalleft.style.backgroundColor = 'black'
  a1verticalright.style.backgroundColor = 'black'
  a1horizontaltop.style.backgroundColor = 'black'
  a1horizontalmiddle.style.backgroundColor = 'black'
  a1lefthorizontal.style.backgroundColor = 'black'
  a1righthorizontal.style.backgroundColor = 'black'

  ttophorizontal.style.backgroundColor = 'black'
  tvertical3.style.backgroundColor = 'black'
  tvertical1.style.backgroundColor = 'black'
  tvertical2.style.backgroundColor = 'black'
  tbottomhorizontal.style.backgroundColor = 'black'

  a2verticalleft.style.backgroundColor = 'black'
  a2verticalright.style.backgroundColor = 'black'
  a2horizontaltop.style.backgroundColor = 'black'
  a2horizontalmiddle.style.backgroundColor = 'black'
  a2lefthorizontal.style.backgroundColor = 'black'
  a2righthorizontal.style.backgroundColor = 'black'

  shoemuseum.style.color = 'black'
}

navy.onmouseover = function () {
  navy.style.opacity = '50%'
  navy.style.cursor = 'pointer'
  // navyoutline.style.display = 'block'
}

navy.onmouseleave = function () {
  navy.style.opacity = '100%'
  // navyoutline.style.display = 'none'
}

red.onmouseover = function () {
  red.style.opacity = '50%'
  red.style.cursor = 'pointer'
}

red.onmouseleave = function () {
  red.style.opacity = '100%'
}

green.onmouseover = function () {
  green.style.opacity = '50%'
  green.style.cursor = 'pointer'
}

green.onmouseleave = function () {
  green.style.opacity = '100%'
}

pink.onmouseover = function () {
  pink.style.opacity = '50%'
  pink.style.cursor = 'pointer'
}

pink.onmouseleave = function () {
  pink.style.opacity = '100%'
}

blue.onmouseover = function () {
  blue.style.opacity = '50%'
  blue.style.cursor = 'pointer'
}

blue.onmouseleave = function () {
  blue.style.opacity = '100%'
}

orange.onmouseover = function () {
  orange.style.opacity = '50%'
  orange.style.cursor = 'pointer'
}

orange.onmouseleave = function () {
  orange.style.opacity = '100%'
}

black.onmouseover = function () {
  black.style.opacity = '50%'
  black.style.cursor = 'pointer'
}

black.onmouseleave = function () {
  black.style.opacity = '100%'
}

if (randomcolor1 == 'rgb(54, 73, 131)') {
  navyoutline.style.display = 'inline-block'
  redoutline.style.display = 'none'
  greenoutline.style.display = 'none'
  pinkoutline.style.display = 'none'
  blueoutline.style.display = 'none'
  orangeoutline.style.display = 'none'
  blackoutline.style.display = 'none'
}

if (randomcolor1 == 'rgb(204, 0, 51)') {
  navyoutline.style.display = 'none'
  redoutline.style.display = 'inline-block'
  greenoutline.style.display = 'none'
  pinkoutline.style.display = 'none'
  blueoutline.style.display = 'none'
  orangeoutline.style.display = 'none'
  blackoutline.style.display = 'none'
}

if (randomcolor1 == 'rgb(179, 230, 14)') {
  navyoutline.style.display = 'none'
  redoutline.style.display = 'none'
  greenoutline.style.display = 'inline-block'
  pinkoutline.style.display = 'none'
  blueoutline.style.display = 'none'
  orangeoutline.style.display = 'none'
  blackoutline.style.display = 'none'
}

if (randomcolor1 == 'rgb(220, 116, 337)') {
  navyoutline.style.display = 'none'
  redoutline.style.display = 'none'
  greenoutline.style.display = 'none'
  pinkoutline.style.display = 'inline-block'
  blueoutline.style.display = 'none'
  orangeoutline.style.display = 'none'
  blackoutline.style.display = 'none'
}

if (randomcolor1 == 'rgb(0, 133, 219)') {
  navyoutline.style.display = 'none'
  redoutline.style.display = 'none'
  greenoutline.style.display = 'none'
  pinkoutline.style.display = 'none'
  blueoutline.style.display = 'inline-block'
  orangeoutline.style.display = 'none'
  blackoutline.style.display = 'none'
}

if (randomcolor1 == 'rgb(255, 161, 0)') {
  navyoutline.style.display = 'none'
  redoutline.style.display = 'none'
  greenoutline.style.display = 'none'
  pinkoutline.style.display = 'none'
  blueoutline.style.display = 'none'
  orangeoutline.style.display = 'inline-block'
  blackoutline.style.display = 'none'
}

if (randomcolor1 == 'black') {
  navyoutline.style.display = 'none'
  redoutline.style.display = 'none'
  greenoutline.style.display = 'none'
  pinkoutline.style.display = 'none'
  blueoutline.style.display = 'none'
  orangeoutline.style.display = 'none'
  blackoutline.style.display = 'inline-block'
}
