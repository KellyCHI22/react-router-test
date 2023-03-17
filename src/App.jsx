import { NavLink, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import AdminPage from "./pages/AdminPage";
import UsersPage from "./pages/UsersPage";
import TweetLayout from "./layouts/TweetLayout";
import TweetsPage from "./pages/TweetsPage";
import Tweet from "./pages/Tweet";
import UserTweets from "./pages/UserTweets";
import UserReplies from "./pages/UserReplies";
import UserLikes from "./pages/UserLikes";
import Settings from "./pages/Settings";
import Notfound from "./pages/Notfound";
import "./App.css";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
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
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route element={<TweetLayout />}>
          <Route path="/tweets">
            <Route index element={<TweetsPage />} />
            <Route path=":id" element={<Tweet />} />
          </Route>
          <Route element={<UsersPage />}>
            <Route path="/users/:id">
              <Route path="tweets" element={<UserTweets />} />
              <Route path="replies" element={<UserReplies />} />
              <Route path="likes" element={<UserLikes />} />
            </Route>
          </Route>
          <Route path="/settings" element={<Settings />} />
        </Route>
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
