import { configureStore } from "@reduxjs/toolkit";

import reducer, { setStore } from "./getIssuesSlice";

describe("IssuesSlice", () => {
  const initialState = {
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
  }

  it("should return the initial state", () => {
    const store = configureStore({ reducer })

    store.dispatch(setStore({ newStore: initialState }))

    const currentState = store.getState()

    expect(currentState).toEqual(initialState)
  })
})
