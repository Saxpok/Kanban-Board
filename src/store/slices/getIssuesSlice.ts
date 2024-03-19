import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { TaskInterface } from "../../types"; //rename

export interface InitialState { //move to types
    data: {
        open: TaskInterface[],
        inProgress: TaskInterface[],
        done: TaskInterface[]
    }
    stars: number
    userURL: string
    repoURL: string
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
    userURL: '',
    repoURL: '',
    isLoading: false,
    path: ''
}

export const fetchIssuesThunk = createAsyncThunk(
    'issues/getIssues', 
    async (request: string) => {
        const response = await fetch(`https://api.github.com/repos/${request}/issues`) //move to API
        const result = await response.json()
        return result
    }
)

export const fetchRepoThunk = createAsyncThunk(
    'issues/getRepo', 
    async (request: string) => {
        const response = await fetch(`https://api.github.com/repos/${request}`) //move to API
        const result = await response.json()
        return result
    }
)

const IssuesSlice = createSlice({
    name: 'Issues',
    initialState,
    reducers: {
        addIssue: (state, action: PayloadAction<{task: TaskInterface, 
            targetState: 'open' | 'inProgress' | 'done' | undefined}>) => { //move to types
            if (action.payload.targetState) {
                state.data[action.payload.targetState].push(action.payload.task)
            }
        },
        removeIssue: (state, action: PayloadAction<{task: TaskInterface, 
            taskState: 'open' | 'inProgress' | 'done'}>) => { //move to types
            const filteredStateArray = state.data[action.payload.taskState]
            .filter((item) => item.id !== action.payload.task.id)
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
        builder.addCase(fetchRepoThunk.fulfilled, (state, action) => {
            state.stars = action.payload.stargazers_count
            state.userURL = action.payload.owner.html_url
            state.repoURL = action.payload.url
        })
    }
})

export default IssuesSlice.reducer
export const { removeIssue, addIssue } = IssuesSlice.actions