export default class Grid {

  constructor(public gridSpecs : {
    gridColor: string,
    gridColumnNumber: number,
    gridGap: number,
    gridHorizontal: boolean,
    gridFullHeight: boolean,
    gridFullWidth: boolean,
    gridUnity: string,
    gridZIndex: number
  }) {}

  createGrid() {
    document.body.ondblclick = () => {

      // By default the grid is hidden
      if (document.querySelector(`grid`) !== null) document.querySelector(`grid`).remove()

      // On double click activate grid
      else {
        // Grid container creation
        const gridContainer = document.createElement(`grid`)

        // Grid container initial styles
        gridContainer.style.position = `fixed`
        gridContainer.style.display = `flex`

        // Change direction of the grid if set to horizontal
        this.gridSpecs.gridHorizontal == true ? gridContainer.style.flexDirection = `column` : gridContainer.style.flexDirection = `row`

        // Set px as unit mesure if nore is set
        if (this.gridSpecs.gridUnity == null) {
          this.gridSpecs.gridUnity = 'px'
        }

        // Set z-Index to -1 if there aren't any values set
        this.gridSpecs.gridZIndex == null ? gridContainer.style.zIndex = `-1` : gridContainer.style.zIndex = `${this.gridSpecs.gridZIndex}`

        // Set initial gap beetween columns
        gridContainer.style.gap = `${this.gridSpecs.gridGap}${this.gridSpecs.gridUnity}`

        // Sets the initial width and if there are margins left / right
        if (this.gridSpecs.gridFullWidth == null || this.gridSpecs.gridFullWidth == false) {
          gridContainer.style.width = `calc(100vw - ${this.gridSpecs.gridGap}${this.gridSpecs.gridUnity} * 2)`,
          gridContainer.style.left = `${this.gridSpecs.gridGap}${this.gridSpecs.gridUnity}`
        } else {
          gridContainer.style.width = `100%`
        }

        // Sets the initial height and if there are margins top / bottom
        if (this.gridSpecs.gridFullHeight == null || this.gridSpecs.gridFullWidth == false) {
          gridContainer.style.height = `calc(100vh - ${this.gridSpecs.gridGap}${this.gridSpecs.gridUnity} * 2)`
          gridContainer.style.top = `${this.gridSpecs.gridGap}${this.gridSpecs.gridUnity}`
        } else {
          gridContainer.style.height = `100%`
          gridContainer.style.top = `0`
        }

        // Grid container append
        document.body.appendChild(gridContainer)

        // Grid Columns creation
        let gridColumns = document.createElement(`column`)
        gridColumns.style.width = `100%`

        for (let i = 0; i < this.gridSpecs.gridColumnNumber; i++) {
          this.gridSpecs.gridColor == null ? gridColumns.style.backgroundColor = `#00000015` : gridColumns.style.backgroundColor = `${this.gridSpecs.gridColor}`
          gridContainer.appendChild(gridColumns.cloneNode(true))
        }
      }

    }
  }

}
