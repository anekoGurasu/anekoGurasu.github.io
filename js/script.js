
let projects=[
    {
        name: "Portfolio",
        customer: "AnekoGurasu (me)",
        url:"anekogurasu.github.io",
        used: "HTML, CSS (SCSS), JavaScript, ajax",
        desc: "Portfolio",
        img:"/img/pfpf.png"
    },
    {
        name: "Portfolio 2",
        customer: "AnekoGurasu (me)",
        used: "HTML, CSS (SCSS), JavaScript, ajax",
        img:"/img/pfpf.png"
    }
]

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}



