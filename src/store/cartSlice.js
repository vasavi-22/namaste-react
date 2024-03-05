import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name : "cart",
    initialState : {
        items : [],
    },

    reducers : {
        addItem : (state,action) => {

            // vanilla (older) redux => don't mutate state
            // const newState = [...state];
            // newState.items.push(action.payload);
            // return newState;


            // redux toolkit
            // mutating the state here
            state.items.push(action.payload);
        },
        removeItem : (state,action) => {
            state.items.pop();
        },
        clearCart : (state,action) => {
            // RTK - either mutate the existing state or return a new state
            // state.items.length = 0; // []

            return {items : [] };
        },
    },
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;