const firstElement = document.querySelector('.img:nth-child(1)')
const allElements = document.querySelectorAll('.img');
console.log(allElements)
firstElement.addEventListener('mousemove', move)

function move(e) {
    var rect = e.target.getBoundingClientRect();
    var width = rect.width;
    var height = rect.height;
    var positionX = e.clientX - (width / 2);
    var positionY = e.clientY - (height / 2);
    var actualX = (positionX / width) * 15
    var actualY = (positionY / width) * 15
    allElements.forEach(e => e.style.transform = `translate3d(${actualX}px, ${actualY}px, 0)`)
}