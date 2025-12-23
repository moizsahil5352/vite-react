import { Outlet, NavLink } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-900 text-white p-4">
        <h1 className="text-xl font-bold mb-6">Admin</h1>
        <nav className="space-y-2">
          <NavLink to="/dashboard">Dashboard</NavLink>
          <NavLink to="/users">Users</NavLink>
        </nav>
      </aside>

      <main className="flex-1 p-6 bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
}
