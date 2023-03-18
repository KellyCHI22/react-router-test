import { useEffect } from 'react';
import styled from 'styled-components';
import { Outlet, useNavigate } from 'react-router-dom';
import { GridContainer, device } from '../../globalStyles';
import Navbar from '../Navbar';
import { user } from '../../globalVars';

const AdminContainer = styled(GridContainer)`
  @media screen and (${device.md}) {
    grid-template-columns: 1fr 7fr;
  }

  @media screen and (${device.lg}) {
    grid-template-columns: 1fr 4.5fr;
  }
`;

export default function AdminLayout() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!user.isAdmin) {
      return navigate('/login');
    }
    return undefined;
  }, [navigate]);

  return (
    <AdminContainer>
      <div className="col-1">
        <Navbar />
      </div>
      <div className="col-2">
        <Outlet />
      </div>
    </AdminContainer>
  );
}
