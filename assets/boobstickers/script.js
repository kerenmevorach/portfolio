// require https://cdnjs.cloudflare.com/ajax/libs/paper.js/0.12.11/paper-full.min.js

/* globals paper*/
/* exported downloadSVG*/

const INCH = 72

// create a canvas and attach paper to it
function setup() {
  const paper_canvas = document.createElement('canvas')
  paper_canvas.setAttribute('width', '500')
  paper_canvas.setAttribute('height', '300')
  document.body.append(paper_canvas)
  paper.setup(paper_canvas)
}

// downloads the paper drawing as svg
// adapted from https://compform.net/vectors/
function downloadSVG(fileName) {
  // use default name if not provided
  fileName = fileName || 'output.svg'

  // create a data url of the file
  var svgData = paper.project.exportSVG({ bounds: 'content', asString: true })
  var url = 'data:image/svg+xml;utf8,' + encodeURIComponent(svgData)

  // create an off-document link to the data, and "click" it
  var link = document.createElement('a')
  link.download = fileName
  link.href = url
  link.click()
}

// center view on `target` item, and zoom to fit
function showItem(target = paper.project.activeLayer) {
  paper.project.view.center = target.bounds.center
  paper.paper.view.zoom = 1
  paper.project.view.zoom = Math.min(
    paper.project.view.bounds.height / target.bounds.height,
    paper.project.view.bounds.width / target.bounds.width,
  )
}

