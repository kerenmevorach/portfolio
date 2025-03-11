let firstsquare = document.getElementById("square1");
let secondsquare = document.getElementById("square2");
let thirdsquare = document.getElementById("square3");
let fourthsquare = document.getElementById("square4");

// let heightslider1 = document.getElementById("slider1");
// let heightslider2 = document.getElementById("slider2");
// let heightslider3 = document.getElementById("slider3");
// let heightslider4 = document.getElementById("slider4");

let heightleftslider = document.getElementById("leftslider");
let heightrightslider = document.getElementById("rightslider");

let bverticalleft = document.getElementById("bvertical1");
let bverticalright = document.getElementById("bvertical2");
let bhorizontaltop = document.getElementById("btophorizontal");
let bhorizontalmiddle = document.getElementById("bmiddlehorizontal");
let bhorizontalbottom = document.getElementById("bbottomhorizontal");

let a1verticalleft = document.getElementById("a1vertical1");
let a1verticalright = document.getElementById("a1vertical2");
let a1horizontaltop = document.getElementById("a1tophorizontal");
let a1horizontalmiddle = document.getElementById("a1middlehorizontal");
let a1lefthorizontal = document.getElementById("a1lefthorizontal");
let a1righthorizontal = document.getElementById("a1righthorizontal");

let ttophorizontal = document.getElementById("ttophorizontal");
let tvertical1 = document.getElementById("tvertical1");
let tvertical2 = document.getElementById("tvertical2");
let tvertical3 = document.getElementById("tvertical3");
let tbottomhorizontal = document.getElementById("tbottomhorizontal");

let a2verticalleft = document.getElementById("a2vertical1");
let a2verticalright = document.getElementById("a2vertical2");
let a2horizontaltop = document.getElementById("a2tophorizontal");
let a2horizontalmiddle = document.getElementById("a2middlehorizontal");
let a2lefthorizontal = document.getElementById("a2lefthorizontal");
let a2righthorizontal = document.getElementById("a2righthorizontal");

let shoemuseum = document.getElementById("shoe");

let shape = document.getElementById("shape");
let outline = document.getElementById("outline");
let green = document.getElementById("green");
let greenoutline = document.getElementById("greenoutline");
let pink = document.getElementById("pink");
let pinkoutline = document.getElementById("pinkoutline");
let blue = document.getElementById("blue");
let blueoutline = document.getElementById("blueoutline");
let orange = document.getElementById("orange");
let orangeoutline = document.getElementById("orangeoutline");
let black = document.getElementById("black");
let blackoutline = document.getElementById("blackoutline");

// height:

let square1height = Math.random() * (370 - 110) + 110;
let square2height = Math.random() * (370 - 110) + 110;
let square3height = 475 - square1height;
let square4height = 475 - square2height;

firstsquare.style.height = square1height + "px";
secondsquare.style.height = square2height + "px";
thirdsquare.style.height = square3height + "px";
fourthsquare.style.height = square4height + "px";

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

let greenFill = "#51ce51";
let yellowFill = "#e2a0e2";
let blueFill = "#53bff4";
let pinkFill = "#ca1566";

let colors = ["black", blueFill, greenFill, pinkFill, yellowFill];
// "rgb(239, 239, 203"]

let randomcolor1 = colors[Math.floor(Math.random() * colors.length)];
let randomcolor2 = colors[Math.floor(Math.random() * colors.length)];
let randomcolor3 = colors[Math.floor(Math.random() * colors.length)];
let randomcolor4 = colors[Math.floor(Math.random() * colors.length)];

bverticalleft.style.backgroundColor = randomcolor1;
bverticalright.style.backgroundColor = randomcolor1;
bhorizontaltop.style.backgroundColor = randomcolor1;
bhorizontalmiddle.style.backgroundColor = randomcolor1;
bhorizontalbottom.style.backgroundColor = randomcolor1;

