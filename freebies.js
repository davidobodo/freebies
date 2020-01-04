const firstElement = document.querySelector('.img:nth-child(1)')
firstElement.addEventListener('mousemove', move)

function move(e) {
    var rect = e.target.getBoundingClientRect();
    var width = rect.width;
    var height = rect.height;
    var positionX = e.clientX - (width / 2);
    var positionY = e.clientY - (height / 2);
    firstElement.style.transform = `translate3d(${positionX}px, ${positionY}px, 0)`;
}