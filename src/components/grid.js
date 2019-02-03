import React, { useReducer } from 'react'

import { Cell } from './cell'
import { EditableCell } from './editable-cell.component'

import { rows } from '../structures/rows'
import { initialGrid } from '../structures/grid'
import { generateGameFiledValues, fromFiledBasedToComplexity } from '../services/game.service'

import { gridReducer } from '../reducers/grid.reducer'
import { CHANGE_CELL_VALUE_ACTION, START_EDIT_CELL_ACTION } from '../constants/grid.constants'

let getInitialGrid = () => fromFiledBasedToComplexity(generateGameFiledValues(), initialGrid)

let renderCell = (cell, startEditCell, changeCellValue) => cell.isEditable 
    ? (
    <EditableCell
        key={cell.index}
        cell={cell} 
        startEditCell={startEditCell(cell.index)}
        changeCellValue={changeCellValue(cell.index)}
    />)
    : <Cell key={cell.index} value={cell.value} />

export let Grid = () => {
    let [grid, dispatch] = useReducer(gridReducer, getInitialGrid())

    let startEditCell = (index) => () => dispatch({
        type: START_EDIT_CELL_ACTION,
        payload: {
            index,
        },
    })

    let changeCellValue = (index) => (value) => dispatch({
        type: CHANGE_CELL_VALUE_ACTION,
        payload: {
            index,
            value,
        },
    })

    return ( 
        <div className="grid">
            {Object.entries(rows).map(([key, row]) => (
                <div key={key} className="row">
                    {row.map(index => renderCell(
                        grid[index], 
                        startEditCell,
                        changeCellValue
                    ))}
                </div>
            ))}
        </div>
    )
}