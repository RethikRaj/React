import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    'name' : 'cart',
    'initialState' : {
        'items' : []
    },
    'reducers' : {
        'addItem' : (state,action)=>{
            // Mutating our state here 
            const existingItem = state.items.find((item)=>{return item.id === action.payload.id});
            if(existingItem){
                existingItem.count += 1;
            }else{
                state.items.push({...action.payload, 'count': 1});
            }
        },
        'removeItem' : (state,action)=>{
            state.items.pop()
        },
        'clearCart' : (state,action)=>{
            state.items.length = 0;
        }
    }
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;