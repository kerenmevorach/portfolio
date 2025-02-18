const body = document.querySelector('#back-to-top');
const toTop = document.querySelectorAll('.to-top');

const circleAnimation = document.querySelector('.circle-animation');
const section = document.querySelector('section');

const googlie = document.querySelector('.googlie');
const googlieInfo = document.querySelector('.googlie-info');
const googlieClose = document.querySelector('#googlie-close');

// const canada = document.querySelector('.canada');
// const canadaInfo = document.querySelector('.canada-info');
// const canadaClose = document.querySelector('#canada-close');

const eggsploration = document.querySelector('.eggsploration');
const eggsplorationInfo = document.querySelector('.eggsploration-info');
const eggClose = document.querySelector('#egg-close');


const magazzino = document.querySelector('.magazzino');
const magazzinoInfo = document.querySelector('.magazzino-info');
const magazzinoClose = document.querySelector('#magazzino-close');

const setthebar = document.querySelector('.setthebar');
const setthebarInfo = document.querySelector('.setthebar-info');
const setthebarClose = document.querySelector('#setthebar-close');

const theartpod = document.querySelector('.theartpod');
const theartpodInfo = document.querySelector('.theartpod-info');
const theartpodClose = document.querySelector('#theartpod-close');

const wesleyan = document.querySelector('.wesleyan');
const wesleyanInfo = document.querySelector('.wesleyan-info');
const wesleyanClose = document.querySelector('#wesleyan-close');

const lwos = document.querySelector('.lwos');
const lwosInfo = document.querySelector('.lwos-info');
const lwosClose = document.querySelector('#lwos-close');

const tribeca = document.querySelector('.tribeca');
const tribecaInfo = document.querySelector('.tribeca-info');
const tribecaClose = document.querySelector('#tribeca-close');

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

const growinggreens = document.querySelector('.growinggreens');
const growinggreensInfo = document.querySelector('.growinggreens-info');
const growinggreensClose = document.querySelector('#growinggreens-close');

const typedesign = document.querySelector('.typedesign');
const typedesignInfo = document.querySelector('.typedesign-info');
const typedesignClose = document.querySelector('#typedesign-close');


// function scrollToTop(){
//     window.scrollTo({top: 0, behavior: 'smooth'});
//   }


