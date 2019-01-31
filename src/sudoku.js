import React, { useReducer } from 'react'

import { components } from './components/index' 
import { cols, rows, subs, SUB_ARRAY } from './structures/rows'

let { Actions, Grid, ShadowGrid } = components

export let Sudoku = () => {
    return (
        <div>
            <ShadowGrid />
            <Grid />
            <Actions />
        </div>
    )
}

