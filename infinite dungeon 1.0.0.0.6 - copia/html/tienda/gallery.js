let sliderGallery = document.querySelector(".sliderGallery");

let images = sliderGallery.querySelectorAll("img");
let index = 0;

setInterval(function() {
    let percentage = index * -100;
    sliderGallery.style.transform = "translateX(" + percentage + "%)";
    index++;
    if (index >= images.length) {
        index = 0;
    }
}, 3000);