function setColor() {
  var boobColor
  var aerolaColor
  var outlineColor

  const value = document.getElementById('skincolorslider').value
  if (value == 1) {
    boobColor = '#f6d0b2'
    aerolaColor = '#f9b8ad'
    outlineColor = '#d59187'
  }
  if (value == 2) {
    boobColor = '#faddab'
    aerolaColor = '#e2977b'
    outlineColor = '#ac7063'
  }
  if (value == 3) {
    boobColor = '#f7d2b4'
    aerolaColor = '#f9b8ad'
    outlineColor = '#d59187'
  }
  if (value == 4) {
    boobColor = '#f7d4b7'
    aerolaColor = '#fbc1af'
    outlineColor = '#d59187'
  }
  if (value == 5) {
    boobColor = '#e3c092'
    aerolaColor = '#d19c6a'
    outlineColor = '#986342'
  }
  if (value == 6) {
    boobColor = '#dbb788'
    aerolaColor = '#d59187'
    outlineColor = '#ac6f69'
  }
  if (value == 7) {
    boobColor = '#e3c28e'
    aerolaColor = '#d59187'
    outlineColor = '#ac6f69'
  }
  if (value == 8) {
    boobColor = '#d1aa87'
    aerolaColor = '#d59187'
    outlineColor = '#ac6358'
  }
  if (value == 9) {
    boobColor = '#e2ae8b'
    aerolaColor = '#d5858a'
    outlineColor = '#ac6358'
  }
  if (value == 10) {
    boobColor = '#d9ad8d'
    aerolaColor = '#d59187'
    outlineColor = '#ac6358'
  }
  if (value == 11) {
    boobColor = '#daaa7f'
    aerolaColor = '#d5858a'
    outlineColor = '#ac6358'
  }
  if (value == 12) {
    boobColor = '#f7d6b7'
    aerolaColor = '#f9b8ad'
    outlineColor = '#d59187'
  }
  if (value == 13) {
    boobColor = '#d8ae86'
    aerolaColor = '#d59187'
    outlineColor = '#ac6358'
  }
  if (value == 14) {
    boobColor = '#dcae84'
    aerolaColor = '#be805f'
    outlineColor = '#986342'
  }
  if (value == 15) {
    boobColor = '#e7ba95'
    aerolaColor = '#d59187'
    outlineColor = '#b46d67'
  }
  if (value == 16) {
    boobColor = '#d4a681'
    aerolaColor = '#c97d75'
    outlineColor = '#b46d67'
  }
  if (value == 17) {
    boobColor = '#d4a584'
    aerolaColor = '#be805f'
    outlineColor = '#986342'
  }
  if (value == 18) {
    boobColor = '#e1ae71'
    aerolaColor = '#be805f'
    outlineColor = '#986342'
  }
  if (value == 19) {
    boobColor = '#cba27e'
    aerolaColor = '#a96c5e'
    outlineColor = '#8b5855'
  }
  if (value == 20) {
    boobColor = '#d19c6a'
    aerolaColor = '#a96c5e'
    outlineColor = '#8b5855'
  }
  if (value == 21) {
    boobColor = '#dcac6e'
    aerolaColor = '#a96c5e'
    outlineColor = '#8b5855'
  }
  if (value == 22) {
    boobColor = '#cea180'
    aerolaColor = '#a96c5e'
    outlineColor = '#8b5855'
  }
  if (value == 23) {
    boobColor = '#bf8862'
    aerolaColor = '#a96c5e'
    outlineColor = '#8b5855'
  }
  if (value == 24) {
    boobColor = '#c08a61'
    aerolaColor = '#a96668'
    outlineColor = '#8b5855'
  }
  if (value == 25) {
    boobColor = '#c08a62'
    aerolaColor = '#a96c5e'
    outlineColor = '#8b5855'
  }
  if (value == 26) {
    boobColor = '#c19369'
    aerolaColor = '#a96c5e'
    outlineColor = '#8b5855'
  }
  if (value == 27) {
    boobColor = '#ca9465'
    aerolaColor = '#a96c5e'
    outlineColor = '#8b5855'
  }
  if (value == 28) {
    boobColor = '#c59069'
    aerolaColor = '#a96c5e'
    outlineColor = '#8b5855'
  }
  if (value == 29) {
    boobColor = '#cb9866'
    aerolaColor = '#a96c5e'
    outlineColor = '#8b5855'
  }
  if (value == 30) {
    boobColor = '#986e4f'
    aerolaColor = '#814943'
    outlineColor = '#5e2d24'
  }
  if (value == 31) {
    boobColor = '#c0905b'
    aerolaColor = '#a96c5e'
    outlineColor = '#8b5855'
  }
  if (value == 32) {
    boobColor = '#b07e4d'
    aerolaColor = '#825534'
    outlineColor = '#553d35'
  }
  if (value == 33) {
    boobColor = '#a77a4e'
    aerolaColor = '#825534'
    outlineColor = '#553d35'
  }
  if (value == 34) {
    boobColor = '#be8768'
    aerolaColor = '#a96357'
    outlineColor = '#8b5855'
  }
  if (value == 35) {
    boobColor = '#bd8662'
    aerolaColor = '#a96357'
    outlineColor = '#8b5855'
  }
  if (value == 36) {
    boobColor = '#ae7d46'
    aerolaColor = '#825534'
    outlineColor = '#553d35'
  }
  if (value == 37) {
    boobColor = '#9d6a45'
    aerolaColor = '#825534'
    outlineColor = '#553d35'
  }
  if (value == 38) {
    boobColor = '#9a5f32'
    aerolaColor = '#603913'
    outlineColor = '#36201f'
  }
  if (value == 39) {
    boobColor = '#9c623b'
    aerolaColor = '#825534'
    outlineColor = '#553d35'
  }
  if (value == 40) {
    boobColor = '#ac7546'
    aerolaColor = '#825534'
    outlineColor = '#55281d'
  }
  if (value == 41) {
    boobColor = '#825534'
    aerolaColor = '#5e3922'
    outlineColor = '#331412'
  }
  if (value == 42) {
    boobColor = '#935a34'
    aerolaColor = '#5e3922'
    outlineColor = '#331412'
  }
  if (value == 43) {
    boobColor = '#875c2e'
    aerolaColor = '#5e3922'
    outlineColor = '#331412'
  }
  if (value == 44) {
    boobColor = '#805636'
    aerolaColor = '#5e3922'
    outlineColor = '#331412'
  }
  if (value == 45) {
    boobColor = '#7b4a35'
    aerolaColor = '#461a13'
    outlineColor = '#1f100d'
  }
  if (value == 46) {
    boobColor = '#70462e'
    aerolaColor = '#461a13'
    outlineColor = '#1f100d'
  }
  if (value == 47) {
    boobColor = '#986e4f'
    aerolaColor = '#82522d'
    outlineColor = '#55281d'
  }
  if (value == 48) {
    boobColor = '#5e3922'
    aerolaColor = '#331811'
    outlineColor = '#1f100d'
  }
  if (value == 49) {
    boobColor = '#512d1d'
    aerolaColor = '#1f170f'
    outlineColor = '#231f20'
  }
  if (value == 50) {
    boobColor = '#3f312b'
    aerolaColor = '#1f170f'
    outlineColor = '#231f20'
  }
  if (value == 51) {
    boobColor = '#342721'
    aerolaColor = '#1f170f'
    outlineColor = '#black'
  }
  var Boob1 = new paper.Path.Circle(new paper.Point(0, 0), 1 * INCH)
  Boob1.fillColor = boobColor
  var Boob2 = new paper.Path.Circle(new paper.Point(170, 0), 1 * INCH)
  Boob2.fillColor = boobColor

  let leftnipplehorizontalposition = document.getElementById(
    'leftnipplehorizontalposition',
  ).value
  let leftnippleverticalposition = document.getElementById(
    'leftnippleverticalposition',
  ).value
  let leftnipplesize = document.getElementById('leftnipplesize').value
  let widthleftslider = document.getElementById('leftwidth').value
  let heightleftslider = document.getElementById('leftheight').value
  let rotationleftslider = document.getElementById('leftrotation').value
  let widthrightslider = document.getElementById('rightwidth').value
  let heightrightslider = document.getElementById('rightheight').value
  let rotationrightslider = document.getElementById('rightrotation').value
  let rightnipplehorizontalposition = document.getElementById(
    'rightnipplehorizontalposition',
  ).value
  let rightnippleverticalposition = document.getElementById(
    'rightnippleverticalposition',
  ).value
  let rightnipplesize = document.getElementById('rightnipplesize').value

  let logo1 = document.getElementById('outline1')
  let outline1 = paper.project.importSVG(logo1)
  outline1.visible = true
  outline1.bounds = new paper.Rectangle(
    -widthleftslider / 2,
    -heightleftslider / 2.5,
    widthleftslider,
    heightleftslider,
  )
  outline1.rotate(rotationleftslider)

  let logo2 = document.getElementById('outline2')
  let outline2 = paper.project.importSVG(logo2)
  outline2.visible = true
  outline2.bounds = new paper.Rectangle(
    0,
    0,
    widthrightslider,
    heightrightslider,
  )
  outline2.rotate(rotationrightslider)
  outline2.position = new paper.Point(168, 10)

  var Areola1 = new paper.Path.Circle(
    new paper.Point(
      parseInt(leftnipplehorizontalposition),
      parseInt(leftnippleverticalposition),
    ),
    leftnipplesize,
  )

  var Areola2 = new paper.Path.Circle(
    new paper.Point(
      parseInt(rightnipplehorizontalposition),
      parseInt(rightnippleverticalposition),
    ),
    rightnipplesize,
  )

  var Nipple1 = new paper.Path.Circle(
    new paper.Point(
      parseInt(leftnipplehorizontalposition),
      parseInt(leftnippleverticalposition),
    ),
    leftnipplesize / 2,
  )

  var Nipple2 = new paper.Path.Circle(
    new paper.Point(
      parseInt(rightnipplehorizontalposition),
      parseInt(rightnippleverticalposition),
    ),
    rightnipplesize / 2,
  )

  Areola1.fillColor = aerolaColor
  Areola2.fillColor = aerolaColor
  Nipple1.fillColor = aerolaColor
  Nipple1.strokeColor = outlineColor
  Nipple2.fillColor = aerolaColor
  Nipple2.strokeColor = outlineColor
  outline1.strokeColor = outlineColor
  outline2.strokeColor = outlineColor
}

