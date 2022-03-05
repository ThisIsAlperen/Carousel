
// to use the forEach method for the HTMLCollection
NodeList.prototype.forEach = HTMLCollection.prototype.forEach = Array.prototype.forEach;

// constants
const carouselArea = document.getElementById('carouselArea')
const carousel = document.getElementById('carousel')
const left = document.getElementById('leftArrow')
const right = document.getElementById('rightArrow')


let slide = 0; // index number of the shown img
var width = 0; // width of the shown img
let A = [];

// to get the width of all the imgs for slider
// loading delay, otherwise it will get 0 for all
setTimeout(function () {
    carousel.children.forEach(function (child) {
        console.log(child)
        A.push(child.offsetWidth)
    })
    carouselArea.style.width = A[slide] + 'px' // arange the first img width as the carousel area width
}, 1000)

// when right arrow clicked;
right.onclick = function (e) {
    // it will not run in case there is no img on the rigth side
    if (slide < carousel.children.length - 1) {
        // it will set the width by adding the width of shown img
        width = width + A[slide] + 10 //+10 for margin
        slide = slide + 1; // to get the shown img for next turn
        Slide()
    }
}

// when left arrow clicked
left.onclick = function (e) {
    // it will not run in case there is no img on the left side
    if (slide > 0) {
        //it will set the width by substracting the width of shown img
        width = width - A[slide - 1] - 10
        slide = slide - 1;
        Slide()
    }
}

function Slide() {
    carousel.style.left = "-" + width + 'px'; // arrange the img
    carouselArea.style.width = A[slide] + 'px' // arrange the width
}