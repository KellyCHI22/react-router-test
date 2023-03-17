import { NavLink, Outlet } from 'react-router-dom';

export default function AdminLayout() {
  return (
    <>
      <nav>
        <li>
          <NavLink to="/admin/tweets">Tweets</NavLink>
        </li>
        <li>
          <NavLink to="/admin/users">Users</NavLink>
        </li>
      </nav>
      <Outlet />
    </>
  );
}
