import { useOutletContext } from 'react-router-dom';

export default function UserFollowers() {
  const id = useOutletContext();
  return <h2>This is user {id}'s followers</h2>;
}
