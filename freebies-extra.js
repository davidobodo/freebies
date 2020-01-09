const CLIENT_WIDTH = document.documentElement.clientWidth;
const CLIENT_HEIGHT = document.documentElement.clientHeight;
const DISPLACEMENT_VALUES = [100, 70, 150, 30, 35, 40, 45];
// const DISPLACEMENT_VALUES = new Map([
//     ['1', 100],
//     ['2', 70],
//     ['3', 150],
//     ['4', 30],
//     ['5', 35],
//     ['6', 40],
//     ['7', 45],
// ])

const elements = document.querySelectorAll('[data-depth]');

const handleMouseMove = (event) => {
    elements.forEach(o => {
        const { x, y } = computeDisplacement(event, o);
        updateStyle(o, x, y);
    })
};

const computeDisplacement = (event, element) => {
    const { clientX: mouseX, clientY: mouseY } = event;

    const displacementDepth = element.dataset.depth;
    const displacementValue = DISPLACEMENT_VALUES[Number(displacementDepth) - 1];
    // const displacementValue = DISPLACEMENT_VALUES.get(displacementDepth);

    const x = mouseX * displacementValue / CLIENT_WIDTH;
    const y = mouseY * displacementValue / CLIENT_HEIGHT;

    return { x, y };
};

const updateStyle = (element, x, y) => {
    element.style.transform = `translate3d(${-x}px, ${-y}px, 0)`
}

document.addEventListener('mousemove', handleMouseMove);