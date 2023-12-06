const scroll = document.querySelector(".scroll");
var isDown = false;
var scrollX;
var scrollLeft;



  /* Crea un observer per l'elemento */
const observer = new IntersectionObserver((entries, observer) => {
	entries.forEach(entry => {
	  if (entry.isIntersecting) {
		/* Aggiungi la classe "visible" quando l'elemento è visibile */
		entry.target.classList.add('visible');
		/* Disconnetti l'observer dopo aver mostrato l'elemento */
		observer.unobserve(entry.target);
	  }
	});
  });
  
 
  $(document).ready(function() {
    Slider3.init();
});

var Slider3 = (function() {
  var initSlider = function() {
      var dir = $("html").attr("dir");
      var swipeHandler = new Hammer(document.getElementById("slider3"));
      swipeHandler.on('swipeleft', function(e) {
          if (dir == "rtl")
              $(".arrow-left3").trigger("click");
          else
              $(".arrow-right3").trigger("click");
      });

      swipeHandler.on('swiperight', function(e) {
          if (dir == "rtl")
              $(".arrow-right3").trigger("click");
          else
              $(".arrow-left3").trigger("click");
      });

      $(".arrow-right3 , .arrow-left3").click(function(event) {
          var nextActiveSlide = $(".slide3.active").next();

          if ($(this).hasClass("arrow-left3"))
              nextActiveSlide = $(".slide3.active").prev();

          if (nextActiveSlide.length > 0) {
              var nextActiveIndex = nextActiveSlide.index();
              $(".dots3 span").removeClass("active");
              $($(".dots3").children()[nextActiveIndex]).addClass("active");

              updateSlides(nextActiveSlide);
          }
      });

      $(".dots3 span").click(function(event) {
          var slideIndex = $(this).index();
          var nextActiveSlide = $($(".slider3").children()[slideIndex]);
          $(".dots3 span").removeClass("active");
          $(this).addClass("active");

          updateSlides(nextActiveSlide);
      });

      var updateSlides = function(nextActiveSlide) {
          var nextActiveSlideIndex = $(nextActiveSlide).index();

          $(".slide3").removeClass("prev-13");
          $(".slide3").removeClass("next-13");
          $(".slide3").removeClass("active");
          $(".slide3").removeClass("prev-23");
          $(".slide3").removeClass("next-23");

          nextActiveSlide.addClass("active");

          nextActiveSlide.prev().addClass("prev-13");
          nextActiveSlide.prev().prev().addClass("prev-23");
          nextActiveSlide.addClass("active");
          nextActiveSlide.next().addClass("next-13");
          nextActiveSlide.next().next().addClass("next-23");
      }

      var updateToNextSlide = function(nextActiveSlide)
      {
          
      }
  }
  return {
      init: function() {
          initSlider();
      }
  }
})();





window.onload = function() {
	var logo = document.querySelector('.logo');
	logo.classList.add('animate');
	var boxTitolo = document.querySelector('.bg .box-titolo');
	boxTitolo.classList.add('animate');
	var Titolo = document.querySelector('.bg h1');
	Titolo.classList.add('animate');
	var whats = document.querySelector('.whats');
  var whats = document.querySelector('.whats');
	whats.classList.add('animate');
	var whatsimg = document.querySelector('.whats img');
	whatsimg.classList.add('animate');
}

  /* Aggiungi l'observer all'elemento che vuoi animare */

  
 


  var int3 = document.querySelector('.int3');
  observer.observe(int3);
  var video0 = document.querySelector('.int3 .box-video');
  observer.observe(video0);



  


	



