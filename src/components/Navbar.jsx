import React from 'react';
import { NavLink } from 'react-router-dom';
import { user } from '../globalVars';

export default function Navbar() {
  return (
    <>
      <h1>Navbar</h1>
      {user.isAdmin ? (
        <nav>
          <li>
            <NavLink to="/admin/tweets">Tweets</NavLink>
          </li>
          <li>
            <NavLink to="/admin/users">Users</NavLink>
          </li>
        </nav>
      ) : (
        <nav>
          <li>
            <NavLink to="/tweets">View all tweets</NavLink>
          </li>
          <li>
            <NavLink to={`/users/${user.id}/tweets`}>Go to user page</NavLink>
          </li>
          <li>
            <NavLink to="/settings">Settings</NavLink>
          </li>
        </nav>
      )}
    </>
  );
}

// * 確定 ok 共用 K
