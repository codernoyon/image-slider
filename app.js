const images = [
    "./images/1.png",
    "./images/2.png",
    "./images/3.png",
    "./images/4.png",
    "./images/5.png",
    "./images/6.png",
    "./images/7.png",
    "./images/8.png",
    "./images/9.png",
    "./images/10.png"
];

const sliderImage = document.getElementById("slider-img");

let imageIndex = 0;
setInterval(() => {
    if (imageIndex >= images.length) {
        imageIndex = 0
    }
    const imageUrl = images[imageIndex];
    // console.log(imageUrl);
    sliderImage.src = imageUrl;
    imageIndex++;
}, 1500);