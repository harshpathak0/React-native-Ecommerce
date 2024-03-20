import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./Slices/ProductSlice";

export const store = configureStore({
    reducer: {
        product: ProductReducer,
    }
})