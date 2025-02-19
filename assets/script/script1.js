const body = document.querySelector('#back-to-top');
const toTop = document.querySelectorAll('.to-top');

const circleAnimation = document.querySelector('.circle-animation');
const section = document.querySelector('section');

toTop.forEach(button => {
  button.addEventListener('click', event => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

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

const projects = Array.from(document.getElementsByClassName('project'));

const nav = document.getElementById('nav');
const navHeight = nav.getBoundingClientRect().height;

projects.forEach(project => {
  project.addEventListener('click', function() {``
    // Close all the other projects
    const infoContainer = this.querySelector('.info-container');
    const isShowing = Array.from(infoContainer.classList).includes('show')
    
    if(isShowing){ 
      infoContainer.classList.toggle('fade-out')
      setTimeout(()=>{
        infoContainer.classList.toggle('show');
      },200)
    } else {
      infoContainer.classList.toggle('show');
      // Scroll to the top of the project
        window.scrollTo({
          top: this.getBoundingClientRect().top + window.scrollY - navHeight,
          behavior: 'smooth',
        });
    }

    projects.forEach(otherProject => {
      if(otherProject !== this){ 
        setTimeout(()=>{
          otherProject.querySelector('.info-container')?.classList.remove('show');
          infoContainer.classList.remove('fade-out')
        },200)
      }
    });
    
  });
});
