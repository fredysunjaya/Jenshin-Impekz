const homeImage = document.querySelector("#home-images");
let images = document.querySelectorAll(".home-image");

const eventImage = document.querySelector("#event-images");
let eventImages = document.querySelectorAll(".event-image");

let i = 1;
let j = 1;

console.log(images.length, eventImages.length);

setInterval(changeImageJumbotron, 3000);

setInterval(changeImageEvent, 3000);

function changeImageJumbotron() {
    let activeImg = document.querySelector("[data-active]");
    if(i >= images.length) {
        i = 0;
    }
    images[i].dataset.active = true;
    delete activeImg.dataset.active;
    i++;
}

function changeImageEvent() {
    let activeImg = document.querySelector("[data-active2]");
    if(j >= eventImages.length) {
        j = 0;
    }
    eventImages[j].dataset.active2 = true;
    delete activeImg.dataset.active2;
    j++;
}