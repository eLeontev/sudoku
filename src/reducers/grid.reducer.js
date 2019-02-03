import {
    START_EDIT_CELL_ACTION,
    CHANGE_CELL_VALUE_ACTION
} from '../constants/grid.constants'

let endEditAllCells = (grid) => Object.entries(grid).reduce((grid, [index, cell]) => ({
    ...grid,
    [index]: {
        ...cell,
        isEdit: false,
    }
}), {})

export let gridReducer = (grid, {type, payload}) => {
    let { index, value } = payload
    
    switch (type) {
        case START_EDIT_CELL_ACTION: {
            return {
                ...endEditAllCells(grid),
                [index]: {
                    ...grid[index],
                    value: null,
                    isEdit: true,
                }
            }
        }
        case CHANGE_CELL_VALUE_ACTION: {
            return {
                ...grid,
                [index]: {
                    ...grid[index],
                    isEdit: false,
                    value,
                }
            }
        }
        default:
            return state
    }
}