import React, { useState } from 'react'

import { components } from './components/index' 
import { getInitialGrid } from './services/game.service'

let { Actions, Grid } = components

export let Sudoku = () => {
    let [action, setAction] = useState({})

    return (
        <div>
            <Grid initialGrid={getInitialGrid()}  action={action} />
            <Actions setAction={setAction} />
        </div>
    )
}
