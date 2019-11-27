/////////// scroll events ///////////

var nav = document.getElementById('land-nav');
var heroContent = document.getElementById('hero-content');
var tropicsParallax = document.getElementById('tropics-parallax');
var boutiqueParallax = document.getElementById('boutique-parallax');
var spiceParallax = document.getElementById('spice-parallax');

var viewHeight = window.innerHeight;
var scrollSection = 0;

window.addEventListener('scroll', ()=>{
    var background = document.getElementById('');
    var scrollAmount = window.pageYOffset;
    
    if( scrollSection > 0 && scrollAmount < viewHeight*0.2) {
        heroContent.classList.remove('hide');
        scrollSection = 0;
    } else if( scrollSection == 0 && scrollAmount > viewHeight*0.01) {
        heroContent.classList.add('hide');
        scrollSection = 1;
    } else if( scrollSection == 1 && scrollAmount > viewHeight){
        nav.classList.remove('white-nav');
        scrollSection = 2;
    } else if(scrollSection == 2 && scrollAmount > viewHeight*3){
        nav.classList.remove('clear');
    } else if(scrollSection == 2 && scrollAmount < viewHeight*3){
        nav.classList.add('clear')
    }
    
    if (scrollAmount > viewHeight*0.01) {
        tropicsParallax.style.transform='translate(0%, calc(' + (scrollAmount-viewHeight)*0.2 + 'px))'; 
    }  
    
    if (scrollAmount > viewHeight*4.2) {
        boutiqueParallax.style.transform='translate(0%, calc(' + (scrollAmount-[viewHeight*4.5])*0.2 + 'px))'; 
    }
    
    if (scrollAmount > viewHeight*4.2) {
        spiceParallax.style.transform='translate(0%, calc(' + (scrollAmount-[viewHeight*4.5])*0.2 + 'px))'; 
    }

})

var menuBtn = document.getElementById('menu-btn');
var menu = document.getElementById('menu');

menuBtn.addEventListener("click", menuControl);

function menuControl() {
    menu.classList.toggle('open');
}