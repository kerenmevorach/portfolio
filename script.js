const body = document.querySelector('body');

const eggsploration = document.querySelector('.eggsploration');
const eggsplorationInfo = document.querySelector('.eggsploration-info');
const eggClose = document.querySelector('#egg-close');

const boobStickers = document.querySelector('.boob-stickers');
const boobStickersInfo = document.querySelector('.boob-stickers-info');
const boobClose = document.querySelector('#boob-close');

const bright = document.querySelector('.bright');
const brightInfo = document.querySelector('.bright-info');
const brightClose = document.querySelector('#bright-close');


eggsploration.onclick = () =>{
    console.log('hi')
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
    console.log('hi')
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
    console.log('hi')
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


