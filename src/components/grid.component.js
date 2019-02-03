import React, { useReducer, useMemo } from 'react'

import { Cell } from './not-editable-cell.component'
import { EditableCell } from './editable-cell.component'

import { rows } from '../structures/rows.structure'

import { gridReducer } from '../reducers/grid.reducer'
import { performGridActions } from '../actions/grid.actions'

import { CHANGE_CELL_VALUE_ACTION, START_EDIT_CELL_ACTION } from '../constants/grid.constants'

let renderCell = (cell, startEditCell, changeCellValue) => cell.isEditable 
    ? (
    <EditableCell
        key={cell.index}
        cell={cell} 
        startEditCell={startEditCell(cell.index)}
        changeCellValue={changeCellValue(cell.index)}
    />)
    : <Cell key={cell.index} value={cell.value} />

export let Grid = ({ action, initialGrid }) => {
    let [grid, dispatch] = useReducer(gridReducer, initialGrid)
    useMemo(() => performGridActions(action, dispatch), [action])

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