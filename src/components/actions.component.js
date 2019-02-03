import React from 'react'
import { START_NEW_GAME_ACTION } from '../constants/grid.constants';

export let Actions = ({ setAction }) => (
    <div>
        Actions: <br/>
        <button onClick={() => setAction({ type: START_NEW_GAME_ACTION })}>start new game</button>
    </div>
)
