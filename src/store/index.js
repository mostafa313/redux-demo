import { createStore } from 'redux'
import reducer, { initialState } from '../reducers'

export default createStore(
    reducer,
    initialState
)
