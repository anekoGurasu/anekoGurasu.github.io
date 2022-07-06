
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

function showToolTipFlag(){
  let tooltip=document.getElementById("tooltip-flag");
  tooltip.style.opacity=0.75;
}

function hideToolTipFlag(){
  let tooltip=document.getElementById("tooltip-flag");
  tooltip.style.opacity=0;
}



function getHeight(el){
  return el.top;
}

function underlineMenuItem(){

  const intro = document.getElementById("introductionID");
  const project = document.getElementById("portfolioID");
  const review = document.getElementById("reviewsID");
  const contact = document.getElementById("contactID");
  
    if($(this).scrollTop() >= $('portfolioID').offset().top - 50) {
       console.log("ano");
    } else {
      console.log("ne");
    }

}

  const intro = document.getElementById("introductionID");
  const project = document.getElementById("portfolioID");
  const review = document.getElementById("reviewsID");
  const contact = document.getElementById("contactID");

 
    $(document).scroll(function() {
      if (($(this).scrollTop() >= intro.offsetTop)&&($(this).scrollTop() < project.offsetTop)) {
        $("#nav-underline1").css("border-bottom", "4px solid #3c5c7c"); 
        $("#a-active1").css("color","#537994");

        $("#nav-underline2").css("border-bottom", "none");
        $("#nav-underline3").css("border-bottom", "none"); 
        $("#nav-underline4").css("border-bottom", "none");  

        $("#a-active2").css("color","#e0e0ff");
        $("#a-active3").css("color","#e0e0ff");
        $("#a-active4").css("color","#e0e0ff");
      } else if(($(this).scrollTop() >= project.offsetTop)&&($(this).scrollTop() < review.offsetTop-10)){
        $("#nav-underline2").css("border-bottom", "4px solid #3c5c7c"); 
        $("#a-active2").css("color","#537994");

        $("#nav-underline1").css("border-bottom", "none");
        $("#nav-underline3").css("border-bottom", "none"); 
        $("#nav-underline4").css("border-bottom", "none");  

        $("#a-active1").css("color","#e0e0ff");
        $("#a-active3").css("color","#e0e0ff");
        $("#a-active4").css("color","#e0e0ff");
      } else if(($(this).scrollTop() >= review.offsetTop-10)&&($(this).scrollTop() < contact.offsetTop-10)){
        $("#nav-underline3").css("border-bottom", "4px solid #3c5c7c"); 
        $("#a-active3").css("color","#537994");

        $("#nav-underline1").css("border-bottom", "none");
        $("#nav-underline2").css("border-bottom", "none"); 
        $("#nav-underline4").css("border-bottom", "none");  

        $("#a-active1").css("color","#e0e0ff");
        $("#a-active2").css("color","#e0e0ff");
        $("#a-active4").css("color","#e0e0ff");
      }else {
        $("#nav-underline4").css("border-bottom", "4px solid #3c5c7c"); 
        $("#a-active4").css("color","#537994");

        $("#nav-underline1").css("border-bottom", "none");
        $("#nav-underline2").css("border-bottom", "none"); 
        $("#nav-underline3").css("border-bottom", "none");  

        $("#a-active1").css("color","#e0e0ff");
        $("#a-active2").css("color","#e0e0ff");
        $("#a-active3").css("color","#e0e0ff");
      }
    });
  
