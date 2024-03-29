import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import FetchController from "api/fetchController/fetchController";
import { TaskInterface } from "types/responseTypes/responseTypes";
import { ColumState } from "types/uiPropsTypes/uiPropsTypes";
import { InitialState } from "types/slicesTypes/getIssuesSliceTypes";

const initialState: InitialState = {
  data: {
    open: [],
    inProgress: [],
    done: [],
  },
  stars: 0,
  userURL: "",
  repoURL: "",
  isLoading: false,
  path: "",
};

export const fetchIssuesThunk = createAsyncThunk(
  "issues/getIssues",
  async (request: string) => {
    return FetchController.getIssues(request, initialState);
  }
);

export const fetchRepoThunk = createAsyncThunk(
  "issues/getRepo",
  async (request: string) => {
    return FetchController.getRepo(request, initialState);
  }
);

const IssuesSlice = createSlice({
  name: "Issues",
  initialState,
  reducers: {
    addIssue: (
      state,
      action: PayloadAction<{
        task: TaskInterface;
        targetState: ColumState | undefined;
        dropIndex: number;
      }>
    ) => {
      if (action.payload.targetState) {
        state.data[action.payload.targetState].splice(
          action.payload.dropIndex + 1,
          0,
          action.payload.task
        );
      }
    },
    removeIssue: (
      state,
      action: PayloadAction<{
        task: TaskInterface;
        taskState: ColumState;
        index: number;
      }>
    ) => {
      state.data[action.payload.taskState].splice(action.payload.index, 1);
    },
    orderIssue: (
      state,
      action: PayloadAction<{
        task: TaskInterface;
        targetState: ColumState | undefined;
        dropIndex: number;
        index: number;
      }>
    ) => {
      if (action.payload.targetState) {
        if (action.payload.dropIndex === action.payload.index) {
          return;
        }
        state.data[action.payload.targetState].splice(action.payload.index, 1);
        state.data[action.payload.targetState].splice(
          action.payload.dropIndex + 1,
          0,
          action.payload.task
        );
        if (action.payload.dropIndex === action.payload.index - 1) {
          state.data[action.payload.targetState].splice(
            action.payload.index,
            1
          );
          state.data[action.payload.targetState].splice(
            action.payload.dropIndex,
            0,
            action.payload.task
          );
        }
      }
    },
    setStore: (state, action: PayloadAction<{ newStore: InitialState }>) => {
      state.data = action.payload.newStore.data;
      state.isLoading = action.payload.newStore.isLoading;
      state.path = action.payload.newStore.path;
      state.repoURL = action.payload.newStore.repoURL;
      state.stars = action.payload.newStore.stars;
      state.userURL = action.payload.newStore.userURL;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchIssuesThunk.fulfilled, (state, action) => {
      state.data.open = [];
      state.data.inProgress = [];
      state.data.done = [];
      try {
        action.payload.forEach((item: TaskInterface) => {
          state.data[item.state as ColumState].push(item);
        });
      } catch (e) {
        console.log("Nothing to iterate.");
      }
      state.isLoading = false;
      state.path = action.meta.arg;
    });
    builder.addCase(fetchIssuesThunk.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchIssuesThunk.rejected, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(fetchRepoThunk.fulfilled, (state, action) => {
      try {
        state.stars = action.payload.stargazers_count;
        state.userURL = action.payload.owner.html_url;
        state.repoURL = action.payload.html_url;
      } catch (e) {
        console.log("Wrong Request.");
      }
    });
  },
});

export default IssuesSlice.reducer;
export const { removeIssue, addIssue, orderIssue, setStore } =
  IssuesSlice.actions;
