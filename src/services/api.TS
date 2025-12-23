import { User } from "../features/users/UsersPage";

export const fetchUsersApi = (): Promise<User[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: "1",
          name: "John Doe",
          email: "john@example.com",
          role: "Admin",
        },
        {
          id: "2",
          name: "Jane Smith",
          email: "jane@example.com",
          role: "Editor",
        },
      ]);
    }, 1000);
  });
};
