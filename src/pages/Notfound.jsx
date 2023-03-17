import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Notfound() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/login');
    }, 2000);
  }, [navigate]);

  return <h1>404 not found</h1>;
}
