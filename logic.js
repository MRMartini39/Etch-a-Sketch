const container = document.querySelector("#container");
const button = document.querySelector("#setGrid");

button.addEventListener("click", () => {
    let gridSize = prompt("How many squares per side?");
    createGrid(gridSize);
})

function createGrid(gridSize) {
    removeGrid();

    if (gridSize > 100) {
        gridSize = 100;
    }

    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement("div");
        row.setAttribute("class", "row");
        for (let j = 0; j < gridSize; j++) {
            const pixel = document.createElement("div");
            pixel.setAttribute("class", "pixel");
            pixel.addEventListener("mouseover", () => {
                pixel.setAttribute("id", "black");
            })
    
            row.appendChild(pixel);
        }
        container.appendChild(row);
    }
}

function removeGrid() {
    const container = document.querySelector("#container");
    const children = Array.from(document.querySelectorAll(".row"));

    children.forEach((child) => {
        container.removeChild(child);

    });
}

createGrid(16);
