var slides = document.querySelectorAll(".slide");

var index = 0;


var enableAutoplay = true;
var autoplayInterval = 4000;

if (enableAutoplay) {
   setInterval(function() {
      index++;
      changeSlide();
   }, autoplayInterval);
}

function prevSlide(n){
  index+=n;
  console.log("prevSlide is called");
  changeSlide();
}

function nextSlide(n){
  index+=n;
  changeSlide();
}

changeSlide();

function changeSlide(){

  if(index>slides.length-1)
    index=0;

  if(index<0)
    index=slides.length-1;



    for(let i=0;i<slides.length;i++){
      slides[i].style.display = "none";

     


    }

    slides[index].style.display = "block";
   



}



document.getElementById('wrapper').onclick = function() {

    var className = ' ' + wrapper.className + ' ';

    this.className = ~className.indexOf(' active ') ?
                         className.replace(' active ', ' ') :
                         this.className + ' active';
};


document.querySelectorAll(".projcard-description").forEach(function(box) {
  $clamp(box, {clamp: 6});
});