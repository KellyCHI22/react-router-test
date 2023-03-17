import { useOutletContext } from "react-router-dom";

export default function UserLikes() {
  const id = useOutletContext();
  return <h2>This is all likes by user {id}</h2>;
}
