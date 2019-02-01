import React, { useReducer } from 'react'

import { components } from './components/index' 

let { Actions, Grid } = components

export let Sudoku = () => {
    return (
        <div>
            <Grid />
            <Actions />
        </div>
    )
}