function makeleftsticker() {
  // let leftnipplehorizontalposition = document.getElementById(
  //   'leftnipplehorizontalposition',
  // ).value
  // let leftnippleverticalposition = document.getElementById(
  //   'leftnippleverticalposition',
  // ).value
  // let leftnipplesize = document.getElementById('leftnipplesize').value
  // var Boob1 = new paper.Path.Circle(new paper.Point(0, 0), 1*INCH);
  // Boob1.fillColor = color;
  // Boob1.addChild(Areola1);
  // Boob1.addChild(Nipple1);
  // Boob1.addChild(outline1);
}

function makerightsticker() {
  // var Boob1 = new paper.Path.Circle(new paper.Point(0, 0), 1*INCH);
  // Boob1.fillColor = color;
  // let logo2 = document.getElementById('outline2')
  // let outline2 = paper.project.importSVG(logo2)
  // outline2.visible = true
  // outline2.bounds = new paper.Rectangle(
  //   0,
  //   0,
  //   widthrightslider,
  //   heightrightslider,
  // )
  // outline2.rotate(rotationrightslider)
  // outline2.position = new paper.Point(168, 10)
  // outline2.strokeColor = '#655240'
  // var Areola2 = new paper.Path.Circle(
  //   new paper.Point(
  //     parseInt(rightnipplehorizontalposition),
  //     parseInt(rightnippleverticalposition),
  //   ),
  //   rightnipplesize,
  // )
  // Areola2.fillColor = '#81644d'
  // var Nipple2 = new paper.Path.Circle(
  //   new paper.Point(
  //     parseInt(rightnipplehorizontalposition),
  //     parseInt(rightnippleverticalposition),
  //   ),
  //   rightnipplesize / 2,
  // )
  // Nipple2.fillColor = '#81644d'
  // Nipple2.strokeColor = '#655240'
  // Boob1.addChild(Areola1);
  // Boob1.addChild(Nipple1);
  // Boob1.addChild(outline1);
}

