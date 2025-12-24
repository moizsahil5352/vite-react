import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import usersReducer from "../features/users/usersSlice"; // ✅ NOT UsersPage

export const store = configureStore({
  reducer: {
    auth: authReducer,
    users: usersReducer, // ✅ MUST be reducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
