var currentIndex = 0;
var newIndex = 0;
var slideElements = document.getElementsByClassName('slider_slide');
var slidesLength = slideElements.length;


function navigateSlider() {
   navElements[0].disabled = (newIndex === 0);
   navElements[1].disabled = (newIndex === slidesLength - 1);

   paginationElement.childNodes[currentIndex].classList.remove('slider_pagination_btn--sel');
   paginationElement.childNodes[newIndex].classList.add('slider_pagination_btn--sel');

   slideElements[currentIndex].style.display = 'none';
   slideElements[newIndex].style.display = 'block';
   currentIndex = newIndex;
}


var navElements = document.getElementsByClassName('slider_nav');

navElements[0].addEventListener('click', function() {
   newIndex--;
   navigateSlider();
});

navElements[1].addEventListener('click', function() {
   newIndex++;
   navigateSlider();
});


// Slider's pagination
var paginationElement = document.getElementsByClassName('slider_pagination')[0];
var paginationHTML = [];
for (var i = 0; i < slidesLength; i++) {
   paginationHTML.push('<button class="slider_pagination_btn" data-index="' + i + '"></button>');
}
paginationElement.innerHTML = paginationHTML.join('');


paginationElement.addEventListener('click', function(e) {
   var target = e.target;
   if (target.classList.contains('slider_pagination_btn')) {
      newIndex = Number(target.getAttribute('data-index'));
      navigateSlider();
   }
});


navigateSlider();