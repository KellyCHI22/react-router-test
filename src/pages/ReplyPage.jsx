import { useState } from 'react';
import { useOutletContext, useParams } from 'react-router-dom';
import styled from 'styled-components';
import TweetContent from '../components/TweetContent';
import TweetList from '../components/TweetList';

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

function NewReplyModal({ onButtonClick }) {
  return (
    <StyledDiv>
      <div>
        <p>Add a new reply</p>
        <button type="button" onClick={onButtonClick}>
          Confirm
        </button>
      </div>
    </StyledDiv>
  );
}

export default function Tweet() {
  // use the params for dynamic routes
  const { id } = useParams();
  // use the stuff in outlet context
  const { text } = useOutletContext();
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    const nextShowModal = !showModal;
    setShowModal(nextShowModal);
  };

  return (
    <>
      <h3>
        Tweet {id}, {text}
      </h3>
      <TweetContent />
      <button type="button" onClick={handleShowModal}>
        Reply this tweet
      </button>
      {showModal && <NewReplyModal onButtonClick={handleShowModal} />}
      <TweetList />
    </>
  );
}

// * K
