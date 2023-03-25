const videos = document.querySelector(".videos"); 
const singleVideo = document.querySelectorAll(".single-video");
const videoLinks = [
    "https://youtu.be/HnElxo1lghU",
    "https://youtu.be/nSB6sOwCY3A",
    "https://youtu.be/TAlKhARUcoY",
    "https://youtu.be/SO__VQZirJ4",
    "https://youtu.be/B8197NUQ0LE",
];


setTimeout(() => {
    videos.scrollTo(1000, 0);
}, 100);

// horizontal scrolling using mousewheel
function scrollH(e){
    // Prevent scroll default
    e.preventDefault();
    e = window.event || e;
    let delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
    document.querySelector('.videos').scrollLeft -= (delta * 60);
}
if(document.querySelector('.videos').addEventListener){
    document.querySelector('.videos').addEventListener('mousewheel', scrollH, false);
    document.querySelector('.videos').addEventListener('DOMMouseScroll', scrollH, false);
}


// scrolling with grab and drag mouse
let isDown = false;
let startX;
let scrollLeft;

videos.addEventListener('mousedown', (e) => {
    isDown = true;
    videos.classList.add('active');
    startX = e.pageX - videos.offsetLeft
    scrollLeft = videos.scrollLeft;
});

videos.addEventListener('mouseleave', () => {
    isDown = false;
    videos.classList.remove('active');

    setTimeout(() => {
        singleVideo.forEach((video, index) => {
            video.setAttribute("href", videoLinks[index]);
        });
    }, 1);
});

videos.addEventListener('mouseup', () => {
    isDown = false;
    videos.classList.remove('active');

    setTimeout(() => {
        singleVideo.forEach((video, index) => {
            video.setAttribute("href", videoLinks[index]);
        });
    }, 1);
});

videos.addEventListener('mousemove', (e) => {
    if(!isDown) {
        return;
    }
    e.preventDefault();
    
    const x = e.pageX - videos.offsetLeft;
    const walk = x - startX;
    videos.scrollLeft = scrollLeft - walk;

    singleVideo.forEach((video) => {
        video.removeAttribute("href");
    });
});


// click next and prev to change image
const screenshots = document.querySelectorAll(".screenshot");
const left = document.querySelector(".arrow-left");
const right = document.querySelector(".arrow-right");
let i = 0;

setInterval(() => {
    plusImage(1);
}, 2500);

function plusImage(offset) {
    changeImage(offset);
}

function changeImage(offset) {
    let j = i;
    i = i + offset;
    if(i >= screenshots.length) {
        i = 0;
    } else if(i < 0) {
        i = screenshots.length - 1;
    }
    console.log(i);
    screenshots[j].classList.remove("screenshot-active");
    screenshots[i].classList.add("screenshot-active");
}


// sidebar button
const menuBtn = document.querySelector("#menu-btn");
const sidebar = document.querySelector(".sidebar")

menuBtn.addEventListener("click", () => {
    sidebar.classList.add("sidebar-show");
});

document.querySelector(".contents").addEventListener("click", () => {
    sidebar.classList.remove("sidebar-show");
});

document.querySelector(".footer").addEventListener("click", () => {
    sidebar.classList.remove("sidebar-show");
});