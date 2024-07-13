const subMenu = document.querySelector('.submenu');
const menuBtn = document.querySelector('.menu_btn');
const closeBtn = document.querySelector('.close_menu');

menuBtn.addEventListener('click', () =>{
    subMenu.classList.add('active')
});

closeBtn.addEventListener('click', () =>{ 
    subMenu.classList.remove('active')
});



// animation scroll effect
// controller ScrollMagic
let controller = new ScrollMagic.Controller();
const animations = [
    { selector: ".slideshow_container", duration: 2000, x: 200 },  
    { selector: ".syrenge", duration: 4000, x: -100 },  
  ];
  
  
function adjustXValue() {
    const screenWidth = window.innerWidth;
    if (screenWidth > 1200) { 
      animations.forEach(animation => {
        if (animation.hasOwnProperty('x')) {  
          animation.x = animation.x * 4;
        }
        if (animation.hasOwnProperty('y')) { 
          animation.y = animation.y * 2;
        } 
      });
    }
}
  
  adjustXValue();
  window.addEventListener('resize', adjustXValue);
  
  animations.forEach(animation => { 
    var tweenParams = { duration: 300, x: animation.x };
    if (animation.hasOwnProperty('x')) {
      tweenParams.x = animation.x;
    }
    if (animation.hasOwnProperty('y')) {
      tweenParams.y = animation.y;
    } 
    
    var tween = gsap.to(animation.selector, tweenParams);
  
    var scene = new ScrollMagic.Scene({
      triggerElement: animation.selector,
      duration: animation.duration
    })
    .setTween(tween)
    .addTo(controller);
  });
  
  
  
  