import { useOutletContext } from 'react-router-dom';

export default function UserFollowings() {
  const id = useOutletContext();
  return <h2>This is user {id}'s followings</h2>;
}
