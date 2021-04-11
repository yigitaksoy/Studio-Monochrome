gsap.registerPlugin(ScrollToPlugin); //  ScrollToPlugin documentation https://greensock.com/scrolltoplugin/

 $("#contact a").click(function(e) {

  if (detectMob()) { 
    return true;
  }

  e.preventDefault();
  gsap.to(window, 2, {scrollTo: {y:'#home', autoKill:false}, ease: Power4.easeInOut});
});

 $(".cta").click(function(e) {

  if (detectMob()) {
    return true;
  }

  e.preventDefault(); 
  gsap.to(window, 2, {scrollTo: {y:'#about img', autoKill:false}, ease: Power4.easeInOut} );
 });

$(".slide").click(function(e) {
 
  if (detectMob()) {
    return true;
  }

  e.preventDefault();
  gsap.to(window, 2, {scrollTo: {y:'#home', autoKill:false}, ease: Power4.easeInOut} );
});

// Detect Mobile Browser Source code:    https://stackoverflow.com/questions/11381673/detecting-a-mobile-browser

function detectMob() {
  return ( ( window.innerWidth <= 1024 ) && ( window.innerHeight <= 1366 ) );
}


// Image Animations Source code: https://codepen.io/GreenSock/pen/pojzxwZ

function animateFrom(elem, direction) {
  direction = direction | 1;
  
  var x = 0,
      y = direction * 100;
  if(elem.classList.contains("fromLeft")) {
    x = -100;
    y = 0;
  } else if(elem.classList.contains("fromRight")) {
    x = 100;
    y = 0;
  }
  gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
    duration: 2, 
    x: 0,
    y: 0, 
    autoAlpha: 1, 
    ease: "expo", 
    overwrite: "auto"
  });
}

function hide(elem) {
  gsap.set(elem, {autoAlpha: 0});
}

document.addEventListener("DOMContentLoaded", function() {
  gsap.registerPlugin(ScrollTrigger);
  
  gsap.utils.toArray(".reveal").forEach(function(elem) {
    hide(elem); // assure that the element is hidden when scrolled into view
    
    ScrollTrigger.create({
      trigger: elem,
      onEnter: function() { animateFrom(elem) }, 
      onEnterBack: function() { animateFrom(elem, -1) },
      onLeave: function() { hide(elem) } // assure that the element is hidden when scrolled into view
    });
  });
});

let textRight = gsap.utils.toArray('.textRight')

textRight.forEach((item, index) => {

 let timeLine = gsap.timeline({
   scrollTrigger:{
     trigger: item,
     start: "center bottom",
     end: "bottom 70%",
     toggleActions: "play play play reverse"
   }
 });
 timeLine.from(item, {
  
  y: 50,
  opacity: 0,
  duration: 2,
  ease: "power4"
 });
});
 
// Dark Mode Theme Switch and Save user selection in localStorage for their next visit

  const toggleSwitch = document.querySelector('.switch input[type="checkbox"]');
  const currentTheme = localStorage.getItem('theme');
  
  if (currentTheme) {
      document.documentElement.setAttribute('data-theme', currentTheme);
    
      if (currentTheme === 'dark') {
          toggleSwitch.checked = true;
      }
  }
  
  function switchTheme(e) {
      if (e.target.checked) {
          document.documentElement.setAttribute('data-theme', 'dark');
          localStorage.setItem('theme', 'dark');
      }
      else {        document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
      }    
  }
  
  toggleSwitch.addEventListener('change', switchTheme, false);


 
// Scrollbar    Source code: https://codepen.io/Mamboleoo/pen/abdwYaJ

 gsap.registerPlugin(ScrollTrigger);
 gsap.to('progress', {
   value: 100,
   ease: 'none',
   scrollTrigger: { scrub: 0.3 }
 });

 
 // Cursor      Source code: https://codepen.io/ionz149/pen/97133e4b9a4578e5a30aa09c7a75ec63
 
 var $circle = $('.circle'),
     $follow = $('.circle-follow');
 
 function moveCircle(e) {
   TweenLite.to($circle, 0.3, {
       x: e.clientX,
       y: e.clientY
   });
   TweenLite.to($follow, 0.7, {
       x: e.clientX,
       y: e.clientY
   });  
 }
 
 function hoverFunc(e) {
   TweenLite.to($circle, 0.3, {
     opacity: 1,
     scale: 0
   });
   TweenLite.to($follow, 0.3, {
       scale: 3
   });  
 }
 
 function unhoverFunc(e) {
   TweenLite.to($circle, 0.3, {
     opacity: 1,
     scale: 1
   });
   TweenLite.to($follow, 0.3, {
       scale: 1
   });  
 }
 
 $(window).on('mousemove', moveCircle);
 
 $("a").hover(hoverFunc, unhoverFunc);
 $("i").hover(hoverFunc, unhoverFunc);
 $(".switch").hover(hoverFunc, unhoverFunc);
 $("button").hover(hoverFunc, unhoverFunc);
 
 

 
 // Navigation    Source code: https://codepen.io/jeffbredenkamp/pen/VypMNE
 
 
 var navigation = new TimelineLite({paused:true, reversed:true});
 navigation.to("#navigationWrap", 0.4, {opacity: 1, display: 'block'})
           .to(".navbar", 0.3, {opacity: 0}, "-=0.1")
           .to(".close", 0.1, {display: "block", opacity: 1}, "-=0.1")
           .from(".menu", 0.3, {opacity: 0, y: 30})
           .from(".social", 0.4, {opacity: 0});
 
 $(".navbar, .close").click (function() {
   navigation.reversed() ? navigation.play() : navigation.reverse();
 })
 
  $(".menu a").click (function() {
   navigation.reversed() ? navigation.play() : navigation.reverse();
  })

 
 
 // Landing Page Animations
 
 var landingAnimations = new TimelineMax({ paused: true }); 
 
  TweenMax.staggerFrom(
    ".navbar",
    1,
    {
      y: 20,
      opacity: 0,
      ease: Expo.easeOut,
      delay: 1
    },
    0.1
  );

  TweenMax.staggerFrom(
    ".logo",
    1,
    {
      y: 20,
      opacity: 0,
      ease: Expo.easeOut,
      delay: 1
    },
    0.1
  );

  let timeLine = gsap.timeline({delay: 1.8});
    
  timeLine.from('.animate', {
    opacity: 0,
    duration: 1, 
    ease:Linear.easeNone,  
  }, "reveal")


  // Gradient Reveal source code https://greensock.com/forums/topic/27371-gradient-reveal-on-scroll/?tab=comments#comment-134126
  gsap.to(".headline", 5, { 
    '-webkit-mask-image': '-webkit-linear-gradient(top, rgba(0,0,0,1) 100%,  rgba(0,0,0,1) 100%, rgba(0,0,0,0) 150%, rgba(0,0,0,0) 0%)'});