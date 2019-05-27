define(function() {

  const createGrid = function(grid, size) {
    let cell = undefined;
    for(let i = 0; i < size; i++) {
      for(let j = 0; j < size; j++) {
        cell = document.createElement('div');
        cell.classList.add('cell');
        grid.appendChild(cell);
      }
      grid.appendChild(document.createElement('br'));
    }
    return grid;
  }

  return {
    createGrid
  }
});