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


