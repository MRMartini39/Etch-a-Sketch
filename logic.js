const container = document.querySelector("#container");

for (let i = 0; i <(16 * 2); i++) {
    const pixel = document.createElement("div");
    pixel.setAttribute("id", "pixel");
    container.appendChild(pixel);
}