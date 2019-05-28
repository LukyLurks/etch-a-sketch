requirejs(['lib-etchpad'], function(libEtchpad) {
  const defaultSize = 16;
  const grid = document.querySelector('#grid');
  let gridSize = defaultSize;

  libEtchpad.createGrid(grid, gridSize);
  libEtchpad.resizeCells(grid, gridSize);
});