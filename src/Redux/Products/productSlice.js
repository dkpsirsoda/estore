import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "./productAction";

const initialState = {
    products: [],
    status : "idle",
    error : ""
};

const productSlice = createSlice({
    name:"Product",
    initialState,
    reducers:{
        filterProducts : (state, action)=>{
            const filteredData = action.payload.products.filter((ele)=>{
                return ele.category_id=== action.payload.selectedCategory.id;
            }) 

            state.products = filteredData;
        },

        filterByPrice : (state, action)=>{
            const filteredData = action.payload.products.filter((ele)=>{
                return ele.pPrice >= action.payload.minPriceLimit &&
                ele.pPrice <= action.payload.maxPriceLimit;
            })

            state.products = filteredData;
        }
    },
    extraReducers: builder => {
        builder.addCase(getProducts.pending, (state, action) => {
            state.status = "Loading.....";
        });
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.status = "Success";
            state.products = action.payload; 
        });
        builder.addCase(getProducts.rejected, (state, action) => {
            state.status = "Rejected!";
            state.error = action.error.message;
        });
      }
})

export const {filterProducts,filterByPrice} = productSlice.actions;
export default productSlice.reducer;