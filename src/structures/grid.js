import { CELLS_AMOUNT } from '../constants/grid.constants'

export let grid = new Array(CELLS_AMOUNT).fill('').map((empty, index) => ({
    index, // index
    row: 1, // row index 
    col: 1, // col index
    sub: 1, // sub-field index
    value: null,
    type: null,
}))