import { useOutletContext } from "react-router-dom";

export default function UserReplies() {
  const id = useOutletContext();
  return <h2>This is all replies by user {id}</h2>;
}
