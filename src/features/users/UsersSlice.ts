import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { fetchUsersApi } from "../../services/api";

export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

interface UsersState {
  list: User[];
  loading: boolean;
  error: string | null;
}

const initialState: UsersState = {
  list: [],
  loading: false,
  error: null,
};

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async () => {
    const users = await fetchUsersApi();
    return users;
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser(state, action: PayloadAction<User>) {
      state.list.push(action.payload);
    },
    deleteUser(state, action: PayloadAction<string>) {
      state.list = state.list.filter((u) => u.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to load users";
      });
  },
});

export const { addUser, deleteUser } = usersSlice.actions;
export default usersSlice.reducer;
