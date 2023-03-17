var currentIndex = 0;
var newIndex = 0;
var slideElements = document.getElementsByClassName('slider_slide');
var slidesLength = slideElements.length;


function navigateSlider() {
   if (enableAutoplay) {
      Autoplay.reset();

      if (enableProgressBar) {
         ProgressBar.reset();
      }
   }

   // Note that we are using repeat-the-flow behavior over here, as that suits
   // more to the slider when we have autoplay enabled.
   if (newIndex === slidesLength) {
      newIndex = 0;
   }
   else if (newIndex === -1) {
      newIndex = slidesLength - 1;
   }

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


var Autoplay = {
   timerId: null,
   interval: 4000,

   start: function() {
      this.timerId = setInterval(function() {
         newIndex++;
         navigateSlider();
      }, this.interval);
   },

   reset: function() {
      clearInterval(this.timerId);
      this.start();
   }
}


var ProgressBar = {
   element: document.getElementsByClassName('slider_progress-bar_bar')[0],
   timerId: null,

   start: function() {
      var _this = this;
      this.timerId = setTimeout(function() {
         _this.element.classList.add('slider_progress-bar_bar--moving');
      }, 0);
   },

   stop: function() {
      this.element.classList.remove('slider_progress-bar_bar--moving');
      clearTimeout(this.timerId);
   },

   reset: function() {
      this.stop();
      this.start();
   }
};


var enableAutoplay = true;
var enableProgressBar = Boolean(ProgressBar.element);

if (enableProgressBar && !enableAutoplay) {
   throw new Error('enableAutoplay must be true when a progress bar is desired.');
}

if (enableAutoplay) {
   Autoplay.start();

   if (enableProgressBar) {
      ProgressBar.start();
   }
}


navigateSlider();