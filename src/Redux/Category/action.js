import {createAsyncThunk} from '@reduxjs/toolkit';

export const getCategories = createAsyncThunk(
    'getCategories',
    () => {
        const categories = fetch("http://localhost:5001/getCategories")
        .then((res) => res.json());
        return categories;
    }
)