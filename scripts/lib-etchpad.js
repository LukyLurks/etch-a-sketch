define(function() {

  const purgeGrid = function(grid) {
    while(grid.firstChild) {
      grid.removeChild(grid.firstChild);
    }
  }

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
  
  // Computes single cell size based on available window space
  const getCellSize = function(grid, gridSize) {
    let availableWidth = 0.8 * window.innerWidth;
    let availableHeight = 0.8 * window.innerHeight;
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
    // removes unwanted space between rows
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

  // Add listeners to color cells on hover
  const enableDrawing = function(grid) {
    Array.from(grid.children).forEach((child) => {
      if(child.classList.contains('cell')) {
        child.addEventListener('mouseenter', (e) => {
          const color = document.querySelector('#color').textContent;
          if(color === 'random') {
            e.target.style.backgroundColor = getRandomRGB();
          } else {
            e.target.style.backgroundColor = color;
          }
        });
      }
    });
  }

  // Creates a usable blank grid
  const initGrid = function() {
    const grid = document.querySelector('#grid');
    const gridSize = +(document.querySelector('#gridSize').value);
    purgeGrid(grid);
    createGrid(grid, gridSize);
    resizeCells(grid, gridSize);
    enableDrawing(grid);
    return grid;
  }

  const initClearButton = function(clearButton) {
    clearButton.addEventListener('click', () => {
      const grid = document.querySelector('#grid');
      Array.from(grid.children).forEach((child) => {
        if(child.classList.contains('cell')) {
          child.style.backgroundColor = 'white';
        }
      });
    });
  }

  // Creates a new grid with the specified size
  const initApplySize = function(applySizeButton, applySizeInput) {
    applySizeButton.addEventListener('click', initGrid);
    applySizeInput.addEventListener('keydown', (e) => {
      if(e.key !== 'Enter') return;
      initGrid();
    });
  }

  const initColorToggle = function(colorToggle, color) {
    colorToggle.addEventListener('click', (e) => {
      if(color.textContent === 'black') {
        color.textContent = 'random';
      } else {
        color.textContent = 'black'
      }
    });
  }

  // Add listeners to all buttons and fields
  const initUI = function() {
    const clearButton = document.querySelector('#clear');
    const applySizeButton = document.querySelector('#applyGridSize');
    const colorToggle = document.querySelector('#colorToggle');
    const color = document.querySelector('#color');
    const applySizeInput = document.querySelector('#gridSize');
    initClearButton(clearButton);
    initApplySize(applySizeButton, applySizeInput);
    initColorToggle(colorToggle, color);
  }

  return {
    initUI,
    initGrid
  }
});