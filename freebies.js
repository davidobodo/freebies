const firstElement = document.querySelector('.scene')
const secondElement = document.querySelector('.details')
const thirdElement = document.querySelector('.footer')
const firstSet = document.querySelectorAll(".img[data-depth='1']");
const secondSet = document.querySelector(".img[data-depth='2']");
const thirdSet = document.querySelector(".img[data-depth='3']");
const fourthSet = document.querySelector(".img[data-depth='4']");
const fifthSet = document.querySelector(".img[data-depth='5']");
const sixthSet = document.querySelectorAll(".img[data-depth='6']");
const seventhSet = document.querySelectorAll(".img[data-depth='7']");

var width = document.documentElement.clientWidth;
var height = document.documentElement.clientHeight;
var positionX = e.clientX - (width / 2);
var positionY = e.clientY - (height / 2);
var distanceX = positionX / width;
var distanceY = positionY / width;

firstElement.addEventListener('mousemove', move)
secondElement.addEventListener('mousemove', move)
thirdElement.addEventListener('mousemove', move)

function move(e) {

    var actualX1 = (positionX / width) * 100
    var actualY1 = (positionY / width) * 100
    var actualX2 = (positionX / width) * 70
    var actualY2 = (positionY / width) * 70
    var actualX3 = (positionX / width) * 150
    var actualY3 = (positionY / width) * 150
    var actualX4 = (positionX / width) * 30
    var actualY4 = (positionY / width) * 30
    var actualX5 = (positionX / width) * 35
    var actualY5 = (positionY / width) * 35
    var actualX6 = (positionX / width) * 40
    var actualY6 = (positionY / width) * 40
    var actualX7 = (positionX / width) * 45
    var actualY7 = (positionY / width) * 45
    firstSet.forEach(e => e.style.transform = `translate3d(${-actualX1}px, ${-actualY1}px, 0)`)
    secondSet.style.transform = `translate3d(${-actualX2}px, ${-actualY2}px, 0)`
    thirdSet.style.transform = `translate3d(${-actualX3}px, ${-actualY3}px, 0)`
    fourthSet.style.transform = `translate3d(${-actualX4}px, ${-actualY4}px, 0)`
    fifthSet.style.transform = `translate3d(${-actualX5}px, ${-actualY5}px, 0)`
    sixthSet.forEach(e => e.style.transform = `translate3d(${-actualX6}px, ${-actualY6}px, 0)`)
    seventhSet.forEach(e => e.style.transform = `translate3d(${-actualX7}px, ${-actualY7}px, 0)`)
}