import { configureStore } from "@reduxjs/toolkit";
import uiManagerReduser from "./ui-management/uiManagement";

const store = configureStore({
    reducer:{
        uiManagerReduser
    }
})

export default store;

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch