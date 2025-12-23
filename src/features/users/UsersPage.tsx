import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { addUser, deleteUser } from "./UsersSlice";

export default function UsersPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const users = useSelector((state: RootState) => state.users.list);
  const dispatch = useDispatch();

  const handleAddUser = () => {
    dispatch(
      addUser({
        id: Date.now().toString(),
        name,
        email,
        role: "Viewer",
      })
    );
    setName("");
    setEmail("");
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Users</h2>
      <div className="mb-4 flex gap-2">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="border p-2 rounded"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="border p-2 rounded"
        />
        <button
          onClick={handleAddUser}
          className="bg-blue-600 text-white px-4 rounded"
        >
          Add User
        </button>
      </div>

      <table className="w-full bg-white rounded shadow">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2 text-left">Name</th>
            <th className="p-2 text-left">Email</th>
            <th className="p-2 text-left">Role</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-t">
              <td className="p-2">{user.name}</td>
              <td className="p-2">{user.email}</td>
              <td className="p-2">{user.role}</td>
              <td className="p-2 text-center">
                <button
                  onClick={() => dispatch(deleteUser(user.id))}
                  className="text-red-600 text-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
