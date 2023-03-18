import { NavLink, Route, Routes, BrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import AdminPage from './pages/AdminPage';
import AdminTweetList from './components/AdminTweetList';
import AdminUserList from './components/AdminUserList';

import SettingsPage from './pages/SettingsPage';

import AdminLayout from './components/layouts/AdminLayout';
import TweetLayout from './components/layouts/TweetLayout';

import TweetPage from './pages/TweetPage';
import ReplyPage from './pages/ReplyPage';
import UserPage from './pages/UserPage';
import TweetList from './components/TweetList';
import FollowList from './components/FollowList';

import './App.css';
import { GlobalStyle } from './globalStyles';

const basename = import.meta.env.VITE_PUBLIC_URL;

function Nav() {
  return (
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
  );
}

function App() {
  return (
    <BrowserRouter basename={basename}>
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path="*" element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignUpPage />} />
        <Route path="admin">
          <Route index element={<AdminPage />} />
          <Route element={<AdminLayout />}>
            <Route path="tweets" element={<AdminTweetList />} />
            <Route path="users" element={<AdminUserList />} />
          </Route>
        </Route>
        <Route element={<TweetLayout />}>
          <Route path="tweets">
            <Route index element={<TweetPage />} />
            <Route path=":id" element={<ReplyPage />} />
          </Route>
          <Route element={<UserPage />}>
            <Route path="users/:id">
              <Route path="tweets" element={<TweetList />} />
              <Route path="replies" element={<TweetList />} />
              <Route path="likes" element={<TweetList />} />
              <Route path="followers" element={<FollowList />} />
              <Route path="followings" element={<FollowList />} />
            </Route>
          </Route>
          <Route path="settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
