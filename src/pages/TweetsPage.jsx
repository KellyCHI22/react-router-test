import { NavLink } from "react-router-dom";

export default function TweetsPage() {
  return (
    <>
      <h1>TweetsPage</h1>
      <nav>
        <li>
          <NavLink to="/tweets/1">Tweet 1</NavLink>
        </li>
        <li>
          <NavLink to="/tweets/2">Tweet 2</NavLink>
        </li>
        <li>
          <NavLink to="/tweets/new">Add a new tweet</NavLink>
        </li>
        <li>
          <NavLink to="/user/1">View user 1 profile</NavLink>
        </li>
        <li>
          <NavLink to="/user/2">View user 2 profile</NavLink>
        </li>
      </nav>
    </>
  );
}
