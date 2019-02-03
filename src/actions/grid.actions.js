import {
    START_NEW_GAME_ACTION,
} from '../constants/grid.constants'

let gridActions = {
    START_NEW_GAME_ACTION: (dispatch) => dispatch({ type: START_NEW_GAME_ACTION }),
}

export let performGridActions = ({ type, payload }, dispatch) => 
    gridActions[type] && gridActions[type](dispatch, payload)