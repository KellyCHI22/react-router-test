import { NavLink, Route, Routes, BrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import AdminPage from './pages/AdminPage';
import AdminLayout from './layouts/AdminLayout';
import AdminTweets from './pages/AdminTweets';
import AdminUsers from './pages/AdminUsers';
import TweetLayout from './layouts/TweetLayout';
import TweetsPage from './pages/TweetsPage';
import Tweet from './pages/Tweet';
import UsersPage from './pages/UsersPage';
import UserTweets from './pages/UserTweets';
import UserReplies from './pages/UserReplies';
import UserLikes from './pages/UserLikes';
import UserFollowers from './pages/UserFollowers';
import UserFollowings from './pages/UserFollowings';
import Settings from './pages/Settings';
import Notfound from './pages/NotfoundPage';
import './App.css';

const basename = import.meta.env.VITE_PUBLIC_URL;

function App() {
  return (
    <BrowserRouter basename={basename}>
      <nav>
        <ul>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/signup">Sign up</NavLink>
          </li>
          <li>
            <NavLink to="/admin">Admin login</NavLink>
          </li>
          <li>
            <NavLink to="/tweets">Tweets</NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignUpPage />} />
        <Route path="admin">
          <Route index element={<AdminPage />} />
          <Route element={<AdminLayout />}>
            <Route path="tweets" element={<AdminTweets />} />
            <Route path="users" element={<AdminUsers />} />
          </Route>
        </Route>
        <Route element={<TweetLayout />}>
          <Route path="tweets">
            <Route index element={<TweetsPage />} />
            <Route path=":id" element={<Tweet />} />
          </Route>
          <Route element={<UsersPage />}>
            <Route path="users/:id">
              <Route path="tweets" element={<UserTweets />} />
              <Route path="replies" element={<UserReplies />} />
              <Route path="likes" element={<UserLikes />} />
              <Route path="followers" element={<UserFollowers />} />
              <Route path="followings" element={<UserFollowings />} />
            </Route>
          </Route>
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
