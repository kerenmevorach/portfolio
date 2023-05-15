const body = document.querySelector('body');

const circleAnimation = document.querySelector('.circle-animation');
const section = document.querySelector('section');

const eggsploration = document.querySelector('.eggsploration');
const eggsplorationInfo = document.querySelector('.eggsploration-info');
const eggClose = document.querySelector('#egg-close');

const boobStickers = document.querySelector('.boob-stickers');
const boobStickersInfo = document.querySelector('.boob-stickers-info');
const boobClose = document.querySelector('#boob-close');

const bright = document.querySelector('.bright');
const brightInfo = document.querySelector('.bright-info');
const brightClose = document.querySelector('#bright-close');

const bata = document.querySelector('.bata');
const bataInfo = document.querySelector('.bata-info');
const bataClose = document.querySelector('#bata-close');

const crackers = document.querySelector('.crackers');
const crackersInfo = document.querySelector('.crackers-info');
const crackersClose = document.querySelector('#crackers-close');

const theex = document.querySelector('.theex');
const theexInfo = document.querySelector('.theex-info');
const theexClose = document.querySelector('#theex-close');

const growinggreens = document.querySelector('.growinggreens');
const growinggreensInfo = document.querySelector('.growinggreens-info');
const growinggreensClose = document.querySelector('#growinggreens-close');

const typedesign = document.querySelector('.typedesign');
const typedesignInfo = document.querySelector('.typedesign-info');
const typedesignClose = document.querySelector('#typedesign-close');


