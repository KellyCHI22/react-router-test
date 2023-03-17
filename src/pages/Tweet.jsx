import { useOutletContext, useParams } from 'react-router-dom';

export default function Tweet() {
  // use the params for dynamic routes
  const { id } = useParams();
  // use the stuff in outlet context
  const { text } = useOutletContext();
  return (
    <h1>
      Tweet {id}, {text}
    </h1>
  );
}