function randomizeboobs() {
  paper.project.activeLayer.removeChildren()

  let boobColors = [
    '#f6d0b2',
    '#faddab',
    '#f7d2b4',
    '#f7d4b7',
    '#e3c092',
    '#dbb788',
    '#e3c28e',
    '#d1aa87',
    '#e2ae8b',
    '#d9ad8d',
    '#daaa7f',
    '#f7d6b7',
    '#d8ae86',
    '#dcae84',
    '#e7ba95',
    '#d4a681',
    '#d4a584',
    '#e1ae71',
    '#cba27e',
    '#d19c6a',
    '#dcac6e',
    '#cea180',
    '#bf8862',
    '#c08a61',
    '#c08a62',
    '#c19369',
    '#ca9465',
    '#c59069',
    '#cb9866',
    '#986e4f',
    '#c0905b',
    '#b07e4d',
    '#a77a4e',
    '#be8768',
    '#bd8662',
    '#ae7d46',
    '#9d6a45',
    '#9a5f32',
    '#9c623b',
    '#ac7546',
    '#825534',
    '#935a34',
    '#875c2e',
    '#805636',
    '#7b4a35',
    '#70462e',
    '#986e4f',
    '#5e3922',
    '#512d1d',
    '#3f312b',
    '#342721',
  ]

  let randomBoobColor =
    boobColors[Math.floor(Math.random() * boobColors.length)]

  let Boob1 = new paper.Path.Circle(new paper.Point(0, 0), 1 * INCH)
  Boob1.fillColor = randomBoobColor
  let Boob2 = new paper.Path.Circle(new paper.Point(170, 0), 1 * INCH)
  Boob2.fillColor = randomBoobColor

  let randomBoobWidth = Math.random() * (50 - 88 + 1) + 88
  let randomBoobHeight = Math.random() * (50 - 88 + 1) + 88
  let randomBoobRotation = Math.random() * (-30 - 50 + 1) + 50

  let randomNippleHorizontal = Math.random() * (-10 - 10 + 1) + 10
  let randomNippleVertical = Math.random() * (-9 - 9 + 1) + 9
  let randomNippleSize = Math.random() * (5 - 15 + 1) + 15

  let logo1 = document.getElementById('outline1')
  let outline1 = paper.project.importSVG(logo1)
  outline1.visible = true
  outline1.bounds = new paper.Rectangle(
    -randomBoobWidth / 2,
    -randomBoobHeight / 2.5,
    randomBoobWidth,
    randomBoobHeight,
  )
  outline1.rotate(randomBoobRotation)
  outline1.strokeColor = '#655240'

  let Areola1 = new paper.Path.Circle(
    new paper.Point(
      parseInt(randomNippleHorizontal),
      parseInt(randomNippleVertical),
    ),
    randomNippleSize,
  )
  Areola1.fillColor = '#81644d'

  let Nipple1 = new paper.Path.Circle(
    new paper.Point(
      parseInt(randomNippleHorizontal),
      parseInt(randomNippleVertical),
    ),
    randomNippleSize / 2,
  )
  Nipple1.fillColor = '#81644d'
  Nipple1.strokeColor = '#655240'

  let logo2 = document.getElementById('outline2')
  let outline2 = paper.project.importSVG(logo2)
  outline2.visible = true
  outline2.bounds = new paper.Rectangle(0, 0, randomBoobWidth, randomBoobHeight)
  outline2.rotate(-randomBoobRotation)
  outline2.position = new paper.Point(168, 10)
  outline2.strokeColor = '#655240'

  let Areola2 = new paper.Path.Circle(
    new paper.Point(
      parseInt(randomNippleHorizontal + 168),
      parseInt(randomNippleVertical),
    ),
    randomNippleSize,
  )
  Areola2.fillColor = '#81644d'

  let Nipple2 = new paper.Path.Circle(
    new paper.Point(
      parseInt(randomNippleHorizontal + 168),
      parseInt(randomNippleVertical),
    ),
    randomNippleSize / 2,
  )
  Nipple2.fillColor = '#81644d'
  Nipple2.strokeColor = '#655240'
  //1
  if (randomBoobColor == '#f6d0b2') {
    Nipple1.fillColor = '#f9b8ad'
    Nipple1.strokeColor = '#d59187'
    Areola1.fillColor = '#f9b8ad'
    outline1.strokeColor = '#d59187'
    Nipple2.fillColor = '#f9b8ad'
    Nipple2.strokeColor = '#d59187'
    Areola2.fillColor = '#f9b8ad'
    outline2.strokeColor = '#d59187'
  }
  //2
  if (randomBoobColor == '#faddab') {
    Nipple1.fillColor = '#e1ae71'
    Nipple1.strokeColor = '#d59187'
    Areola1.fillColor = '#e1ae71'
    outline1.strokeColor = '#d59187'
    Nipple2.fillColor = '#e1ae71'
    Nipple2.strokeColor = '#d59187'
    Areola2.fillColor = '#e1ae71'
    outline2.strokeColor = '#d59187'
  }
  //3
  if (randomBoobColor == '#f7d2b4') {
    Nipple1.fillColor = '#f9b8ad'
    Nipple1.strokeColor = '#d59187'
    Areola1.fillColor = '#f9b8ad'
    outline1.strokeColor = '#d59187'
    Nipple2.fillColor = '#f9b8ad'
    Nipple2.strokeColor = '#d59187'
    Areola2.fillColor = '#f9b8ad'
    outline2.strokeColor = '#d59187'
  }
  //4
  if (randomBoobColor == '#f7d4b7') {
    Nipple1.fillColor = '#fbc1af'
    Nipple1.strokeColor = '#d59187'
    Areola1.fillColor = '#fbc1af'
    outline1.strokeColor = '#d59187'
    Nipple2.fillColor = '#fbc1af'
    Nipple2.strokeColor = '#d59187'
    Areola2.fillColor = '#fbc1af'
    outline2.strokeColor = '#d59187'
  }
  //5
  if (randomBoobColor == '#e3c092') {
    Nipple1.fillColor = '#d19c6a'
    Nipple1.strokeColor = '#986342'
    Areola1.fillColor = '#d19c6a'
    outline1.strokeColor = '#986342'
    Nipple2.fillColor = '#d19c6a'
    Nipple2.strokeColor = '#986342'
    Areola2.fillColor = '#d19c6a'
    outline2.strokeColor = '#986342'
  }
  //6
  if (randomBoobColor == '#dbb788') {
    Nipple1.fillColor = '#d59187'
    Nipple1.strokeColor = '#ac6f69'
    Areola1.fillColor = '#d59187'
    outline1.strokeColor = '#ac6f69'
    Nipple2.fillColor = '#d59187'
    Nipple2.strokeColor = '#ac6f69'
    Areola2.fillColor = '#d59187'
    outline2.strokeColor = '#ac6f69'
  }
  //7
  if (randomBoobColor == '#e3c28e') {
    Nipple1.fillColor = '#d59187'
    Nipple1.strokeColor = '#ac6358'
    Areola1.fillColor = '#d59187'
    outline1.strokeColor = '#ac6358'
    Nipple2.fillColor = '#d59187'
    Nipple2.strokeColor = '#ac6358'
    Areola2.fillColor = '#d59187'
    outline2.strokeColor = '#ac6358'
  }
  //8
  if (randomBoobColor == '#d1aa87') {
    Nipple1.fillColor = '#d59187'
    Nipple1.strokeColor = '#ac6358'
    Areola1.fillColor = '#d59187'
    outline1.strokeColor = '#ac6358'
    Nipple2.fillColor = '#d59187'
    Nipple2.strokeColor = '#ac6358'
    Areola2.fillColor = '#d59187'
    outline2.strokeColor = '#ac6358'
  }
  //9
  if (randomBoobColor == '#e2ae8b') {
    Nipple1.fillColor = '#d5858a'
    Nipple1.strokeColor = '#ac6358'
    Areola1.fillColor = '#d5858a'
    outline1.strokeColor = '#ac6358'
    Nipple2.fillColor = '#d5858a'
    Nipple2.strokeColor = '#ac6358'
    Areola2.fillColor = '#d5858a'
    outline2.strokeColor = '#ac6358'
  }
  //10
  if (randomBoobColor == '#d9ad8d') {
    Nipple1.fillColor = '#d59187'
    Nipple1.strokeColor = '#ac6358'
    Areola1.fillColor = '#d59187'
    outline1.strokeColor = '#ac6358'
    Nipple2.fillColor = '#d59187'
    Nipple2.strokeColor = '#ac6358'
    Areola2.fillColor = '#d59187'
    outline2.strokeColor = '#ac6358'
  }
  //11
  if (randomBoobColor == '#daaa7f') {
    Nipple1.fillColor = '#d5858a'
    Nipple1.strokeColor = '#ac6358'
    Areola1.fillColor = '#d5858a'
    outline1.strokeColor = '#ac6358'
    Nipple2.fillColor = '#d5858a'
    Nipple2.strokeColor = '#ac6358'
    Areola2.fillColor = '#d5858a'
    outline2.strokeColor = '#ac6358'
  }
  //12
  if (randomBoobColor == '#f7d6b7') {
    Nipple1.fillColor = '#f9b8ad'
    Nipple1.strokeColor = '#d59187'
    Areola1.fillColor = '#f9b8ad'
    outline1.strokeColor = '#d59187'
    Nipple2.fillColor = '#f9b8ad'
    Nipple2.strokeColor = '#d59187'
    Areola2.fillColor = '#f9b8ad'
    outline2.strokeColor = '#d59187'
  }
  //13
  if (randomBoobColor == '#d8ae86') {
    Nipple1.fillColor = '#d59187'
    Nipple1.strokeColor = '#ac6358'
    Areola1.fillColor = '#d59187'
    outline1.strokeColor = '#ac6358'
    Nipple2.fillColor = '#d59187'
    Nipple2.strokeColor = '#ac6358'
    Areola2.fillColor = '#d59187'
    outline2.strokeColor = '#ac6358'
  }
  //14
  if (randomBoobColor == '#dcae84') {
    Nipple1.fillColor = '#be805f'
    Nipple1.strokeColor = '#986342'
    Areola1.fillColor = '#be805f'
    outline1.strokeColor = '#986342'
    Nipple2.fillColor = '#be805f'
    Nipple2.strokeColor = '#986342'
    Areola2.fillColor = '#be805f'
    outline2.strokeColor = '#986342'
  }
  //15
  if (randomBoobColor == '#e7ba95') {
    Nipple1.fillColor = '#d59187'
    Nipple1.strokeColor = '#b46d67'
    Areola1.fillColor = '#d59187'
    outline1.strokeColor = '#b46d67'
    Nipple2.fillColor = '#d59187'
    Nipple2.strokeColor = '#b46d67'
    Areola2.fillColor = '#d59187'
    outline2.strokeColor = '#b46d67'
  } //16
  if (randomBoobColor == '#d4a681') {
    Nipple1.fillColor = '#c97d75'
    Nipple1.strokeColor = '#b46d67'
    Areola1.fillColor = '#c97d75'
    outline1.strokeColor = '#b46d67'
    Nipple2.fillColor = '#c97d75'
    Nipple2.strokeColor = '#b46d67'
    Areola2.fillColor = '#c97d75'
    outline2.strokeColor = '#b46d67'
  }
  //17
  if (randomBoobColor == '#d4a584') {
    Nipple1.fillColor = '#be805f'
    Nipple1.strokeColor = '#986342'
    Areola1.fillColor = '#be805f'
    outline1.strokeColor = '#986342'
    Nipple2.fillColor = '#be805f'
    Nipple2.strokeColor = '#986342'
    Areola2.fillColor = '#be805f'
    outline2.strokeColor = '#986342'
  }
  //18
  if (randomBoobColor == '#e1ae71') {
    Nipple1.fillColor = '#be805f'
    Nipple1.strokeColor = '#986342'
    Areola1.fillColor = '#be805f'
    outline1.strokeColor = '#986342'
    Nipple2.fillColor = '#be805f'
    Nipple2.strokeColor = '#986342'
    Areola2.fillColor = '#be805f'
    outline2.strokeColor = '#986342'
  }
  //19
  if (randomBoobColor == '#cba27e') {
    Nipple1.fillColor = '#a96c5e'
    Nipple1.strokeColor = '#8b5855'
    Areola1.fillColor = '#a96c5e'
    outline1.strokeColor = '#8b5855'
    Nipple2.fillColor = '#a96c5e'
    Nipple2.strokeColor = '#8b5855'
    Areola2.fillColor = '#a96c5e'
    outline2.strokeColor = '#8b5855'
  }
  //20
  if (randomBoobColor == '#d19c6a') {
    Nipple1.fillColor = '#a96c5e'
    Nipple1.strokeColor = '#8b5855'
    Areola1.fillColor = '#a96c5e'
    outline1.strokeColor = '#8b5855'
    Nipple2.fillColor = '#a96c5e'
    Nipple2.strokeColor = '#8b5855'
    Areola2.fillColor = '#a96c5e'
    outline2.strokeColor = '#8b5855'
  }
  //21
  if (randomBoobColor == '#dcac6e') {
    Nipple1.fillColor = '#a96c5e'
    Nipple1.strokeColor = '#8b5855'
    Areola1.fillColor = '#a96c5e'
    outline1.strokeColor = '#8b5855'
    Nipple2.fillColor = '#a96c5e'
    Nipple2.strokeColor = '#8b5855'
    Areola2.fillColor = '#a96c5e'
    outline2.strokeColor = '#8b5855'
  }
  //22
  if (randomBoobColor == '#cea180') {
    Nipple1.fillColor = '#a96c5e'
    Nipple1.strokeColor = '#8b5855'
    Areola1.fillColor = '#a96c5e'
    outline1.strokeColor = '#8b5855'
    Nipple2.fillColor = '#a96c5e'
    Nipple2.strokeColor = '#8b5855'
    Areola2.fillColor = '#a96c5e'
    outline2.strokeColor = '#8b5855'
  }
  //23
  if (randomBoobColor == '#bf8862') {
    Nipple1.fillColor = '#a96c5e'
    Nipple1.strokeColor = '#8b5855'
    Areola1.fillColor = '#a96c5e'
    outline1.strokeColor = '#8b5855'
    Nipple2.fillColor = '#a96c5e'
    Nipple2.strokeColor = '#8b5855'
    Areola2.fillColor = '#a96c5e'
    outline2.strokeColor = '#8b5855'
  }
  //24
  if (randomBoobColor == '#c08a61') {
    Nipple1.fillColor = '#a96668'
    Nipple1.strokeColor = '#8b5855'
    Areola1.fillColor = '#a96668'
    outline1.strokeColor = '#8b5855'
    Nipple2.fillColor = '#a96668'
    Nipple2.strokeColor = '#8b5855'
    Areola2.fillColor = '#a96668'
    outline2.strokeColor = '#8b5855'
  }
  //25
  if (randomBoobColor == '#c08a62') {
    Nipple1.fillColor = '#a96c5e'
    Nipple1.strokeColor = '#8b5855'
    Areola1.fillColor = '#a96c5e'
    outline1.strokeColor = '#8b5855'
    Nipple2.fillColor = '#a96c5e'
    Nipple2.strokeColor = '#8b5855'
    Areola2.fillColor = '#a96c5e'
    outline2.strokeColor = '#8b5855'
  }
  //26
  if (randomBoobColor == '#c19369') {
    Nipple1.fillColor = '#a96c5e'
    Nipple1.strokeColor = '#8b5855'
    Areola1.fillColor = '#a96c5e'
    outline1.strokeColor = '#8b5855'
    Nipple2.fillColor = '#a96c5e'
    Nipple2.strokeColor = '#8b5855'
    Areola2.fillColor = '#a96c5e'
    outline2.strokeColor = '#8b5855'
  }
  //27
  if (randomBoobColor == '#ca9465') {
    Nipple1.fillColor = '#a96c5e'
    Nipple1.strokeColor = '#8b5855'
    Areola1.fillColor = '#a96c5e'
    outline1.strokeColor = '#8b5855'
    Nipple2.fillColor = '#a96c5e'
    Nipple2.strokeColor = '#8b5855'
    Areola2.fillColor = '#a96c5e'
    outline2.strokeColor = '#8b5855'
  }
  //28
  if (randomBoobColor == '#c59069') {
    Nipple1.fillColor = '#a96c5e'
    Nipple1.strokeColor = '#8b5855'
    Areola1.fillColor = '#a96c5e'
    outline1.strokeColor = '#8b5855'
    Nipple2.fillColor = '#a96c5e'
    Nipple2.strokeColor = '#8b5855'
    Areola2.fillColor = '#a96c5e'
    outline2.strokeColor = '#8b5855'
  }
  //29
  if (randomBoobColor == '#cb9866') {
    Nipple1.fillColor = '#a96c5e'
    Nipple1.strokeColor = '#8b5855'
    Areola1.fillColor = '#a96c5e'
    outline1.strokeColor = '#8b5855'
    Nipple2.fillColor = '#a96c5e'
    Nipple2.strokeColor = '#8b5855'
    Areola2.fillColor = '#a96c5e'
    outline2.strokeColor = '#8b5855'
  }
  //30
  if (randomBoobColor == '#986e4f') {
    Nipple1.fillColor = '#814943'
    Nipple1.strokeColor = '#5e2d24'
    Areola1.fillColor = '#814943'
    outline1.strokeColor = '#5e2d24'
    Nipple2.fillColor = '#814943'
    Nipple2.strokeColor = '#5e2d24'
    Areola2.fillColor = '#814943'
    outline2.strokeColor = '#5e2d24'
  }
  //31
  if (randomBoobColor == '#c0905b') {
    Nipple1.fillColor = '#a96c5e'
    Nipple1.strokeColor = '#8b5855'
    Areola1.fillColor = '#a96c5e'
    outline1.strokeColor = '#8b5855'
    Nipple2.fillColor = '#a96c5e'
    Nipple2.strokeColor = '#8b5855'
    Areola2.fillColor = '#a96c5e'
    outline2.strokeColor = '#8b5855'
  }
  //32
  if (randomBoobColor == '#b07e4d') {
    Nipple1.fillColor = '#825534'
    Nipple1.strokeColor = '#553d35'
    Areola1.fillColor = '#825534'
    outline1.strokeColor = '#553d35'
    Nipple2.fillColor = '#825534'
    Nipple2.strokeColor = '#553d35'
    Areola2.fillColor = '#825534'
    outline2.strokeColor = '#553d35'
  }
  //33
  if (randomBoobColor == '#a77a4e') {
    Nipple1.fillColor = '#825534'
    Nipple1.strokeColor = '#553d35'
    Areola1.fillColor = '#825534'
    outline1.strokeColor = '#553d35'
    Nipple2.fillColor = '#825534'
    Nipple2.strokeColor = '#553d35'
    Areola2.fillColor = '#825534'
    outline2.strokeColor = '#553d35'
  }
  //34
  if (randomBoobColor == '#be8768') {
    Nipple1.fillColor = '#a96357'
    Nipple1.strokeColor = '#8b5855'
    Areola1.fillColor = '#a96357'
    outline1.strokeColor = '#8b5855'
    Nipple2.fillColor = '#a96357'
    Nipple2.strokeColor = '#8b5855'
    Areola2.fillColor = '#a96357'
    outline2.strokeColor = '#8b5855'
  }
  //35
  if (randomBoobColor == '#bd8662') {
    Nipple1.fillColor = '#a96357'
    Nipple1.strokeColor = '#8b5855'
    Areola1.fillColor = '#a96357'
    outline1.strokeColor = '#8b5855'
    Nipple2.fillColor = '#a96357'
    Nipple2.strokeColor = '#8b5855'
    Areola2.fillColor = '#a96357'
    outline2.strokeColor = '#8b5855'
  }
  //36
  if (randomBoobColor == '#ae7d46') {
    Nipple1.fillColor = '#825534'
    Nipple1.strokeColor = '#553d35'
    Areola1.fillColor = '#825534'
    outline1.strokeColor = '#553d35'
    Nipple2.fillColor = '#825534'
    Nipple2.strokeColor = '#553d35'
    Areola2.fillColor = '#825534'
    outline2.strokeColor = '#553d35'
  }
  //37
  if (randomBoobColor == '#9d6a45') {
    Nipple1.fillColor = '#825534'
    Nipple1.strokeColor = '#553d35'
    Areola1.fillColor = '#825534'
    outline1.strokeColor = '#553d35'
    Nipple2.fillColor = '#825534'
    Nipple2.strokeColor = '#553d35'
    Areola2.fillColor = '#825534'
    outline2.strokeColor = '#553d35'
  }
  //38
  if (randomBoobColor == '#9a5f32') {
    Nipple1.fillColor = '#603913'
    Nipple1.strokeColor = '#36201f'
    Areola1.fillColor = '#603913'
    outline1.strokeColor = '#36201f'
    Nipple2.fillColor = '#603913'
    Nipple2.strokeColor = '#36201f'
    Areola2.fillColor = '#603913'
    outline2.strokeColor = '#36201f'
  }
  //39
  if (randomBoobColor == '#9c623b') {
    Nipple1.fillColor = '#825534'
    Nipple1.strokeColor = '#553d35'
    Areola1.fillColor = '#825534'
    outline1.strokeColor = '#553d35'
    Nipple2.fillColor = '#825534'
    Nipple2.strokeColor = '#553d35'
    Areola2.fillColor = '#825534'
    outline2.strokeColor = '#553d35'
  }
  //40
  if (randomBoobColor == '#ac7546') {
    Nipple1.fillColor = '#825534'
    Nipple1.strokeColor = '#55281d'
    Areola1.fillColor = '#825534'
    outline1.strokeColor = '#55281d'
    Nipple2.fillColor = '#825534'
    Nipple2.strokeColor = '#55281d'
    Areola2.fillColor = '#825534'
    outline2.strokeColor = '#55281d'
  }
  //41
  if (randomBoobColor == '#825534') {
    Nipple1.fillColor = '#5e3922'
    Nipple1.strokeColor = '#331412'
    Areola1.fillColor = '#5e3922'
    outline1.strokeColor = '#331412'
    Nipple2.fillColor = '#5e3922'
    Nipple2.strokeColor = '#331412'
    Areola2.fillColor = '#5e3922'
    outline2.strokeColor = '#331412'
  }
  //42
  if (randomBoobColor == '#935a34') {
    Nipple1.fillColor = '#5e3922'
    Nipple1.strokeColor = '#331412'
    Areola1.fillColor = '#5e3922'
    outline1.strokeColor = '#331412'
    Nipple2.fillColor = '#5e3922'
    Nipple2.strokeColor = '#331412'
    Areola2.fillColor = '#5e3922'
    outline2.strokeColor = '#331412'
  }
  //43
  if (randomBoobColor == '#875c2e') {
    Nipple1.fillColor = '#5e3922'
    Nipple1.strokeColor = '#331412'
    Areola1.fillColor = '#5e3922'
    outline1.strokeColor = '#331412'
    Nipple2.fillColor = '#5e3922'
    Nipple2.strokeColor = '#331412'
    Areola2.fillColor = '#5e3922'
    outline2.strokeColor = '#331412'
  }
  //44
  if (randomBoobColor == '#805636') {
    Nipple1.fillColor = '#5e3922'
    Nipple1.strokeColor = '#331412'
    Areola1.fillColor = '#5e3922'
    outline1.strokeColor = '#331412'
    Nipple2.fillColor = '#5e3922'
    Nipple2.strokeColor = '#331412'
    Areola2.fillColor = '#5e3922'
    outline2.strokeColor = '#331412'
  }
  //45
  if (randomBoobColor == '#7b4a35') {
    Nipple1.fillColor = '#461a13'
    Nipple1.strokeColor = '#1f100d'
    Areola1.fillColor = '#461a13'
    outline1.strokeColor = '#1f100d'
    Nipple2.fillColor = '#461a13'
    Nipple2.strokeColor = '#1f100d'
    Areola2.fillColor = '#461a13'
    outline2.strokeColor = '#1f100d'
  }
  //46
  if (randomBoobColor == '#70462e') {
    Nipple1.fillColor = '#461a13'
    Nipple1.strokeColor = '#1f100d'
    Areola1.fillColor = '#461a13'
    outline1.strokeColor = '#1f100d'
    Nipple2.fillColor = '#461a13'
    Nipple2.strokeColor = '#1f100d'
    Areola2.fillColor = '#461a13'
    outline2.strokeColor = '#1f100d'
  }
  //47
  if (randomBoobColor == '#986e4f') {
    Nipple1.fillColor = '#82522d'
    Nipple1.strokeColor = '#55281d'
    Areola1.fillColor = '#82522d'
    outline1.strokeColor = '#55281d'
    Nipple2.fillColor = '#82522d'
    Nipple2.strokeColor = '#55281d'
    Areola2.fillColor = '#82522d'
    outline2.strokeColor = '#55281d'
  }
  //48
  if (randomBoobColor == '#5e3922') {
    Nipple1.fillColor = '#331811'
    Nipple1.strokeColor = '#1f100d'
    Areola1.fillColor = '#331811'
    outline1.strokeColor = '#1f100d'
    Nipple2.fillColor = '#331811'
    Nipple2.strokeColor = '#1f100d'
    Areola2.fillColor = '#331811'
    outline2.strokeColor = '#1f100d'
  }
  //49
  if (randomBoobColor == '#512d1d') {
    Nipple1.fillColor = '#1f170f'
    Nipple1.strokeColor = '#231f20'
    Areola1.fillColor = '#1f170f'
    outline1.strokeColor = '#231f20'
    Nipple2.fillColor = '#1f170f'
    Nipple2.strokeColor = '#231f20'
    Areola2.fillColor = '#1f170f'
    outline2.strokeColor = '#231f20'
  }
  //50
  if (randomBoobColor == '#3f312b') {
    Nipple1.fillColor = '#1f170f'
    Nipple1.strokeColor = '#231f20'
    Areola1.fillColor = '#1f170f'
    outline1.strokeColor = '#231f20'
    Nipple2.fillColor = '#1f170f'
    Nipple2.strokeColor = '#231f20'
    Areola2.fillColor = '#1f170f'
    outline2.strokeColor = '#231f20'
  }
  //51
  if (randomBoobColor == '#342721') {
    Nipple1.fillColor = '#1f170f'
    Nipple1.strokeColor = 'black'
    Areola1.fillColor = '#1f170f'
    outline1.strokeColor = '#black'
    Nipple2.fillColor = '#1f170f'
    Nipple2.strokeColor = '#black'
    Areola2.fillColor = '#1f170f'
    outline2.strokeColor = '#black'
  }
}

