function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function gridMaker(rows = 16) {
  const gridContainer = document.querySelector('.grid-container');
  gridContainer.replaceChildren();

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < rows; j++) {
      const cell = document.createElement('div');
      cell.className = 'grid-item';

      cell.style.flex = `0 0 ${100 / rows}%`;

      gridContainer.appendChild(cell);
      cell.addEventListener('mouseover', () => {
        cell.style.background = getRandomColor();
      });
    }
  }
}


function gridSizer() {
  let gridSize = prompt("Enter grid size from 1 to 100: ");
  return gridSize;
}


const resizeBtn = document.querySelector(".btn");
gridMaker();

resizeBtn.addEventListener("click", (event) => {
  let gridSize = gridSizer();
  while (gridSize < 1 || gridSize > 100) {
    alert("Please enter a valid size between 1 and 100.");
    gridSize = gridSizer();
  }
  gridMaker(gridSize);
});

//this is the bug branch