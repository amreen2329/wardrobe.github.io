let hamburger = document.querySelector(".hamburger");
let navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});
document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);
var counter = 1;
setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 4) {
    counter = 1;
  }
}, 5000);
const containers = document.querySelectorAll(".container_faq");
let currentlyOpenContainer = null;

containers.forEach((container) => {
  const contentContainer = container.querySelector(".content-container");

  container.addEventListener("click", () => {
    if (currentlyOpenContainer && currentlyOpenContainer !== contentContainer) {
      currentlyOpenContainer.style.maxHeight = "0px";
    }

    currentlyOpenContainer = contentContainer;

    if (contentContainer.style.maxHeight === "0px") {
      contentContainer.style.maxHeight = "100vh";
    } else {
      contentContainer.style.maxHeight = "0px";
    }
  });
});
