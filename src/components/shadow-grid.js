import React from 'react'

import { SUB_ARRAY } from '../structures/rows'

export let ShadowGrid = () => (
    <div className="shadow_grid">
        {SUB_ARRAY.map((empty, key) => (
            <div key={key} className="shadow_row">
                {SUB_ARRAY.map((empty, key) => (
                    <span key={key} className="shadow_cell"></span>
                ))}
            </div>
        ))}
    </div>
)