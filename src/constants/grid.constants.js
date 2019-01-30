export let CELLS_AMOUNT = 81 // 9 * 9
export let LINES_AMOUNT = Math.sqrt(CELLS_AMOUNT) // 9
export let SUB_FIELD_SIZE = Math.sqrt(LINES_AMOUNT) // 3
export let SUB_OFFEST = CELLS_AMOUNT / SUB_FIELD_SIZE - LINES_AMOUNT // 18
