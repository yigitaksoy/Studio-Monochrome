 // Navigation    Source code: https://codepen.io/jeffbredenkamp/pen/VypMNE
 
 var navigation = new TimelineLite({paused:true, reversed:true});
 navigation.to("#navigationWrap", 0.4, {opacity: 1, display: 'block'})
           .to(".navbar", 0.3, {opacity: 0}, "-=0.1")
           .to(".close", 0.1, {display: "block", opacity: 1}, "-=0.1")
           .from(".menu", 0.3, {opacity: 0, y: 30})
           .from(".social", 0.4, {opacity: 0});
 
 $(".navbar, .close").click (function() {
   navigation.reversed() ? navigation.play() : navigation.reverse();
 });
 
  $(".menu a").click (function() {
   navigation.reversed() ? navigation.play() : navigation.reverse();
  });

 // Landing Page Animations
 
 var landingAnimations = new TimelineMax({ paused: false }); 
 
 landingAnimations.from(
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

  landingAnimations.from(
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
  }, "reveal");

  

 // Gradient Reveal  source code https://greensock.com/forums/topic/27371-gradient-reveal-on-scroll/?tab=comments#comment-134126

 gsap.to(".headline", 5, { 
    '-webkit-mask-image': '-webkit-linear-gradient(top, rgba(0,0,0,1) 100%,  rgba(0,0,0,1) 100%, rgba(0,0,0,0) 150%, rgba(0,0,0,0) 0%)'});

 // ScrollTo Animations  source code: https://greensock.com/docs/v3/Plugins/ScrollToPlugin

 gsap.registerPlugin(ScrollToPlugin); 

 $(".scrolltop").click(function(e) {

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

// Detect Mobile Browser source code:    https://stackoverflow.com/questions/11381673/detecting-a-mobile-browser

function detectMob() {
  return ( ( window.innerWidth <= 1024 ) && ( window.innerHeight <= 1366 ) );
}

// Image Animations source code: https://greensock.com/forums/topic/27511-reveal-image-alternating-entrances-leftrightleftright/

gsap.registerPlugin(ScrollTrigger);
let imagesLeft = gsap.utils.toArray('.fromLeft'); 

 imagesLeft.forEach((item, index) => { 
 let timeLine = gsap.timeline({
   scrollTrigger:{
     trigger: item,
     toggleActions: "play reverse play reverse"
   }
 });
 timeLine.from(item, {
   x: -100,
   opacity: 0,
   duration: 1
 });
});

let imagesRight = gsap.utils.toArray('.fromRight'); 

 imagesRight.forEach((item, index) => { 
 let timeLine = gsap.timeline({
   scrollTrigger:{
     trigger: item,
     toggleActions: "play reverse play reverse"
   }
 });
 timeLine.from(item, {
   x: 100,
   opacity: 0,
   duration: 1
 });
});

// Text Animations 

let textRight = gsap.utils.toArray('.textRight');

textRight.forEach((item, index) => {

 let timeLine = gsap.timeline({
   scrollTrigger:{
     trigger: item,

     toggleActions: "play play play reverse"
   }
 });
 timeLine.from(item, { 
  y: 50,
  opacity: 0,
  duration: 3,
  ease: "power4"
 });
});

let reveal = gsap.utils.toArray('.reveal');

reveal.forEach((item, index) => {

 let timeLine = gsap.timeline({
   scrollTrigger:{
     trigger: item,
     toggleActions: "play reverse play reverse"
   }
 });
 timeLine.from(item, {
  duration: 2, 
  y: 100, 
  autoAlpha: 1, 
  ease: "expo", 
  overwrite: "auto"
 });
 });

 // Dark Mode Theme Switch and Save user selection in localStorage for their next visit source code: https://dev.to/ananyaneogi/create-a-dark-light-mode-switch-with-css-variables-34l8

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