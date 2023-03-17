import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Notfound() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/');
    }, 2000);
  }, [navigate]);

  return <h1>404 not found</h1>;
}
