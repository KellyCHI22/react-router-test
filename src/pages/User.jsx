import { useParams } from "react-router-dom";

export default function User() {
  const { id } = useParams();
  return <h1>This is user {id}'s profile</h1>;
}
