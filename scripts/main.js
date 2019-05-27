requirejs(['lib-etchpad'], function(libEtchpad) {
  const defaultSize = 16;
  const grid = document.querySelector('#grid');

  libEtchpad.createGrid(grid, defaultSize);
});