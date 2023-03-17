import { NavLink, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import UsersPage from "./pages/UsersPage";
import User from "./pages/User";
import TweetLayout from "./layouts/TweetLayout";
import TweetsPage from "./pages/TweetsPage";
import Tweet from "./pages/Tweet";
import NewTweet from "./pages/NewTweet";
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
            <NavLink to="/register">Register</NavLink>
          </li>
          <li>
            <NavLink to="/tweets">Tweets</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <p>Test</p>
        <Route element={<TweetLayout />}>
          <Route path="/tweets">
            <Route index element={<TweetsPage />} />
            <Route path=":id" element={<Tweet />} />
            <Route path="new" element={<NewTweet />} />
          </Route>
          <Route path="/user" element={<UsersPage />}>
            <Route path="tweets" element={<UserTweets />} />
            <Route path="replies" element={<UserReplies />} />
            <Route path="likes" element={<UserLikes />} />
          </Route>
          <Route path="/settings" element={<Settings />} />
          <Route path="/user/:id" element={<User />} />
        </Route>
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
