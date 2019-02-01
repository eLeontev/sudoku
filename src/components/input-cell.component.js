import React from 'react'

export let InputCell = ({ value, onChange }) => ( 
    <input className="cell cell_input" autoFocus value={value} onChange={onChange} />
)
