import { Outlet, useLocation } from 'react-router-dom';
import { GridContainer } from '../../globalStyles';
import Navbar from '../Navbar';
import Popular from '../Popular';

// 主要就是放左手邊 nav 和右邊 popular 欄位，中間使用 outlet 顯示推文或使用者資料的部分

export default function TweetLayout() {
  const location = useLocation();

  return (
    <GridContainer>
      <div className="col-1">
        <Navbar />
      </div>
      <div className="col-2">
        {/* anything passed in context are shared between nested routes */}
        <Outlet context={{ text: 'hello world' }} />
      </div>
      {location.pathname !== '/settings' && (
        <div className="col-3">
          <Popular />
        </div>
      )}
    </GridContainer>
  );
}
