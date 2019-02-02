import { SUB_FIELD_SIZE, LINES_AMOUNT, GRID_CELL_VALUE_OFFSET } from '../constants/grid.constants'
import { LINE_ARRAY } from '../structures/rows'

let size = [0, 1, 2]
let subs = [[0,1,2], [3,4,5], [6,7,8]]
let MAX_RANDOM_REPEATS = 100

let transponsGrid = (grid) => LINE_ARRAY.map(row => LINE_ARRAY.map(cell => grid[cell][row]))

let swapSmalRow = (grid, rowAIndex, rowBIndex) => LINE_ARRAY.map((index) => {
    if (index === rowAIndex || index === rowBIndex) {
        return index === rowAIndex
            ? [...grid[rowBIndex]]
            : [...grid[rowAIndex]]
    }

    return [...grid[index]]    
})

let getSwapRow = (grid, i, from, to) => [...grid[subs[to][subs[from].indexOf(i)]]]
let swapSubRow = (grid, subAIndex, subBIndex) => LINE_ARRAY.map((index) => {
    if (subs[subAIndex].indexOf(index) !== -1) {
        return getSwapRow(grid, index, subAIndex, subBIndex)
    }

    if (subs[subBIndex].indexOf(index) !== -1) {
        return getSwapRow(grid, index, subBIndex, subAIndex)    
    }

    return [...grid[index]]    
})

let getRepeatsAmount = (min = 10, max = MAX_RANDOM_REPEATS) => Math.floor(min + Math.random() * (max + 1 - min))

let getRandomSub = () => subs[Math.floor(Math.random() * SUB_FIELD_SIZE)]

let getRandomParts = (arrayOfValues) => {
    let randomSub = getRandomSub()
    let ranodmIndex = Math.floor(Math.random() * randomSub.length)
    let from = arrayOfValues[ranodmIndex]

    let leftValues = arrayOfValues.filter((value) => value !== from)
    ranodmIndex = Math.floor(Math.random() * leftValues.length)

    return [from, leftValues[ranodmIndex]]
}

export let generateGameFiledValues = () => {
    let baseGrid = LINE_ARRAY.map(index => LINE_ARRAY.map(value => Math.floor(
        (index * SUB_FIELD_SIZE + index / SUB_FIELD_SIZE + value) % LINES_AMOUNT + GRID_CELL_VALUE_OFFSET))
    )

    return LINE_ARRAY.reduce((grid) => {
        return new Array(getRepeatsAmount()).fill('').reduce((grid) => {
            if (getRepeatsAmount() % 2) {
                return swapSubRow(swapSmalRow(transponsGrid(grid), ...getRandomParts(getRandomSub())), ...getRandomParts(size))
            }
            
            return swapSmalRow(swapSubRow(transponsGrid(grid), ...getRandomParts(size)), ...getRandomParts(getRandomSub()))
        }, grid)
    }, baseGrid)
}

export let matchValuesToGrid = (gridValues, grid) => gridValues.reduce((grid, values, row) => {
    values.forEach((value, index) => {
        grid[row * LINES_AMOUNT + index] = {
            ...grid[row * LINES_AMOUNT + index],
            value,
        }
    })

    return {...grid}
}, grid)