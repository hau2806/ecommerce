import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./ProductSlice";

const store = configureStore({
    reducer: {
        loopStore: ProductSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;