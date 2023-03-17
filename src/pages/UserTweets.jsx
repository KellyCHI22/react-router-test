import { useOutletContext } from 'react-router-dom';

export default function UserTweets() {
  const id = useOutletContext();
  return <h2>This is all tweets by user {id}</h2>;
}
