import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledDiv = styled.div`
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);

  div {
    position: absolute;
    inset: 0;
    width: 200px;
    height: 100px;
    margin: auto;
    padding: 10px;
    background-color: aqua;
  }
`;

function NewTweetModal({ onButtonClick }) {
  return (
    <StyledDiv>
      <div>
        <p>Add a new tweet</p>
        <button type="button" onClick={onButtonClick}>
          Confirm
        </button>
      </div>
    </StyledDiv>
  );
}

export default function TweetsPage() {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    const nextShowModal = !showModal;
    setShowModal(nextShowModal);
  };

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
          <NavLink to="/users/1/tweets">View user 1 profile</NavLink>
        </li>
        <li>
          <NavLink to="/users/2/tweets">View user 2 profile</NavLink>
        </li>
        <button type="button" onClick={handleShowModal}>
          Add a new tweet
        </button>
        {showModal && <NewTweetModal onButtonClick={handleShowModal} />}
      </nav>
    </>
  );
}
