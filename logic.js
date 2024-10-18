const container = document.querySelector("#container");

for (let i = 0; i < 16; i++) {
    const row = document.createElement("div");
    row.setAttribute("class", "row");
    for (let j = 0; j < 16; j++) {
        const pixel = document.createElement("div");
        pixel.setAttribute("class", "pixel");
        pixel.addEventListener("mouseover", () => {
            pixel.setAttribute("id", "black");
        })

        row.appendChild(pixel);
    }
    container.appendChild(row);
}
