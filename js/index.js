// Your code goes here

const buttonTags = document.querySelectorAll('.btn');

buttonTags.forEach((e) => {
    e.addEventListener('mouseover', () => {
    e.style.transform = "scale(1.5)";
    e.style.transition = "transform 1s";
});

e.addEventListener('mouseout', () => {
    e.style.transform = "scale(1)";
});
});


const destinationClass = document.querySelectorAll('.destination');

window.addEventListener("resize", () => {
    destinationClass.forEach((e) => {
        e.style.backgroundColor = "#FFFDDD";
        e.style.padding = "1rem"
    });
  });

const h4Tags = document.querySelectorAll("h4");
h4Tags.forEach((e) =>{
    e.addEventListener('dblclick', () => {
    e.style.backgroundColor = "blue";
    e.style.color = "white";
});
});

const containerTag = document.querySelector('body');
window.addEventListener('scroll', () => {
    containerTag.style.backgroundColor = "orange";
});