function onInput() {
  skincolorslider.addEventListener('change', regenerate)
}

function centerBoob() {
  showItem(paper.project.activeLayer)
}

//make sure the variables inside regenerate function are the ones that im also using in make sticker
function regenerate() {
  paper.project.activeLayer.removeChildren()
  setColor()
  centerBoob()
  makeleftsticker()
  makerightsticker()
  // randomizeboobs();
}

function onChangeLeftBoobWidth() {
  document.getElementById('leftwidth').addEventListener('input', regenerate)
}

function onChangeLeftBoobHeight() {
  document.getElementById('leftheight').addEventListener('input', regenerate)
}

function onChangeBoobRotation() {
  document.getElementById('leftrotation').addEventListener('input', regenerate)
}

function onChangeLeftNippleHorizontalLocation() {
  document
    .getElementById('leftnipplehorizontalposition')
    .addEventListener('input', regenerate)
}

function onChangeLeftNippleVerticalLocation() {
  document
    .getElementById('leftnippleverticalposition')
    .addEventListener('input', regenerate)
}

function onChangeLeftNippleSize() {
  document
    .getElementById('leftnipplesize')
    .addEventListener('input', regenerate)
}

function onChangeRightBoobWidth() {
  document.getElementById('rightwidth').addEventListener('input', regenerate)
}

