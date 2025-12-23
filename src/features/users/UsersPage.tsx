import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { addUser, deleteUser } from "./UsersSlice";
import Button from "../../components/ui/Button";
import Table from "../../components/ui/Table";

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
        <Button onClick={handleAddUser}>Add User</Button>
      </div>

      <Table headers={["Name", "Email", "Role", "Actions"]}>
        {users.map((user) => (
          <tr key={user.id} className="border-t">
            <td className="p-2">{user.name}</td>
            <td className="p-2">{user.email}</td>
            <td className="p-2">{user.role}</td>
            <td className="p-2">
              <Button
                variant="danger"
                onClick={() => dispatch(deleteUser(user.id))}
              >
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </Table>
    </div>
  );
}
