import { NavLink } from 'react-router-dom';

export default function AdminPage() {
  return (
    <>
      <h1>AdminPage</h1>
      <button type="button">
        <NavLink to="/admin/tweets">Admin login</NavLink>
      </button>
    </>
  );
}
