import React from 'react'

export let Cell = ({ cell }) => ( 
    <span onClick={() => console.log(cell)} className="cell">{cell.index}</span>
)