a1verticalleft.style.backgroundColor = randomcolor1;
a1verticalright.style.backgroundColor = randomcolor1;
a1horizontaltop.style.backgroundColor = randomcolor1;
a1horizontalmiddle.style.backgroundColor = randomcolor1;
a1lefthorizontal.style.backgroundColor = randomcolor1;
a1righthorizontal.style.backgroundColor = randomcolor1;

ttophorizontal.style.backgroundColor = randomcolor1;
tvertical1.style.backgroundColor = randomcolor1;
tvertical2.style.backgroundColor = randomcolor1;
tvertical3.style.backgroundColor = randomcolor1;
tbottomhorizontal.style.backgroundColor = randomcolor1;

a2verticalleft.style.backgroundColor = randomcolor1;
a2verticalright.style.backgroundColor = randomcolor1;
a2horizontaltop.style.backgroundColor = randomcolor1;
a2horizontalmiddle.style.backgroundColor = randomcolor1;
a2lefthorizontal.style.backgroundColor = randomcolor1;
a2righthorizontal.style.backgroundColor = randomcolor1;

shoemuseum.style.color = randomcolor1;

// slider:

heightleftslider.oninput = function () {
  firstsquare.style.height = heightleftslider.value + "px";
  thirdsquare.style.height = 475 - heightleftslider.value + "px";
};

heightrightslider.oninput = function () {
  secondsquare.style.height = heightrightslider.value + "px";
  fourthsquare.style.height = 475 - heightrightslider.value + "px";
};

green.onclick = function () {
  greenoutline.style.display = "inline-block";
  pinkoutline.style.display = "none";
  blueoutline.style.display = "none";
  orangeoutline.style.display = "none";
  blackoutline.style.display = "none";

  bverticalleft.style.backgroundColor = greenFill;
  bverticalright.style.backgroundColor = greenFill;
  bhorizontaltop.style.backgroundColor = greenFill;
  bhorizontalmiddle.style.backgroundColor = greenFill;
  bhorizontalbottom.style.backgroundColor = greenFill;

  a1verticalleft.style.backgroundColor = greenFill;
  a1verticalright.style.backgroundColor = greenFill;
  a1horizontaltop.style.backgroundColor = greenFill;
  a1horizontalmiddle.style.backgroundColor = greenFill;
  a1lefthorizontal.style.backgroundColor = greenFill;
  a1righthorizontal.style.backgroundColor = greenFill;

  ttophorizontal.style.backgroundColor = greenFill;
  tvertical3.style.backgroundColor = greenFill;
  tvertical1.style.backgroundColor = greenFill;
  tvertical2.style.backgroundColor = greenFill;
  tbottomhorizontal.style.backgroundColor = greenFill;

  a2verticalleft.style.backgroundColor = greenFill;
  a2verticalright.style.backgroundColor = greenFill;
  a2horizontaltop.style.backgroundColor = greenFill;
  a2horizontalmiddle.style.backgroundColor = greenFill;
  a2lefthorizontal.style.backgroundColor = greenFill;
  a2righthorizontal.style.backgroundColor = greenFill;

  shoemuseum.style.color = greenFill;
};

pink.onclick = function () {
  greenoutline.style.display = "none";
  pinkoutline.style.display = "inline-block";
  blueoutline.style.display = "none";
  orangeoutline.style.display = "none";
  blackoutline.style.display = "none";

  bverticalleft.style.backgroundColor = pinkFill;
  bverticalright.style.backgroundColor = pinkFill;
  bhorizontaltop.style.backgroundColor = pinkFill;
  bhorizontalmiddle.style.backgroundColor = pinkFill;
  bhorizontalbottom.style.backgroundColor = pinkFill;

  a1verticalleft.style.backgroundColor = pinkFill;
  a1verticalright.style.backgroundColor = pinkFill;
  a1horizontaltop.style.backgroundColor = pinkFill;
  a1horizontalmiddle.style.backgroundColor = pinkFill;
  a1lefthorizontal.style.backgroundColor = pinkFill;
  a1righthorizontal.style.backgroundColor = pinkFill;

  ttophorizontal.style.backgroundColor = pinkFill;
  tvertical3.style.backgroundColor = pinkFill;
  tvertical1.style.backgroundColor = pinkFill;
  tvertical2.style.backgroundColor = pinkFill;
  tbottomhorizontal.style.backgroundColor = pinkFill;

  a2verticalleft.style.backgroundColor = pinkFill;
  a2verticalright.style.backgroundColor = pinkFill;
  a2horizontaltop.style.backgroundColor = pinkFill;
  a2horizontalmiddle.style.backgroundColor = pinkFill;
  a2lefthorizontal.style.backgroundColor = pinkFill;
  a2righthorizontal.style.backgroundColor = pinkFill;

  shoemuseum.style.color = pinkFill;
};

