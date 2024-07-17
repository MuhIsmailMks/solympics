const subMenu = document.querySelector('.submenu');
const menuBtn = document.querySelector('.menu_btn');
const closeBtn = document.querySelector('.close_menu');

menuBtn.addEventListener('click', () =>{
    subMenu.classList.add('active')
});

subMenu.addEventListener('click', (e) =>{
   let targ = e.target;

   if (targ.tagName.toLowerCase() === 'a') { 
    subMenu.classList.remove('active')
    }  
});

closeBtn.addEventListener('click', () =>{ 
    subMenu.classList.remove('active')
});


// times
const initialCountDownDate = new Date("jun 20, 2024 00:00:00").getTime();
 
let x = setInterval(function() {
 
  let now = new Date().getTime();
   
  let distance = now - initialCountDownDate;
 
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
 
  document.getElementById("day").innerHTML = (days + 1) + " days"
  document.getElementById("countdown_times").innerHTML = hours + "H "+ minutes + "M " + seconds + "S";

}, 1000);

// copy button
const copybtns = document.querySelectorAll(".contractCopy");
    
copybtns.forEach(copybtn => {
    copybtn.addEventListener("click", function() { 
    let message = copybtn.querySelector('.message');
    let intervalId;
        let addressText = document.querySelector(".value").getAttribute('value');
        message.style.display='block';

        if (intervalId) {  
            clearInterval(intervalId);
        }

        intervalId = setInterval(() => {
            clearInterval(intervalId);  
            message.style.display='none';
        }, 1000);

        navigator.clipboard.writeText(addressText);
    }); 

})



// animation scroll effect
// controller ScrollMagic
let controller = new ScrollMagic.Controller();
const animations = [
    { selector: ".snibbu_shell", duration: 2000, x: 100},  
    { selector: ".faq_image", duration: 4000, x: 100},  
    { selector: ".token_images", duration: 4000, x: -100},  
    // { selector: ".trackim", duration: 3000, rotate: 45 },  
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
        if (animation.hasOwnProperty('rotate')) {
          animation.rotate = animation.rotate * 1; 
        }
      });
    }
}

adjustXValue();
window.addEventListener('resize', adjustXValue);

animations.forEach(animation => { 
    var tweenParams = { duration: 300 };
    if (animation.hasOwnProperty('x')) {
      tweenParams.x = animation.x;
    }
    if (animation.hasOwnProperty('y')) {
      tweenParams.y = animation.y;
    }
    if (animation.hasOwnProperty('rotate')) {
      tweenParams.rotate = animation.rotate;
    }
    
    var tween = gsap.to(animation.selector, tweenParams);

    var scene = new ScrollMagic.Scene({
      triggerElement: animation.selector,
      duration: animation.duration
    })
    .setTween(tween)
    .addTo(controller);
});



// question
const faqs = document.querySelectorAll('.highlight'); 
faqs.forEach(faq => {
    faq.addEventListener('click',() => { 

 

        if (!faq.classList.contains('active')) {
            faqs.forEach(faq => { 
                faq.classList.remove('active');
            });
            faq.classList.add('active');

            
        } else {
            faq.classList.remove('active'); 
        }

       
    });
});
 