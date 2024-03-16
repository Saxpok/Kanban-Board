import { configureStore } from "@reduxjs/toolkit";

import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import IssuesSlice from "./slices/getIssuesSlice";


export const store = configureStore({
    reducer: {
        issues: IssuesSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: ()=> AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector