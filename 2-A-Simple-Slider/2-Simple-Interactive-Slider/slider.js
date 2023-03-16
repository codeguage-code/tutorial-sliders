var currentIndex = 0;
var newIndex = null;

var slideElements = document.getElementsByClassName('slider_slide');
var navElements = document.getElementsByClassName('slider_nav');

function navigateSlider() {
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