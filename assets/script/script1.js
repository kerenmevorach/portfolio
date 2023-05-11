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


const whoIsSheInfo = document.querySelector('.whoisshe');
const whoIsShe = document.querySelector('.whoisshe-info');


function scrollToTop(){
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

eggsploration.onclick = () =>{
    console.log('eggs')
    eggsplorationInfo.classList.toggle('active')
    boobStickersInfo.classList.remove('active')
    brightInfo.classList.remove('active')
    body.classList.toggle('orange-cursor')
    body.classList.remove('pink-cursor')
    body.classList.remove('bright-green-cursor')
    // document.querySelector("link[rel*='icon']").href = "assets/cursors/orange-cursor.png";
}

eggClose.onclick = () =>{
    eggsplorationInfo.classList.remove('active')
    body.classList.remove('orange-cursor')
}


boobStickers.onclick = () =>{
    console.log('boobs')
    eggsplorationInfo.classList.remove('active')
    brightInfo.classList.remove('active')
    boobStickersInfo.classList.toggle('active')
    body.classList.toggle('pink-cursor')
    body.classList.remove('orange-cursor')
    body.classList.remove('bright-green-cursor')
    // body.style.cursor = "url('assets/cursors/pink-cursor.png'), pointer"
}

boobClose.onclick = () =>{
    boobStickersInfo.classList.remove('active')
    body.classList.remove('pink-cursor')
}

bright.onclick = () =>{
    console.log('bright')
    eggsplorationInfo.classList.remove('active')
    boobStickersInfo.classList.remove('active')
    brightInfo.classList.toggle('active')
    body.classList.toggle('bright-green-cursor')
    body.classList.remove('orange-cursor')
    body.classList.remove('pink-cursor')
    // body.style.cursor = "url('assets/cursors/pink-cursor.png'), pointer"
}

brightClose.onclick = () =>{
    brightInfo.classList.remove('active')
    body.classList.remove('bright-green-cursor')
}

bata.onclick = () =>{
    console.log('bata')
    eggsplorationInfo.classList.remove('active')
    boobStickersInfo.classList.remove('active')
    brightInfo.classList.remove('active')
    bataInfo.classList.toggle('active')
    body.classList.toggle('red-cursor')
    body.classList.remove('orange-cursor')
    body.classList.remove('pink-cursor')
    body.classList.remove('bright-green-cursor')
    // body.style.cursor = "url('assets/cursors/pink-cursor.png'), pointer"
}


// circleAnimation.onclick = () => {
//     circleAnimation.style.position = 'initial';
//     circleAnimation.style.width = '1000px';
//     circleAnimation.style.height = '1000px';
//     circleAnimation.style.borderRadius = '0px';
//     circleAnimation.style.top = '0px';
//     circleAnimation.style.left = '-5000px';
//     circleAnimation.style.transitionDuration = '2s';
//     body.removeChild(section);
// }