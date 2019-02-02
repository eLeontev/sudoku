import React, { useState } from 'react'

import { Cell } from './cell'
import { EditableCell } from './editable-cell.component'

import { rows } from '../structures/rows'
import { initialGrid } from '../structures/grid'
import { generateGameFiledValues, matchValuesToGrid } from '../services/game.service'

let getInitialGrid = () => matchValuesToGrid(generateGameFiledValues(), initialGrid)

let renderCell = (cell, startEditCell, changeCellValue) => cell.isEditable 
    ? (
    <EditableCell
        key={cell.index}
        cell={cell} 
        startEditCell={startEditCell(cell.index)}
        changeCellValue={changeCellValue(cell.index)}
    />)
    : <Cell key={cell.index} value={cell.value} />

// TODO redo to simplify O(n) complexity
let endEditAllCells = (grid) => Object.entries(grid).reduce((grid, [index, cell]) => ({
    ...grid,
    [index]: {
        ...cell,
        isEdit: false,
    }
}), {})

export let Grid = () => {
    let [grid, changeGrid] = useState(getInitialGrid)

    let startEditCell = (index) => () => changeGrid({
        ...endEditAllCells(grid),
        [index]: {
            ...grid[index],
            value: null,
            isEdit: true,
        }
    })

    let changeCellValue = (index) => (value) => changeGrid({
        ...grid,
        [index]: {
            ...grid[index],
            isEdit: false,
            value,
        }
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