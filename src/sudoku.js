import React, { useReducer } from 'react'

import { components } from './components/index' 

import { cols, rows, subs } from './structures/rows'

console.log(cols)
console.log(rows)
console.log(subs)

let { Actions, Grid } = components

export let Sudoku = () => {
    return (
        <div>
            <Grid />
            <Actions />
        </div>
    )
}

