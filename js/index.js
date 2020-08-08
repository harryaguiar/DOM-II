// Your code goes here

const funBus = document.querySelectorAll('.btn');

funBus.forEach((e) => {
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

h4Tags

