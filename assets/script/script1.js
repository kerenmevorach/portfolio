const body = document.querySelector("#back-to-top");
const toTop = document.querySelectorAll(".to-top");

const circleAnimation = document.querySelector(".circle-animation");
const section = document.querySelector("section");

toTop.forEach((button) => {
  button.addEventListener("click", (event) => {
    console.log("scroll");
    event.stopPropagation(); // Prevent the click from affecting parent elements
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
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

const projects = Array.from(document.getElementsByClassName("project"));

const nav = document.getElementById("nav");
const navHeight = nav.getBoundingClientRect().height;

projects.forEach((project) => {
  project.addEventListener("click", function (event) {
    const infoContainer = this.querySelector(".info-container");
    const closeButton = this.querySelector(".close");
    const projectInfo = this.querySelector(".project-info"); // The entire row

    // If the clicked element is NOT the close button and NOT inside .project-info, do nothing
    if (event.target !== closeButton && !projectInfo.contains(event.target)) {
      return;
    }

    // Close all other projects
    projects.forEach((otherProject) => {
      if (otherProject !== this) {
        otherProject.querySelector(".info-container")?.classList.remove("show");
      }
    });

    // Toggle visibility of the clicked project
    infoContainer.classList.toggle("show");

    // Scroll to the top of the project
    window.scrollTo({
      top: this.getBoundingClientRect().top + window.scrollY - navHeight,
      behavior: "smooth",
    });
  });
});
