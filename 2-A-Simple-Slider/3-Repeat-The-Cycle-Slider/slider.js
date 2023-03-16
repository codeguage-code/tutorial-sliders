var currentIndex = 0;
var newIndex = 0;

var slideElements = document.getElementsByClassName('slider_slide');
var slidesLength = slideElements.length;
var navElements = document.getElementsByClassName('slider_nav');

function navigateSlider() {
   if (newIndex === -1) {
      newIndex = slidesLength - 1;
   }
   else if (newIndex === slidesLength) {
      newIndex = 0;
   }

   slideElements[newIndex].style.display = 'block';
   slideElements[currentIndex].style.display = 'none';
   currentIndex = newIndex;
}

navElements[0].addEventListener('click', function() {
   newIndex--;
   navigateSlider();
});

navElements[1].addEventListener('click', function() {
   newIndex++;
   navigateSlider();
});