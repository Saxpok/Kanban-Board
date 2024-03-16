import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TaskInterface } from "../../types";
import Item from "antd/es/list/Item";

export interface InitialState {
    data: {
        open: TaskInterface[],
        inProgress: TaskInterface[],
        done: TaskInterface[]
    },
    isLoading: boolean
    path: string
}

const initialState : InitialState = {
    data: {
        open: [],
        inProgress: [],
        done: []
    },
    isLoading: false,
    path: ''
}

export const fetchIssuesThunk = createAsyncThunk(
    'issues/getIssuesSlice', 
    async (request: string) => {
        const response = await fetch(`https://api.github.com/repos/${request}/issues`)
        const result = await response.json()
        return result
    }
)

const IssuesSlice = createSlice({
    name: 'Issues',
    initialState,
    reducers: {
        removeIssue: (state, action: PayloadAction<{task: TaskInterface, taskState: string}>) => {
            console.log(action.payload)
            console.log(state) /// ??? undefined
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchIssuesThunk.fulfilled, (state, action) => {
            state.data.open = action.payload
            state.isLoading = false
            state.path = action.meta.arg
        });
        builder.addCase(fetchIssuesThunk.pending, (state) => {
            state.isLoading = true
        });
        builder.addCase(fetchIssuesThunk.rejected, (state, action) => {
            state.isLoading = false
        })
    }
})

export default IssuesSlice.reducer
export const { removeIssue } = IssuesSlice.actions