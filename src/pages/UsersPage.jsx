import { NavLink, Outlet } from "react-router-dom";

export default function UsersPage() {
  return (
    <>
      <h1>UsersPage</h1>
      <nav>
        <li>
          <NavLink to="/user/tweets">All Tweets</NavLink>
        </li>
        <li>
          <NavLink to="/user/replies">Replies</NavLink>
        </li>
        <li>
          <NavLink to="/user/likes">Likes</NavLink>
        </li>
      </nav>
      <Outlet />
    </>
  );
}
