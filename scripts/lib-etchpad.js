define(function() {

  const createGrid = function(grid, gridSize) {
    let cell = undefined;
    for(let i = 0; i < gridSize; i++) {
      for(let j = 0; j < gridSize; j++) {
        cell = document.createElement('div');
        cell.classList.add('cell');
        grid.appendChild(cell);
      }
      grid.appendChild(document.createElement('br'));
    }
    return grid;
  }
  
  const getCellSize = function(grid, gridSize) {
    let availableWidth = grid.parentNode.clientWidth;
    let availableHeight = grid.parentNode.clientHeight;
    let shortest = Math.min(availableWidth, availableHeight);
    return Math.floor(shortest / gridSize);
  }

  const resizeCells = function(grid, gridSize) {
    newSize = getCellSize(grid, gridSize);
    Array.from(grid.children).forEach((child) => {
      if(child.classList.contains('cell')) {
        child.style.width = newSize + 'px';
        child.style.height = newSize + 'px';
      }
    });
    // removes space between rows
    grid.style.lineHeight = 0;
    return newSize;
  }

  // Random integer from 0 included to n excluded
  const getRandomInt = function(n) {
    return Math.floor(Math.random() * Math.floor(n));
  }

  const getRandomRGB = function() {
    let red = getRandomInt(255);
    let green = getRandomInt(255);
    let blue = getRandomInt(255);
    return `rgb(${red}, ${green}, ${blue})`;
  }

  const enableDrawing = function(grid, color) {
    Array.from(grid.children).forEach((child) => {
      if(child.classList.contains('cell')) {
        child.addEventListener('mouseover', (e) => {
          if(color === 'random') {
            e.target.style.backgroundColor = getRandomRGB();
          } else {
            e.target.style.backgroundColor = color;
          }
        });
      }
    });
  }

  return {
    createGrid,
    getCellSize,
    resizeCells,
    getRandomInt,
    getRandomRGB,
    enableDrawing
  }
});