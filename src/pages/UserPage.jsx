import { NavLink, Outlet, useParams } from 'react-router-dom';
import Profile from '../components/Profile';

export default function UsersPage() {
  const { id } = useParams();
  return (
    <>
      <h1>This is the home page of user {id}</h1>
      <Profile />
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
        <li>
          <NavLink to={`/users/${id}/followers`}>Followers</NavLink>
        </li>
        <li>
          <NavLink to={`/users/${id}/followings`}>Followings</NavLink>
        </li>
      </nav>
      <Outlet context={id} />
    </>
  );
}

// * K
