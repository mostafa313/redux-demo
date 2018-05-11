import {
    COUNTER_COUNT_DOWN,
    COUNTER_COUNT_UP
} from './actions'

export const countUp = (amount) => ({
    type: COUNTER_COUNT_UP,
    amount
})

export const countDown = (amount) => ({
    type: COUNTER_COUNT_DOWN,
    amount
})
