import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { TaskInterface } from "../../types/responseTypes/responseTypes";
import { ColumState } from "types/uiPropsTypes/uiPropsTypes";
import { InitialState } from "types/slicesTypes/getIssuesSliceTypes";

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
            targetState: ColumState | undefined, dropIndex: number}>) => {
                if (action.payload.targetState) {
                    state.data[action.payload.targetState]
                        .splice(action.payload.dropIndex + 1, 0, action.payload.task)
                }
        },
        removeIssue: (state, action: PayloadAction<{task: TaskInterface, 
            taskState: ColumState, index: number}>) => {
                state.data[action.payload.taskState].splice(action.payload.index, 1)
        },
        orderIssue: (state, action: PayloadAction<{task: TaskInterface, 
            targetState: ColumState | undefined, dropIndex: number, index: number}>) => {
                if (action.payload.targetState) {
                    if (action.payload.dropIndex === action.payload.index) {
                        return
                    }
                    state.data[action.payload.targetState].splice(action.payload.index, 1)
                    state.data[action.payload.targetState]
                        .splice(action.payload.dropIndex + 1, 0, action.payload.task)
                    if (action.payload.dropIndex === action.payload.index - 1) {
                        state.data[action.payload.targetState].splice(action.payload.index, 1)
                        state.data[action.payload.targetState]
                        .splice(action.payload.dropIndex, 0, action.payload.task)
                    }
                }
        },
        setStore: (state, action: PayloadAction<{newStore: InitialState}>) => {
            state.data = action.payload.newStore.data
            state.isLoading = action.payload.newStore.isLoading
            state.path = action.payload.newStore.path
            state.repoURL = action.payload.newStore.repoURL
            state.stars = action.payload.newStore.stars
            state.userURL = action.payload.newStore.userURL
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchIssuesThunk.fulfilled, (state, action) => {
            state.data.open = []
            state.data.inProgress = []
            state.data.done = []
            action.payload.forEach((item: TaskInterface) => {
                state.data[item.state as ColumState].push(item)
            })
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
            state.repoURL = action.payload.html_url
        })
    }
})

export default IssuesSlice.reducer
export const { removeIssue, addIssue, orderIssue, setStore } = IssuesSlice.actions