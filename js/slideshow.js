
document.addEventListener('DOMContentLoaded', function(){ 
  
  var imgIndex = 0;
  slideshow();
  
  function slideshow() {
    var i;
    var slides = document.getElementsByClassName("slide");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    imgIndex++;
    if (imgIndex > slides.length) { imgIndex = 1 }
    slides[imgIndex - 1].style.display = "block";
    setTimeout(slideshow, 2000);
  }
}, false);
