import grid from './grid.ts'

const projectGrid = new grid({ 
  gridColor: '#0c0c0c',
  gridColumnNumber: 12,
  gridGap: 10,
  gridHorizontal: false,
  gridFullHeight: false,
  gridFullWidth: false,
  gridZIndex: 1
})

projectGrid.createGrid()
