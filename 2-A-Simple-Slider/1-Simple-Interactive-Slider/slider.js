var currentIndex = 0;

var slideElements = document.getElementsByClassName('slider_slide');
var navElements = document.getElementsByClassName('slider_nav');

navElements[0].addEventListener('click', function() {
   slideElements[currentIndex].style.display = 'none';
   currentIndex--;
   slideElements[currentIndex].style.display = 'block';
});

navElements[1].addEventListener('click', function() {
   slideElements[currentIndex].style.display = 'none';
   currentIndex++;
   slideElements[currentIndex].style.display = 'block';
});