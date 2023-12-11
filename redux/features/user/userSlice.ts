import { RootState } from '@/redux/store';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  name?: string;
  email?: string;
  isLoading: boolean;
  isLoggedIn: boolean;
  error: string | null;
}

const initialState: UserState = {
  name: undefined,
  email: undefined,
  isLoading: false,
  isLoggedIn: false,
  error: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logIn: (state, action: PayloadAction<Partial<UserState>>) => {
      const { name, email } = action.payload;

      state.name = name;
      state.email = email;
      state.isLoggedIn = true;
    },
    logOut: () => {
      return initialState;
    },
  },
});

export const { logIn, logOut } = userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectUser = (state: RootState) => state.users;

export default userSlice.reducer;
