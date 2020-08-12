// Your code goes here
import { gsap } from "gsap";

const buttonTags = document.querySelectorAll('.btn');

buttonTags.forEach((e) => {
    // event 1 - MOUSEOVER
    e.addEventListener('mouseover', () => {
    e.style.transform = "scale(1.5)";
    e.style.transition = "transform 1s";
});

// event 2 - MOUSEOUT
e.addEventListener('mouseout', () => {
    e.style.transform = "scale(1)";
});
});


const destinationClass = document.querySelectorAll('.destination');

// event 3 - RESIZE
window.addEventListener("resize", () => {
    destinationClass.forEach((e) => {
        e.style.backgroundColor = "#FFFDDD";
        e.style.padding = "1rem";
        e.stopPropagation();
    });
  });

const h4Tags = document.querySelectorAll("h4");
h4Tags.forEach((e) =>{
    // event 4 - DBLCLICK
    e.addEventListener('dblclick', () => {
    e.style.backgroundColor = "blue";
    e.style.color = "white";
    
});
});


const bodyTag = document.querySelector('body');
// event 5 - SCROLL
window.addEventListener('scroll', () => {
    bodyTag.style.backgroundColor = "orange";
});

// event 6 - AUXCLICK
let h1Tag = document.querySelector('h1');

function random(number) {
  return Math.floor(Math.random() * number);
}

function randomColor() {
    return `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
}

h1Tag.onclick = function() {
    h1Tag.style.backgroundColor = randomColor();
};

h1Tag.onauxclick = function(e) {
  e.preventDefault();
  h1Tag.style.color = randomColor();
}

h1Tag.oncontextmenu = function(e) {
  e.preventDefault();
}


// event 7 - ONLOAD
let onLoad = document.querySelectorAll(".nav-link");
for(let i=0; i<onLoad.length; i++)
{onLoad[i].addEventListener("onload", function(){
})}
console.log('Navigation bar has loaded!', onLoad);


// event 8 - MOUSEENTER
var enterEventCount = 0;
var leaveEventCount = 0;
const mouseTarget = document.querySelector('footer');

mouseTarget.addEventListener('mouseenter', e => {
  mouseTarget.style.border = '10px dotted black';
  enterEventCount++;
});

// event 9 - MOUSELEAVE
mouseTarget.addEventListener('mouseleave', e => {
    mouseTarget.style.border = '2px dashed #C0C0C0';
    leaveEventCount++;
  });

// event 10 - Context Menu
noContext = document.querySelectorAll('.text-content');

noContext.forEach((el) => {
    el.addEventListener('contextmenu', e => {
  e.preventDefault();
})
});



// Stop the navigation items from refreshing the page by using preventDefault()
const navTag = document.querySelectorAll('.nav-link');

navTag.forEach((el) => {
    el.addEventListener('click', e => {
        e.preventDefault();
    })
});

// Nest two similar events somewhere in the site and prevent the event propagation properly. Remember not all event types bubble.

const headerTag = document.querySelectorAll('.intro');

headerTag.forEach((el) => {
    el.addEventListener('click', e => {
    
    e.target.style.backgroundColor = "green";
    
    });
});

CustomEase.create("hop", "M0,0.005 C0,0.005 0.056,0.445 0.175,0.445 0.294,0.445 0.332,0 0.332,0 0.332,0 0.414,1 0.671,1 0.991,1 1,0 1,0");

gsap.to(".content-pick", {duration: 2,  ease: "hop", scale:1.5, rotation:30 });


gsap.to('.logo-heading', {
    duration: 1,
    x: 200,
    scale: 2
  })