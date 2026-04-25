// app/reducers/user.ts
// Slice Redux pour l'utilisateur connecté.
// Persisté via redux-persist → localStorage.

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { UserState } from "@/types";

interface UserSliceState {
  value: UserState;
}

const initialState: UserSliceState = {
  value: {
    token: null,
    username: null,
    email: null,
    xp: 0,
    picture: null,
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signUp: (state, action: PayloadAction<UserState>) => {
      state.value.token = action.payload.token;
      state.value.username = action.payload.username;
      state.value.email = action.payload.email;
      state.value.xp = action.payload.xp ?? 0;
      state.value.picture = action.payload.picture ?? null;
    },
    logout: (state) => {
      state.value = initialState.value;
    },
    updatePicture: (state, action: PayloadAction<string | null>) => {
      state.value.picture = action.payload;
    },
    updateXp: (state, action: PayloadAction<number>) => {
      state.value.xp = action.payload;
    },
  },
});

export const { signUp, logout, updatePicture, updateXp } = userSlice.actions;
export default userSlice.reducer;
