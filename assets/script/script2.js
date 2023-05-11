const body = document.querySelector('body');


const whoIsShe = document.querySelector('.whoisshe');
const whoIsSheInfo = document.querySelector('.whoisshe-info');

const experience = document.querySelector('.experience');
const experienceInfo = document.querySelector('.experience-info');

const education = document.querySelector('.education');
const educationInfo = document.querySelector('.education-info');

const awards = document.querySelector('.awards');
const awardsInfo = document.querySelector('.awards-info');


// function scrollToTop(){
//     window.scrollTo({top: 0, behavior: 'smooth'});
//   }


whoIsShe.onclick = () =>{
    console.log('who is she')
    whoIsSheInfo.classList.toggle('active')
}

experience.onclick = () =>{
    console.log('experience')
    experienceInfo.classList.toggle('active')
}


education.onclick = () =>{
    console.log('education')
    educationInfo.classList.toggle('active')
}

awards.onclick = () =>{
    console.log('awards')
    awardsInfo.classList.toggle('active')
}
