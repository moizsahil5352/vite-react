import { Outlet, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";

export default function MainLayout() {
  const dispatch = useDispatch();
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-900 text-white p-4">
        <h1 className="text-xl font-bold mb-6">Admin</h1>
        <nav className="space-y-2">
          <NavLink to="/dashboard">Dashboard</NavLink>
          <NavLink to="/users">Users</NavLink>
          <button
            onClick={() => dispatch(logout())}
            className="mt-6 text-sm text-red-400"
          >
            Logout
          </button>
        </nav>
      </aside>

      <main className="flex-1 p-6 bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
}
