const layers = document.querySelectorAll(".parallax-layer");
const layerPositions = [];

// Get initial positions of layers
layers.forEach(layer => {
    const rect = layer.getBoundingClientRect();
    layerPositions.push({
        x: rect.left,
        y: rect.top
    });
});

document.addEventListener("mousemove", parallax);

function parallax(e) {
    layers.forEach((layer, index) => {
        const speed = parseFloat(layer.getAttribute("data-depth"));
        const initialX = layerPositions[index].x;
        const initialY = layerPositions[index].y;

        const x = (initialX - e.pageX * speed) / 25;
        const y = (initialY - e.pageY * speed) / 25;

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
}