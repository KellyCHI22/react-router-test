import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const StyledContainer = styled.div`
  outline: 2px solid tomato;

  .sidenav {
    background-color: lightgray;
  }

  .middle {
    background-color: darkseagreen;
  }

  .popular {
    background-color: hotpink;
  }
`;

export default function TweetLayout() {
  const user = {
    id: 5,
  };
  return (
    <StyledContainer>
      <nav className="sidenav">
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
      <div className="middle">
        {/* anything passed in context are shared between nested routes */}
        <Outlet context={{ text: 'hello world' }} />
      </div>
      <div className="popular">
        <h2>Popular</h2>
      </div>
    </StyledContainer>
  );
}
