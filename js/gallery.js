"use strict";

const pathSlides = "image/gallery/slider/";
const countImages = 3;
let currentSlide = 0;
let slider = document.getElementById("slider");

for (let i = 1; i <= countImages; i++) {
    let image = document.createElement('div');
    image.className = "image " + (i === (currentSlide + 1)  ? "active" : "");
    let direct = pathSlides + i + ".png";
    image.innerHTML = "<img src='" + direct + "' alt='" + i + "image' />"
    slider.appendChild(image);
}

setInterval(function () {
    toogleSlide(1);
}, 5000);

function toogleSlide(n) {
    currentSlide = currentSlide + n;
    if (currentSlide < 0) {
        currentSlide = countImages - 1;
    }
    if (currentSlide >= countImages) {
        currentSlide = 0;
    }
    displaySlide(currentSlide);
}

function displaySlide(n) {
    let images = document.getElementsByClassName("image");
    for (let i = 0; i < images.length; i++) {
        images[i].classList.remove('active');
    }
    images[n].classList.add('active');
}
