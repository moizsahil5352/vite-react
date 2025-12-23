import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { deleteUser } from "./UsersSlice";

export default function UsersPage() {
  const users = useSelector((state: RootState) => state.users.list);
  const dispatch = useDispatch();

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Users</h2>

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
          {users.map(user => (
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
