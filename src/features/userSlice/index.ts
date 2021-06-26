import { createSlice } from '@reduxjs/toolkit'

import type { AppState } from '../../app/store'

interface UserState {
  name: string;
  email: string;
  profile: string;
}

const initialState: { user: UserState | null } = {
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
