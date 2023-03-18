import { NavLink } from 'react-router-dom';
import { Container } from '../globalStyles';

export default function AdminPage() {
  return (
    <Container>
      <h1>AdminPage</h1>
      <button type="button">
        <NavLink to="/admin/tweets">Admin login</NavLink>
      </button>
    </Container>
  );
}

// * 確定 ok weii
