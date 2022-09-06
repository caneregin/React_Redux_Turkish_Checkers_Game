import { configureStore } from "@reduxjs/toolkit";
import damaSlice from "./damaApp/damaSlice";

export const store = configureStore({
    reducer:{
        dama: damaSlice
    },
})