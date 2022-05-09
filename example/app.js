import grid from './grid.min'

const projectGrid = new grid({ 
  gridColor: 'grey',
  gridColumnNumber: 12,
  gridGap: 10,
  gridHorizontal: false,
  gridFullHeight: true,
  gridFullWidth: true,
  gridZIndex: 1
})

projectGrid.createGrid()
