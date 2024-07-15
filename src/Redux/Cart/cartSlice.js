import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    cartItems:[],
    totalItemsPrice:0,
    totalItems:0,
    totalQuantity:0
}

const cartSlice = createSlice({
    name:"Cart",
    initialState,
    reducers:{
        addCartItem : (state, action)=>{
            let item_exists = state.cartItems.find((item) => item.id === action.payload.id);

            state.cartItems = [...state.cartItems, action.payload];
            
            state.totalQuantity = ++state.totalQuantity;
            state.totalItemsPrice = state.totalItemsPrice+action.payload.pPrice;

            if(!item_exists){
                state.totalItems = ++state.totalItems;
            }
        }
    }
})

export const {addCartItem} = cartSlice.actions;
export default cartSlice.reducer;