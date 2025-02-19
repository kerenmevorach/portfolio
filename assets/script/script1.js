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
  project.addEventListener('click', function (el) {``
    // Close all the other projects
    projects.forEach(otherProject => {
      if (otherProject !== this) {
        otherProject.querySelector('.project-info')?.classList.remove('show');
        otherProject.querySelector('.info-container')?.classList.remove('show');
      }
    });

    // Show the content inside the clicked project
    const projectInfo = this.querySelector('.project-info');
    const infoContainer = this.querySelector('.info-container');
    projectInfo.classList.toggle('show');
    infoContainer.classList.toggle('show');
    
    // Scroll to the top of the project with 100px of breathing room
    window.scrollTo({
      top: this.getBoundingClientRect().top + window.scrollY - navHeight,
      behavior: 'smooth',
    });
  });
});
