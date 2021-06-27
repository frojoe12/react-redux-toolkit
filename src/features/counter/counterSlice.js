import {createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CounterState {
    value: number
}

const initialState: CounterState = {
    value:0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: state => {
            state.value += 1
        },
        decrement: state => {
            state.value -= 1
        },
        reset: state => {
            state.value = 0
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
        
    }
})

export const { increment, decrement, incrementByAmount, reset } = counterSlice.actions;
export const selectCount = state => state.counter.value;
export default counterSlice.reducer