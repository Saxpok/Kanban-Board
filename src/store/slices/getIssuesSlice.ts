import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TaskInterface } from "../../types";
import Item from "antd/es/list/Item";

export interface InitialState {
    data: {
        open: TaskInterface[],
        inProgress: TaskInterface[],
        done: TaskInterface[]
    }
    stars: number
    isLoading: boolean
    path: string
}

const initialState : InitialState = {
    data: {
        open: [],
        inProgress: [],
        done: []
    },
    stars: 0,
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

export const fetchRepoThunk = createAsyncThunk(
    'issues/getIssuesSlice', 
    async (request: string) => {
        const response = await fetch(`https://api.github.com/repos/${request}`)
        const result = await response.json()
        return result
    }
)

const IssuesSlice = createSlice({
    name: 'Issues',
    initialState,
    reducers: {
        addIssue: (state, action: PayloadAction<{task: TaskInterface, targetState: 'open' | 'inProgress' | 'done' | undefined}>) => {
            if (action.payload.targetState) {
                state.data[action.payload.targetState].push(action.payload.task)
            }
        },
        removeIssue: (state, action: PayloadAction<{task: TaskInterface, taskState: 'open' | 'inProgress' | 'done'}>) => {
            const filteredStateArray = state.data[action.payload.taskState].filter((item) => item.id !== action.payload.task.id)
            state.data[action.payload.taskState] = filteredStateArray
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
        });
        // builder.addCase(fetchRepoThunk.fulfilled, (state, action) => {
        //     state.stars = action.payload.stargazers_count
        // })
    }
})

export default IssuesSlice.reducer
export const { removeIssue } = IssuesSlice.actions
export const { addIssue } = IssuesSlice.actions