function scrollToTop(){
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

eggsploration.onclick = () =>{
    console.log('eggs')
    eggsplorationInfo.classList.toggle('active')
    body.classList.toggle('orange-cursor')
    boobStickersInfo.classList.remove('active')
    body.classList.remove('light-pink-cursor')
    brightInfo.classList.remove('active')
    body.classList.remove('bright-green-cursor')
    bataInfo.classList.remove('active')
    body.classList.remove('red-cursor')
    crackersInfo.classList.remove('active')
    body.classList.remove('purple-cursor')
    theexInfo.classList.remove('active')
    body.classList.remove('light-blue-cursor')
    growinggreensInfo.classList.remove('active')
    body.classList.remove('green-cursor')
    typedesignInfo.classList.remove('active')
    body.classList.remove('bright-pink-cursor')
    // document.querySelector("link[rel*='icon']").href = "assets/cursors/orange-cursor.png";

    // if (x.matches) { 
        //       console.log('add')
        //       window.addEventListener("scroll", scrollToTop);
        //     } else {
        //       console.log('remove')
        //       window.removeEventListener("scroll",scrollToTop);
        //     }
}

eggClose.onclick = () =>{
    eggsplorationInfo.classList.remove('active')
    body.classList.remove('orange-cursor')
}


boobStickers.onclick = () =>{
    console.log('boobs')
    eggsplorationInfo.classList.remove('active')
    body.classList.remove('orange-cursor')
    boobStickersInfo.classList.toggle('active')
    body.classList.toggle('light-pink-cursor')
    brightInfo.classList.remove('active')
    body.classList.remove('bright-green-cursor')
    bataInfo.classList.remove('active')
    body.classList.remove('red-cursor')
    crackersInfo.classList.remove('active')
    body.classList.remove('purple-cursor')
    theexInfo.classList.remove('active')
    body.classList.remove('light-blue-cursor')
    growinggreensInfo.classList.remove('active')
    body.classList.remove('green-cursor')
    typedesignInfo.classList.remove('active')
    body.classList.remove('bright-pink-cursor')
}

boobClose.onclick = () =>{
    boobStickersInfo.classList.remove('active')
    body.classList.remove('pink-cursor')
}

bright.onclick = () =>{
    console.log('bright')
    eggsplorationInfo.classList.remove('active')
    body.classList.remove('orange-cursor')
    boobStickersInfo.classList.remove('active')
    body.classList.remove('light-pink-cursor')
    brightInfo.classList.toggle('active')
    body.classList.toggle('bright-green-cursor')
    bataInfo.classList.remove('active')
    body.classList.remove('red-cursor')
    crackersInfo.classList.remove('active')
    body.classList.remove('purple-cursor')
    theexInfo.classList.remove('active')
    body.classList.remove('light-blue-cursor')
    growinggreensInfo.classList.remove('active')
    body.classList.remove('green-cursor')
    typedesignInfo.classList.remove('active')
    body.classList.remove('bright-pink-cursor')
}

brightClose.onclick = () =>{
    brightInfo.classList.remove('active')
    body.classList.remove('bright-green-cursor')
}

bata.onclick = () =>{
    console.log('bata')
    eggsplorationInfo.classList.remove('active')
    body.classList.remove('orange-cursor')
    boobStickersInfo.classList.remove('active')
    body.classList.remove('light-pink-cursor')
    brightInfo.classList.remove('active')
    body.classList.remove('bright-green-cursor')
    bataInfo.classList.toggle('active')
    body.classList.toggle('red-cursor')
    crackersInfo.classList.remove('active')
    body.classList.remove('purple-cursor')
    theexInfo.classList.remove('active')
    body.classList.remove('light-blue-cursor')
    growinggreensInfo.classList.remove('active')
    body.classList.remove('green-cursor')
    typedesignInfo.classList.remove('active')
    body.classList.remove('bright-pink-cursor')
}

bataClose.onclick = () =>{
    bataInfo.classList.remove('active')
    body.classList.remove('red-cursor')
}

crackers.onclick = () =>{
    console.log('bata')
    eggsplorationInfo.classList.remove('active')
    body.classList.remove('orange-cursor')
    boobStickersInfo.classList.remove('active')
    body.classList.remove('light-pink-cursor')
    brightInfo.classList.remove('active')
    body.classList.remove('bright-green-cursor')
    bataInfo.classList.remove('active')
    body.classList.remove('red-cursor')
    crackersInfo.classList.toggle('active')
    body.classList.toggle('purple-cursor')
    theexInfo.classList.remove('active')
    body.classList.remove('light-blue-cursor')
    growinggreensInfo.classList.remove('active')
    body.classList.remove('green-cursor')
    typedesignInfo.classList.remove('active')
    body.classList.remove('bright-pink-cursor')
}

crackersClose.onclick = () =>{
    crackersInfo.classList.remove('active')
    body.classList.remove('purple-cursor')
}

theex.onclick = () =>{
    console.log('bata')
    eggsplorationInfo.classList.remove('active')
    body.classList.remove('orange-cursor')
    boobStickersInfo.classList.remove('active')
    body.classList.remove('light-pink-cursor')
    brightInfo.classList.remove('active')
    body.classList.remove('bright-green-cursor')
    bataInfo.classList.remove('active')
    body.classList.remove('red-cursor')
    crackersInfo.classList.remove('active')
    body.classList.remove('purple-cursor')
    theexInfo.classList.toggle('active')
    body.classList.toggle('light-blue-cursor')
    growinggreensInfo.classList.remove('active')
    body.classList.remove('green-cursor')
    typedesignInfo.classList.remove('active')
    body.classList.remove('bright-pink-cursor')
}

theexClose.onclick = () =>{
    theexInfo.classList.remove('active')
    body.classList.remove('light-blue-cursor')
}

growinggreens.onclick = () =>{
    console.log('bata')
    eggsplorationInfo.classList.remove('active')
    body.classList.remove('orange-cursor')
    boobStickersInfo.classList.remove('active')
    body.classList.remove('light-pink-cursor')
    brightInfo.classList.remove('active')
    body.classList.remove('bright-green-cursor')
    bataInfo.classList.remove('active')
    body.classList.remove('red-cursor')
    crackersInfo.classList.remove('active')
    body.classList.remove('purple-cursor')
    theexInfo.classList.remove('active')
    body.classList.remove('light-blue-cursor')
    growinggreensInfo.classList.toggle('active')
    body.classList.toggle('green-cursor')
    typedesignInfo.classList.remove('active')
    body.classList.remove('bright-pink-cursor')
}

growinggreensClose.onclick = () =>{
    growinggreensInfo.classList.remove('active')
    body.classList.remove('green-cursor')
}

typedesign.onclick = () =>{
    console.log('bata')
    eggsplorationInfo.classList.remove('active')
    body.classList.remove('orange-cursor')
    boobStickersInfo.classList.remove('active')
    body.classList.remove('light-pink-cursor')
    brightInfo.classList.remove('active')
    body.classList.remove('bright-green-cursor')
    bataInfo.classList.remove('active')
    body.classList.remove('red-cursor')
    crackersInfo.classList.remove('active')
    body.classList.remove('purple-cursor')
    theexInfo.classList.remove('active')
    body.classList.remove('light-blue-cursor')
    growinggreensInfo.classList.remove('active')
    body.classList.remove('green-cursor')
    typedesignInfo.classList.toggle('active')
    body.classList.toggle('bright-pink-cursor')
}

typedesignClose.onclick = () =>{
    typedesignInfo.classList.remove('active')
    body.classList.remove('bright-pink-cursor')
}


// window.addEventListener("scroll", scrollToTop);

// function scrollToggle(x) {
//     if (x.matches) { 
//       console.log('add')
//       window.addEventListener("scroll", scrollToTop);
//     } else {
//       console.log('remove')
//       window.removeEventListener("scroll",scrollToTop);
//     }
//   }

  
//   let x = window.matchMedia("(min-width: 660px)")
//   scrollToggle(x) // Call listener function at run time
//   x.addListener(scrollToggle) // Attach listener function on state changes