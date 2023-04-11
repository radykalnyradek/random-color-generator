const containerEl = document.querySelector(".container");

for (i = 0; i < 30; i++) {
  const colorContainerEl = document.createElement("div");
  colorContainerEl.classList.add("color-container");
  containerEl.appendChild(colorContainerEl);
}

const containerElements = document.querySelectorAll(".color-container");

function generateColors() {
  containerElements.forEach((colorContainer) => {
    const newColorCode = randomColor();
    colorContainer.innerText = "#" + newColorCode;
    colorContainer.style.backgroundColor = "#" + newColorCode;
  });
}

function randomColor() {
  const chars = "0123456789abcdef";
  const colorCodeLength = 6;
  let color = "";
  for (i = 0; i < colorCodeLength; i++) {
    const randomNum = Math.floor(Math.random() * chars.length);
    color += chars[randomNum];
  }
  return color;
}

generateColors();
