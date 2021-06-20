import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { AppState, AppThunk } from '../../app/store'

export interface CounterState {
  user: object | null;
}

const initialState: CounterState = {
  user: null
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload
    },
    logout: (state) => {
      state.user = null
    }
  }
})

export const { login, logout } = userSlice.actions

export const selectUser = (state: AppState) => state.user.user

export default userSlice.reducer
