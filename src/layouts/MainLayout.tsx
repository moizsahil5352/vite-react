import { Outlet, NavLink } from "react-router-dom";
import { useAppDispatch } from "../hooks/redux";
import { logout } from "../features/auth/authSlice";

export default function MainLayout() {
  const dispatch = useAppDispatch();

  const linkClasses = ({ isActive }: { isActive: boolean }) =>
    `block px-3 py-2 rounded ${
      isActive
        ? "bg-blue-600 text-white"
        : "text-gray-300 hover:bg-gray-800"
    }`;

  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-900 text-white p-4 flex flex-col">
        <h1 className="text-xl font-bold mb-6">Admin Panel</h1>

        {/* Navigation */}
        <nav className="flex flex-col gap-2">
          <NavLink to="/dashboard" className={linkClasses}>
            Dashboard
          </NavLink>
          <NavLink to="/users" className={linkClasses}>
            Users
          </NavLink>
        </nav>

        {/* Push logout to bottom */}
        <div className="mt-auto pt-6">
          <button
            onClick={() => dispatch(logout())}
            className="w-full text-left px-3 py-2 rounded text-red-400 hover:bg-gray-800"
          >
            Logout
          </button>
        </div>
      </aside>

      <main className="flex-1 p-6 bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
}
