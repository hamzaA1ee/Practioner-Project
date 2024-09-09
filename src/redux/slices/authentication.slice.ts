// Redux Import
import { createSlice } from "@reduxjs/toolkit";

// Interface Import
import { IUser } from "@/types/Interfaces/user.interface";
import { IContinueButton } from "@/types/Interfaces/continueButton.interface";

const initialState: {
  user: IUser | null;
  token: string | null;
  continueButton: IContinueButton | null;
} = {
  user: null,
  token: null,
  continueButton: null,
};

const authenticationSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    updateUser: (state, action) => {
      state.user = action.payload;
    },
    continueButton: (state, action) => {
      state.continueButton = action.payload.continueButton;
    },
  },
});

export const { loginSuccess, updateUser, continueButton } =
  authenticationSlice.actions;

export default authenticationSlice.reducer;
