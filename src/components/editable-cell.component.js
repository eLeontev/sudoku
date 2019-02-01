import React from 'react'

import { InputCell } from './input-cell.component'

let Cell = ({ value, onClick }) => ( 
    <span onClick={onClick} className="cell">{value}</span>
)

export let EditableCell = ({ cell, startEditCell, changeCellValue }) => {
    let { isEdit, value } = cell

    return isEdit
        ? <InputCell value={value || ''} onChange={({target: { value }}) => changeCellValue(value)} />
        : <Cell onClick={startEditCell} value={value} />
}
