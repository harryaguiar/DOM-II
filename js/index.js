// Your code goes here

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
        e.style.padding = "1rem"
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


const containerTag = document.querySelector('body');
// event 5 - SCROLL
window.addEventListener('scroll', () => {
    containerTag.style.backgroundColor = "orange";
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

// #5 MOUSEENTER
let footerList = document.querySelector(".footer");

footerList.addEventListener("mouseenter", function( event ) {   
  event.target.style.color = "white";
  setTimeout(function() {
    event.target.style.color = "white";
  }, 300);
}, false);
