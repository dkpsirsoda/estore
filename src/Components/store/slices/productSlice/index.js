import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        pName:"Women wear",
        pPrice:48,
        img:"shop-1.jpg"
    },
    {
        pName:"Jacket",
        pPrice:50,
        img:"shop-2.jpg"
    },
    {
        pName:"Kids",
        pPrice:60,
        img:"shop-3.jpg"
    },
    {
        pName:"Salwar",
        pPrice:35,
        img:"shop-4.jpg"
    },
    {
        pName:"Suite",
        pPrice:70,
        img:"shop-5.jpg"
    },
    {
        pName:"Suite",
        pPrice:55,
        img:"shop-6.jpg"
    },
    {
        pName:"Suite",
        pPrice:70,
        img:"shop-7.jpg"
    },
    {
        pName:"Suite",
        pPrice:55,
        img:"shop-8.jpg"
    }
]

const productSlice = createSlice({
    name:"Products",
    initialState
})

export default productSlice;