import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

interface UsersState {
  list: User[];
}

const initialState: UsersState = {
  list: [
    { id: "1", name: "John Doe", email: "john@example.com", role: "Admin" },
    { id: "2", name: "Jane Smith", email: "jane@example.com", role: "Editor" }
  ],
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser(state, action: PayloadAction<User>) {
      state.list.push(action.payload);
    },
    deleteUser(state, action: PayloadAction<string>) {
      state.list = state.list.filter(user => user.id !== action.payload);
    },
  },
});

export const { addUser, deleteUser } = usersSlice.actions;
export default usersSlice.reducer;
