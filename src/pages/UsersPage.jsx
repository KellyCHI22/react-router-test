import { NavLink, Outlet, useParams } from 'react-router-dom';

export default function UsersPage() {
  const { id } = useParams();
  return (
    <>
      <h1>This is the home page of user {id}</h1>
      <nav>
        <li>
          <NavLink to={`/users/${id}/tweets`}>All Tweets</NavLink>
        </li>
        <li>
          <NavLink to={`/users/${id}/replies`}>Replies</NavLink>
        </li>
        <li>
          <NavLink to={`/users/${id}/likes`}>Likes</NavLink>
        </li>
      </nav>
      <Outlet context={id} />
    </>
  );
}