toTop.forEach(button => {
    button.addEventListener('click', (event) => {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});


//   function closeProjects(){
//     magazzinoInfo.classList.remove('active')
//     magazzinoInfo.classList.remove('active')
//     eggsplorationInfo.classList.remove('active')
//     boobStickersInfo.classList.remove('active')
//     brightInfo.classList.remove('active')
//     bataInfo.classList.remove('active')
//     crackersInfo.classList.remove('active')
//     theexInfo.classList.remove('active')
//     growinggreensInfo.classList.remove('active')
//     typedesignInfo.classList.remove('active')
//   }

magazzino.onclick = () =>{
    console.log('magazzino')
    magazzinoInfo.classList.toggle('active')
    setthebarInfo.classList.remove('active')
    theartpodInfo.classList.remove('active')
    wesleyanInfo.classList.remove('active')
    lwosInfo.classList.remove('active')
    tribecaInfo.classList.remove('active')
    googlieInfo.classList.remove('active')
    eggsplorationInfo.classList.remove('active')
    boobStickersInfo.classList.remove('active')
    brightInfo.classList.remove('active')
    bataInfo.classList.remove('active')
    crackersInfo.classList.remove('active')
    growinggreensInfo.classList.remove('active')
    typedesignInfo.classList.remove('active')
}  

magazzinoClose.onclick = () =>{
    magazzinoInfo.classList.remove('active')
}

// function scrollToSetthebar(){
//     window.scrollTo({top: 160, behavior: 'smooth'});
//   }

setthebar.onclick = () =>{
    console.log('setthebar')
    magazzinoInfo.classList.remove('active')
    setthebarInfo.classList.toggle('active')
    theartpodInfo.classList.remove('active')
    wesleyanInfo.classList.remove('active')
    lwosInfo.classList.remove('active')
    tribecaInfo.classList.remove('active')
    googlieInfo.classList.remove('active')
    eggsplorationInfo.classList.remove('active')
    boobStickersInfo.classList.remove('active')
    brightInfo.classList.remove('active')
    bataInfo.classList.remove('active')
    crackersInfo.classList.remove('active')
    growinggreensInfo.classList.remove('active')
    typedesignInfo.classList.remove('active')
}  

setthebarClose.onclick = () =>{
    setthebarInfo.classList.remove('active')
}  

theartpod.onclick = () =>{
    console.log('theartpod')
    magazzinoInfo.classList.remove('active')
    setthebarInfo.classList.remove('active')
    theartpodInfo.classList.toggle('active')
    wesleyanInfo.classList.remove('active')
    lwosInfo.classList.remove('active')
    tribecaInfo.classList.remove('active')
    googlieInfo.classList.remove('active')
    eggsplorationInfo.classList.remove('active')
    boobStickersInfo.classList.remove('active')
    brightInfo.classList.remove('active')
    bataInfo.classList.remove('active')
    crackersInfo.classList.remove('active')
    growinggreensInfo.classList.remove('active')
    typedesignInfo.classList.remove('active')
}  

theartpodClose.onclick = () =>{
    theartpodInfo.classList.remove('active')
}  

wesleyan.onclick = () =>{
    console.log('theartpod')
    magazzinoInfo.classList.remove('active')
    setthebarInfo.classList.remove('active')
    theartpodInfo.classList.remove('active')
    wesleyanInfo.classList.toggle('active')
    lwosInfo.classList.remove('active')
    tribecaInfo.classList.remove('active')
    googlieInfo.classList.remove('active')
    eggsplorationInfo.classList.remove('active')
    boobStickersInfo.classList.remove('active')
    brightInfo.classList.remove('active')
    bataInfo.classList.remove('active')
    crackersInfo.classList.remove('active')
    growinggreensInfo.classList.remove('active')
    typedesignInfo.classList.remove('active')
}  

wesleyanClose.onclick = () =>{
    wesleyanInfo.classList.remove('active')
}

lwos.onclick = () =>{
    console.log('theartpod')
    magazzinoInfo.classList.remove('active')
    setthebarInfo.classList.remove('active')
    theartpodInfo.classList.remove('active')
    wesleyanInfo.classList.remove('active')
    lwosInfo.classList.toggle('active')
    tribecaInfo.classList.remove('active')
    googlieInfo.classList.remove('active')
    eggsplorationInfo.classList.remove('active')
    boobStickersInfo.classList.remove('active')
    brightInfo.classList.remove('active')
    bataInfo.classList.remove('active')
    crackersInfo.classList.remove('active')
    growinggreensInfo.classList.remove('active')
    typedesignInfo.classList.remove('active')
}  

lwosClose.onclick = () =>{
    lwosInfo.classList.remove('active')
}

tribeca.onclick = () =>{
    console.log('theartpod')
    magazzinoInfo.classList.remove('active')
    setthebarInfo.classList.remove('active')
    theartpodInfo.classList.remove('active')
    wesleyanInfo.classList.remove('active')
    lwosInfo.classList.remove('active')
    tribecaInfo.classList.toggle('active')
    googlieInfo.classList.remove('active')
    eggsplorationInfo.classList.remove('active')
    boobStickersInfo.classList.remove('active')
    brightInfo.classList.remove('active')
    bataInfo.classList.remove('active')
    crackersInfo.classList.remove('active')
    growinggreensInfo.classList.remove('active')
    typedesignInfo.classList.remove('active')
}  

tribecaClose.onclick = () =>{
    tribecaInfo.classList.remove('active')
}

googlie.onclick = () =>{
    console.log('eggs')
    magazzinoInfo.classList.remove('active')
    setthebarInfo.classList.remove('active')
    theartpodInfo.classList.remove('active')
    wesleyanInfo.classList.remove('active')
    lwosInfo.classList.remove('active')
    tribecaInfo.classList.remove('active')
    googlieInfo.classList.toggle('active')
    eggsplorationInfo.classList.remove('active')
    boobStickersInfo.classList.remove('active')
    brightInfo.classList.remove('active')
    bataInfo.classList.remove('active')
    crackersInfo.classList.remove('active')
    growinggreensInfo.classList.remove('active')
    typedesignInfo.classList.remove('active')
}  

googlieClose.onclick = () =>{
    googlieInfo.classList.remove('active')
}



// canada.onclick = () =>{
//     console.log('canada')
//     canadaInfo.classList.toggle('active')
//     googlieInfo.classList.remove('active')
//     magazzinoInfo.classList.remove('active')
//     eggsplorationInfo.classList.remove('active')
//     body.classList.remove('orange-cursor')
//     boobStickersInfo.classList.remove('active')
//     body.classList.remove('light-pink-cursor')
//     brightInfo.classList.remove('active')
//     body.classList.remove('bright-green-cursor')
//     bataInfo.classList.remove('active')
//     body.classList.remove('red-cursor')
//     crackersInfo.classList.remove('active')
//     body.classList.remove('purple-cursor')
//     theexInfo.classList.remove('active')
//     body.classList.remove('light-blue-cursor')
//     growinggreensInfo.classList.remove('active')
//     body.classList.remove('green-cursor')
//     typedesignInfo.classList.remove('active')
//     body.classList.remove('bright-pink-cursor')
// }  

// canadaClose.onclick = () =>{
//     canadaInfo.classList.remove('active')
// }

// eggsploration.onclick = () =>{
//     console.log('eggs')
//     googlieInfo.classList.remove('active')
//     magazzinoInfo.classList.remove('active')
//     eggsplorationInfo.classList.toggle('active')
//     body.classList.toggle('orange-cursor')
//     boobStickersInfo.classList.remove('active')
//     body.classList.remove('light-pink-cursor')
//     brightInfo.classList.remove('active')
//     body.classList.remove('bright-green-cursor')
//     bataInfo.classList.remove('active')
//     body.classList.remove('red-cursor')
//     crackersInfo.classList.remove('active')
//     body.classList.remove('purple-cursor')
//     theexInfo.classList.remove('active')
//     body.classList.remove('light-blue-cursor')
//     growinggreensInfo.classList.remove('active')
//     body.classList.remove('green-cursor')
//     typedesignInfo.classList.remove('active')
//     body.classList.remove('bright-pink-cursor')
//     // document.querySelector("link[rel*='icon']").href = "assets/cursors/orange-cursor.png";

//     // if (x.matches) { 
//         //       console.log('add')
//         //       window.addEventListener("scroll", scrollToTop);
//         //     } else {
//         //       console.log('remove')
//         //       window.removeEventListener("scroll",scrollToTop);
//         //     }
// }

eggsploration.onclick = () =>{
    console.log('eggs')
    magazzinoInfo.classList.remove('active')
    setthebarInfo.classList.remove('active')
    theartpodInfo.classList.remove('active')
    wesleyanInfo.classList.remove('active')
    lwosInfo.classList.remove('active')
    tribecaInfo.classList.remove('active')
    googlieInfo.classList.remove('active')
    eggsplorationInfo.classList.toggle('active')
    boobStickersInfo.classList.remove('active')
    brightInfo.classList.remove('active')
    bataInfo.classList.remove('active')
    crackersInfo.classList.remove('active')
    growinggreensInfo.classList.remove('active')
    typedesignInfo.classList.remove('active')
}


eggClose.onclick = () =>{
    eggsplorationInfo.classList.remove('active')
    body.classList.remove('orange-cursor')
}


boobStickers.onclick = () =>{
    console.log('boobs')
    magazzinoInfo.classList.remove('active')
    setthebarInfo.classList.remove('active')
    theartpodInfo.classList.remove('active')
    wesleyanInfo.classList.remove('active')
    lwosInfo.classList.remove('active')
    tribecaInfo.classList.remove('active')
    googlieInfo.classList.remove('active')
    eggsplorationInfo.classList.remove('active')
    boobStickersInfo.classList.toggle('active')
    brightInfo.classList.remove('active')
    bataInfo.classList.remove('active')
    crackersInfo.classList.remove('active')
    growinggreensInfo.classList.remove('active')
    typedesignInfo.classList.remove('active')
}

boobClose.onclick = () =>{
    boobStickersInfo.classList.remove('active')
    body.classList.remove('pink-cursor')
}

bright.onclick = () =>{
    console.log('bright')
    magazzinoInfo.classList.remove('active')
    setthebarInfo.classList.remove('active')
    theartpodInfo.classList.remove('active')
    wesleyanInfo.classList.remove('active')
    lwosInfo.classList.remove('active')
    tribecaInfo.classList.remove('active')
    googlieInfo.classList.remove('active')
    eggsplorationInfo.classList.remove('active')
    boobStickersInfo.classList.remove('active')
    brightInfo.classList.toggle('active')
    bataInfo.classList.remove('active')
    crackersInfo.classList.remove('active')
    growinggreensInfo.classList.remove('active')
    typedesignInfo.classList.remove('active')
}

brightClose.onclick = () =>{
    googlieInfo.classList.remove('active')
    brightInfo.classList.remove('active')
    body.classList.remove('bright-green-cursor')
}

bata.onclick = () =>{
    console.log('bata')
    magazzinoInfo.classList.remove('active')
    setthebarInfo.classList.remove('active')
    theartpodInfo.classList.remove('active')
    wesleyanInfo.classList.remove('active')
    lwosInfo.classList.remove('active')
    tribecaInfo.classList.remove('active')
    googlieInfo.classList.remove('active')
    eggsplorationInfo.classList.remove('active')
    boobStickersInfo.classList.remove('active')
    brightInfo.classList.remove('active')
    bataInfo.classList.toggle('active')
    crackersInfo.classList.remove('active')
    growinggreensInfo.classList.remove('active')
    typedesignInfo.classList.remove('active')
}

bataClose.onclick = () =>{
    bataInfo.classList.remove('active')
    body.classList.remove('red-cursor')
}

crackers.onclick = () =>{
    console.log('crackers')
    magazzinoInfo.classList.remove('active')
    setthebarInfo.classList.remove('active')
    theartpodInfo.classList.remove('active')
    wesleyanInfo.classList.remove('active')
    lwosInfo.classList.remove('active')
    tribecaInfo.classList.remove('active')
    googlieInfo.classList.remove('active')
    eggsplorationInfo.classList.remove('active')
    boobStickersInfo.classList.remove('active')
    brightInfo.classList.remove('active')
    bataInfo.classList.remove('active')
    crackersInfo.classList.toggle('active')
    growinggreensInfo.classList.remove('active')
    typedesignInfo.classList.remove('active')
}

crackersClose.onclick = () =>{
    crackersInfo.classList.remove('active')
    body.classList.remove('purple-cursor')
}


growinggreens.onclick = () =>{
    console.log('bata')
    magazzinoInfo.classList.remove('active')
    setthebarInfo.classList.remove('active')
    theartpodInfo.classList.remove('active')
    wesleyanInfo.classList.remove('active')
    lwosInfo.classList.remove('active')
    tribecaInfo.classList.remove('active')
    googlieInfo.classList.remove('active')
    eggsplorationInfo.classList.remove('active')
    boobStickersInfo.classList.remove('active')
    brightInfo.classList.remove('active')
    bataInfo.classList.remove('active')
    crackersInfo.classList.remove('active')
    growinggreensInfo.classList.toggle('active')
    typedesignInfo.classList.remove('active')
}

growinggreensClose.onclick = () =>{
    growinggreensInfo.classList.remove('active')
    body.classList.remove('green-cursor')
}

typedesign.onclick = () =>{
    console.log('bata')
    magazzinoInfo.classList.remove('active')
    setthebarInfo.classList.remove('active')
    theartpodInfo.classList.remove('active')
    wesleyanInfo.classList.remove('active')
    lwosInfo.classList.remove('active')
    tribecaInfo.classList.remove('active')
    googlieInfo.classList.remove('active')
    eggsplorationInfo.classList.remove('active')
    boobStickersInfo.classList.remove('active')
    brightInfo.classList.remove('active')
    bataInfo.classList.remove('active')
    crackersInfo.classList.remove('active')
    growinggreensInfo.classList.remove('active')
    typedesignInfo.classList.toggle('active')
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