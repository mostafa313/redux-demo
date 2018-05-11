import {
    COUNTER_COUNT_DOWN,
    COUNTER_COUNT_UP
} from '../actions/actions'

export const initialState = {
    number : 0
}


export default function reducer(state, action) {
    switch (action.type) {
        case COUNTER_COUNT_DOWN:
            return {
                ...state,
                number: state.number - 1
            }
            break;
        
        case COUNTER_COUNT_UP:
            return {
                ...state,
                number: state.number + 1
            }
            break
    
        default:
            return state
            break;
    }
}
