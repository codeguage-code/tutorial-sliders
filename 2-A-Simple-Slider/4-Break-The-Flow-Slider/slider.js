var currentIndex = 0;
var newIndex = 0;

var slideElements = document.getElementsByClassName('slider_slide');
var slidesLength = slideElements.length;
var navElements = document.getElementsByClassName('slider_nav');

function navigateSlider() {
   navElements[0].disabled = (newIndex === 0);
   navElements[1].disabled = (newIndex === slidesLength - 1);

   slideElements[currentIndex].style.display = 'none';
   slideElements[newIndex].style.display = 'block';
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

navigateSlider();