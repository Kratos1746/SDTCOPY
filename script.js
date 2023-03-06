const scroll = document.querySelector(".scroll");
var isDown = false;
var scrollX;
var scrollLeft;

// Mouse Up Function
scroll.addEventListener("mouseup", () => {
	isDown = false;
	scroll.classList.remove("active");
});

// Mouse Leave Function
scroll.addEventListener("mouseleave", () => {
	isDown = false;
	scroll.classList.remove("active");
});

// Mouse Down Function
scroll.addEventListener("mousedown", (e) => {
	e.preventDefault();
	isDown = true;
	scroll.classList.add("active");
	scrollX = e.pageX - scroll.offsetLeft;
	scrollLeft = scroll.scrollLeft;
});

// Mouse Move Function
scroll.addEventListener("mousemove", (e) => {
	if (!isDown) return;
	e.preventDefault();
	var element = e.pageX - scroll.offsetLeft;
	var scrolling = (element - scrollX) * 2;
	scroll.scrollLeft = scrollLeft - scrolling;
});

var cards = document.querySelectorAll('.flip-card');

[...cards].forEach((card)=>{
  card.addEventListener( 'click', function() {
    card.classList.toggle('active');
  });
});

window.onload = function() {
	var logo = document.querySelector('.logo');
	logo.classList.add('animate');
	var boxTitolo = document.querySelector('.bg .box-titolo');
	boxTitolo.classList.add('animate');
	var Titolo = document.querySelector('.bg h1');
	Titolo.classList.add('animate');
	var Sottotitolo = document.querySelector('.bg p');
	Sottotitolo.classList.add('animate');
	var down = document.querySelector('.scroll-down');
	down.classList.add('animate');
	var whats = document.querySelector('.whats');
	whats.classList.add('animate');
	var whatsimg = document.querySelector('.whats img');
	whatsimg.classList.add('animate');
	
  };

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
  
  /* Aggiungi l'observer all'elemento che vuoi animare */
  var int1 = document.querySelector('.int1 h3');
  observer.observe(int1);
  var pspan = document.querySelector('.int1 .pspan');
  observer.observe(pspan);
  var black = document.querySelector('.scroll-down-black');
  observer.observe(black);
  var int2 = document.querySelector('.int2 h3');
  observer.observe(int2);
  var pint2 = document.querySelector('.int2 #pint2');
  observer.observe(pint2);
  var boxscroll = document.querySelector('.int2 .scroll');
  observer.observe(boxscroll);
  var card12 = document.querySelector('.int2 .card1');
  observer.observe(card12);
  var card22 = document.querySelector('.int2 .card2');
  observer.observe(card22);
  var card32 = document.querySelector('.int2 .card3');
  observer.observe(card32);
  var int3 = document.querySelector('.int3');
  observer.observe(int3);
  var pint3 = document.querySelector('.int3 p');
  observer.observe(pint3);
  var boxscroll4 = document.querySelector('.int4 .scroll');
  observer.observe(boxscroll4);
  var card14 = document.querySelector('.int4 .card1');
  observer.observe(card14);
  var card24 = document.querySelector('.int4 .card2');
  observer.observe(card24);
  var card34 = document.querySelector('.int4 .card3');
  observer.observe(card34);
  var boxscroll6 = document.querySelector('.int6 .scroll');
  observer.observe(boxscroll6);
  var card16 = document.querySelector('.int6 .card1');
  observer.observe(card16);
  var card26 = document.querySelector('.int6 .card2');
  observer.observe(card26);
  var card36 = document.querySelector('.int6 .card3');
  observer.observe(card36);
  var card46 = document.querySelector('.int6 .card4');
  observer.observe(card46);
  var card56 = document.querySelector('.int6 .card5');
  observer.observe(card56);
  var video = document.querySelector('.int3 .box-video');
  observer.observe(video);
  var int4 = document.querySelector('.int4 h3 span');
  observer.observe(int4);
  var sin = document.querySelector('.int4 #sin');
  observer.observe(sin);
  var des = document.querySelector('.int4 #des');
  observer.observe(des);
  var nero = document.querySelector('.int4 h3 #nero');
  observer.observe(nero);
  var int5 = document.querySelector('.int5 h3');
  observer.observe(int5);
  var nome = document.querySelector('.int5 .nome');
  observer.observe(nome);
  var int56 = document.querySelector('.int5 #sdt');
  observer.observe(int56);
  var int5p1 = document.querySelector(' #p1');
  observer.observe(int5p1);
  var int5p2 = document.querySelector(' #p2');
  observer.observe(int5p2);

  
	
	

