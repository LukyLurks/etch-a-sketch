requirejs(['lib-etchpad'], function(libEtchpad) {
  const defaultSize = 16;
  const grid = document.querySelector('#grid');
  const defaultColor = 'random';

  let gridSize = defaultSize;
  let color = defaultColor;

  libEtchpad.createGrid(grid, gridSize);
  libEtchpad.resizeCells(grid, gridSize);
  libEtchpad.enableDrawing(grid, color);
});