blue.onclick = function () {
  greenoutline.style.display = "none";
  pinkoutline.style.display = "none";
  blueoutline.style.display = "inline-block";
  orangeoutline.style.display = "none";
  blackoutline.style.display = "none";

  bverticalleft.style.backgroundColor = blueFill;
  bverticalright.style.backgroundColor = blueFill;
  bhorizontaltop.style.backgroundColor = blueFill;
  bhorizontalmiddle.style.backgroundColor = blueFill;
  bhorizontalbottom.style.backgroundColor = blueFill;

  a1verticalleft.style.backgroundColor = blueFill;
  a1verticalright.style.backgroundColor = blueFill;
  a1horizontaltop.style.backgroundColor = blueFill;
  a1horizontalmiddle.style.backgroundColor = blueFill;
  a1lefthorizontal.style.backgroundColor = blueFill;
  a1righthorizontal.style.backgroundColor = blueFill;

  ttophorizontal.style.backgroundColor = blueFill;
  tvertical3.style.backgroundColor = blueFill;
  tvertical1.style.backgroundColor = blueFill;
  tvertical2.style.backgroundColor = blueFill;
  tbottomhorizontal.style.backgroundColor = blueFill;

  a2verticalleft.style.backgroundColor = blueFill;
  a2verticalright.style.backgroundColor = blueFill;
  a2horizontaltop.style.backgroundColor = blueFill;
  a2horizontalmiddle.style.backgroundColor = blueFill;
  a2lefthorizontal.style.backgroundColor = blueFill;
  a2righthorizontal.style.backgroundColor = blueFill;

  shoemuseum.style.color = blueFill;
};

orange.onclick = function () {
  greenoutline.style.display = "none";
  pinkoutline.style.display = "none";
  blueoutline.style.display = "none";
  orangeoutline.style.display = "inline-block";
  blackoutline.style.display = "none";

  bverticalleft.style.backgroundColor = yellowFill;
  bverticalright.style.backgroundColor = yellowFill;
  bhorizontaltop.style.backgroundColor = yellowFill;
  bhorizontalmiddle.style.backgroundColor = yellowFill;
  bhorizontalbottom.style.backgroundColor = yellowFill;

  a1verticalleft.style.backgroundColor = yellowFill;
  a1verticalright.style.backgroundColor = yellowFill;
  a1horizontaltop.style.backgroundColor = yellowFill;
  a1horizontalmiddle.style.backgroundColor = yellowFill;
  a1lefthorizontal.style.backgroundColor = yellowFill;
  a1righthorizontal.style.backgroundColor = yellowFill;

  ttophorizontal.style.backgroundColor = yellowFill;
  tvertical3.style.backgroundColor = yellowFill;
  tvertical1.style.backgroundColor = yellowFill;
  tvertical2.style.backgroundColor = yellowFill;
  tbottomhorizontal.style.backgroundColor = yellowFill;

  a2verticalleft.style.backgroundColor = yellowFill;
  a2verticalright.style.backgroundColor = yellowFill;
  a2horizontaltop.style.backgroundColor = yellowFill;
  a2horizontalmiddle.style.backgroundColor = yellowFill;
  a2lefthorizontal.style.backgroundColor = yellowFill;
  a2righthorizontal.style.backgroundColor = yellowFill;

  shoemuseum.style.color = yellowFill;
};

