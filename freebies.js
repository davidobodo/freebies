const firstSet = document.querySelectorAll('div[data-depth="1"]')
firstSet.forEach(elem => elem.addEventListener("mousemove", move))

function move(e){
    console.log(e)
}