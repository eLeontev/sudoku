import { CELLS_AMOUNT } from '../constants/grid.constants'
import { rows, cols, subs } from './rows.structure'

let IS_NOT_DEFINED = -1

let getCellData = (value, entries) => Object.entries(entries).reduce((result, [entryValue, entryValues]) => result === IS_NOT_DEFINED 
    ? entryValues.indexOf(value) === IS_NOT_DEFINED ? result : entryValues.indexOf(value) 
    : result
, IS_NOT_DEFINED)

let getSub = (value) => Object.entries(subs).reduce((sub, [subValue, subValues]) => sub === IS_NOT_DEFINED 
    ? subValues.indexOf(value) === IS_NOT_DEFINED ? sub : Number(subValue) 
    : sub
, IS_NOT_DEFINED)

let createCell = (index, value = null, status = null) => ({
    index,
    // value,
    // status,
    row: getCellData(index, cols),
    col: getCellData(index, rows),
    sub: getSub(index),
    isEditable: Boolean(Math.random() > 0.5),
    isEdit: false,
}) 

export let initialGrid = new Array(CELLS_AMOUNT).fill('').map((empty, index) => createCell(index))
    .reduce((grid, cell) => ({
        ...grid,
        [cell.index]: cell,
    }), {})