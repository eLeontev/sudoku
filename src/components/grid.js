import React from 'react'

import { Cell } from './cell'
import { rows } from '../structures/rows'
import { grid } from '../structures/grid'
import { LINES_AMOUNT } from '../constants/grid.constants'

export let Grid = () => {
    let selectCell = () => null
    let getHelp = () => null
    let setCellValue = () => null
    
    return ( 
        <div className="grid">
            {Object.entries(rows).map(([key, row]) => (
                <div key={key} className="row">
                    {row.map(index => <Cell key={index} cell={grid[index]} />)}
                </div>
            ))}
        </div>
    )
}