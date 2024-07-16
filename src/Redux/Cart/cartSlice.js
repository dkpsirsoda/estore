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

            if(!item_exists){
                state.cartItems = [...state.cartItems, action.payload];
                state.totalQuantity = ++state.totalQuantity;
                state.totalItemsPrice = state.totalItemsPrice+action.payload.pPrice;
                state.totalItems = ++state.totalItems;
            }
        },
        updateQuantity : (state, action)=>{
           let index = action.payload.key;

           if(action.payload.operator === "+"){
                ++state.cartItems[index].quantity;
                state.totalItemsPrice = state.totalItemsPrice + action.payload.item.pPrice;
                ++state.totalQuantity;
           }else if(action.payload.operator === "-"){
                if(state.cartItems[index].quantity>1){
                    --state.cartItems[index].quantity;
                    state.totalItemsPrice = state.totalItemsPrice - action.payload.item.pPrice;
                    --state.totalQuantity;
                } 
           }
        },
        deleteCartItem : (state, action)=>{
            const filteredCart = state.cartItems.filter((ele) =>{
                return ele.id != action.payload.id;
            })

            state.cartItems = filteredCart;

            state.totalItemsPrice = state.totalItemsPrice - (action.payload.pPrice * action.payload.quantity);
            state.totalQuantity = state.totalQuantity - action.payload.quantity;
            --state.totalItems;
        }
    }
})

export const {addCartItem, updateQuantity, deleteCartItem} = cartSlice.actions;
export default cartSlice.reducer;