black.onclick = function () {
  greenoutline.style.display = "none";
  pinkoutline.style.display = "none";
  blueoutline.style.display = "none";
  orangeoutline.style.display = "none";
  blackoutline.style.display = "inline-block";

  bverticalleft.style.backgroundColor = "black";
  bverticalright.style.backgroundColor = "black";
  bhorizontaltop.style.backgroundColor = "black";
  bhorizontalmiddle.style.backgroundColor = "black";
  bhorizontalbottom.style.backgroundColor = "black";

  a1verticalleft.style.backgroundColor = "black";
  a1verticalright.style.backgroundColor = "black";
  a1horizontaltop.style.backgroundColor = "black";
  a1horizontalmiddle.style.backgroundColor = "black";
  a1lefthorizontal.style.backgroundColor = "black";
  a1righthorizontal.style.backgroundColor = "black";

  ttophorizontal.style.backgroundColor = "black";
  tvertical3.style.backgroundColor = "black";
  tvertical1.style.backgroundColor = "black";
  tvertical2.style.backgroundColor = "black";
  tbottomhorizontal.style.backgroundColor = "black";

  a2verticalleft.style.backgroundColor = "black";
  a2verticalright.style.backgroundColor = "black";
  a2horizontaltop.style.backgroundColor = "black";
  a2horizontalmiddle.style.backgroundColor = "black";
  a2lefthorizontal.style.backgroundColor = "black";
  a2righthorizontal.style.backgroundColor = "black";

  shoemuseum.style.color = "black";
};

green.onmouseover = function () {
  green.style.opacity = "50%";
  green.style.cursor = "pointer";
};

green.onmouseleave = function () {
  green.style.opacity = "100%";
};

pink.onmouseover = function () {
  pink.style.opacity = "50%";
  pink.style.cursor = "pointer";
};

pink.onmouseleave = function () {
  pink.style.opacity = "100%";
};

blue.onmouseover = function () {
  blue.style.opacity = "50%";
  blue.style.cursor = "pointer";
};

blue.onmouseleave = function () {
  blue.style.opacity = "100%";
};

orange.onmouseover = function () {
  orange.style.opacity = "50%";
  orange.style.cursor = "pointer";
};

orange.onmouseleave = function () {
  orange.style.opacity = "100%";
};

black.onmouseover = function () {
  black.style.opacity = "50%";
  black.style.cursor = "pointer";
};

black.onmouseleave = function () {
  black.style.opacity = "100%";
};

if (randomcolor1 == greenFill) {
  greenoutline.style.display = "inline-block";
  pinkoutline.style.display = "none";
  blueoutline.style.display = "none";
  orangeoutline.style.display = "none";
  blackoutline.style.display = "none";
}

if (randomcolor1 == pinkFill) {
  greenoutline.style.display = "none";
  pinkoutline.style.display = "inline-block";
  blueoutline.style.display = "none";
  orangeoutline.style.display = "none";
  blackoutline.style.display = "none";
}

if (randomcolor1 == blueFill) {
  greenoutline.style.display = "none";
  pinkoutline.style.display = "none";
  blueoutline.style.display = "inline-block";
  orangeoutline.style.display = "none";
  blackoutline.style.display = "none";
}

if (randomcolor1 == yellowFill) {
  greenoutline.style.display = "none";
  pinkoutline.style.display = "none";
  blueoutline.style.display = "none";
  orangeoutline.style.display = "inline-block";
  blackoutline.style.display = "none";
}

if (randomcolor1 == "black") {
  greenoutline.style.display = "none";
  pinkoutline.style.display = "none";
  blueoutline.style.display = "none";
  orangeoutline.style.display = "none";
  blackoutline.style.display = "inline-block";
}
