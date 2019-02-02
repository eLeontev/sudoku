import { LINES_AMOUNT, SUB_FIELD_SIZE, SUB_OFFEST } from '../constants/grid.constants'

let createArray = (length) => (
    new Array(length).fill('').map((empty, index) => index)
)

let getSubOffset = (iteration) => (
    SUB_OFFEST * (SUB_FIELD_SIZE - Math.ceil((LINES_AMOUNT - iteration) / SUB_FIELD_SIZE))
)

export let LINE_ARRAY = createArray(LINES_AMOUNT)

export let SUB_ARRAY = createArray(SUB_FIELD_SIZE)

export let cols = LINE_ARRAY.reduce((cols, offset) => ({
    ...cols,
    [offset]: LINE_ARRAY.map((index) => index * LINES_AMOUNT + offset)
}), {})

export let rows = LINE_ARRAY.reduce((rows, offset) => ({
    ...rows,
    [offset]: LINE_ARRAY.map((index) => cols[index][offset]),
}), {})

export let subs = LINE_ARRAY.reduce((subs, iteration) => {
    SUB_ARRAY.map(step => {
        return SUB_ARRAY.map(offset => {
            subs[iteration] = [
                ...(subs[iteration] || []),
                (step * LINES_AMOUNT + offset + SUB_FIELD_SIZE * iteration) + getSubOffset(iteration)
            ];   
        })
    })

    return subs
}, {})
