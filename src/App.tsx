// src/App.tsx
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectIsAuthenticated, selectUsername, logout } from "./app/store";
import TodoList from "./components/TodoList";
import MyPage from "./components/MyPage";
import LoginForm from "./components/LoginForm";
import "./App.css";

const App: React.FC = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const username = useSelector(selectUsername);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {isAuthenticated && (
              <li>
                <Link to="/todo">Todo</Link>
              </li>
            )}
            <li>
              <Link to="/mypage">My Page</Link>
            </li>
          </ul>
          {isAuthenticated ? (
            <div>
              <span>Welcome!! {username}!</span>
              <button onClick={handleLogout}>Logout</button>
            </div>
          ) : (
            <Navigate to="/login" />
          )}
        </nav>
        <Routes>
          <Route
            path="/login"
            element={!isAuthenticated ? <LoginForm /> : <Navigate to="/todo" />}
          />
          <Route
            path="/todo"
            element={isAuthenticated ? <TodoList /> : <Navigate to="/login" />}
          />
          <Route
            path="/mypage"
            element={isAuthenticated ? <MyPage /> : <Navigate to="/login" />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