function onChangeRightBoobHeight() {
  document.getElementById('rightheight').addEventListener('input', regenerate)
}

function onChangeRightBoobRotation() {
  document.getElementById('rightrotation').addEventListener('input', regenerate)
}

function onChangeRightNippleHorizontalLocation() {
  document
    .getElementById('rightnipplehorizontalposition')
    .addEventListener('input', regenerate)
}

function onChangeRightNippleVerticalLocation() {
  document
    .getElementById('rightnippleverticalposition')
    .addEventListener('input', regenerate)
}

function onChangeRightNippleSize() {
  document
    .getElementById('rightnipplesize')
    .addEventListener('input', regenerate)
}

function main() {
  console.log('main')
  setup()
  regenerate()
  onInput()
  onChangeLeftBoobWidth()
  onChangeLeftBoobHeight()
  onChangeBoobRotation()
  onChangeLeftNippleHorizontalLocation()
  onChangeLeftNippleVerticalLocation()
  onChangeLeftNippleSize()

  onChangeRightBoobWidth()
  onChangeRightBoobHeight()
  onChangeRightBoobRotation()
  onChangeRightNippleHorizontalLocation()
  onChangeRightNippleVerticalLocation()
  onChangeRightNippleSize()

  document.getElementById('download').addEventListener('click', () => {
    downloadSVG('boobs.svg')

    document
      .getElementById('randomizeboobs')
      .addEventListener('click', randomizeboobs)
  })
}

window.addEventListener('load', main)
