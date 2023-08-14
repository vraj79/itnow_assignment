import React, { useEffect, useState } from "react";
import "../styles/login-form.css";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { User } from "../redux/reducers";
import { Toaster, toast } from "react-hot-toast";

const LoginForm = () => {
  const users = useSelector((state: RootState) => state.users);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // add your authentication logic here
    const user = users.find((user: User) => user.email === email);
    if (user) {
      if (user.password === password) {
        setIsLoggedIn(true);
        setErrorMessage("");
        setEmail("");
        setPassword("");
      } else {
        setErrorMessage("Invalid password");
      }
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      toast.success("You are now logged in");
    }
    if (errorMessage) {
      toast.error(errorMessage);
    }
    return () => {
      setIsLoggedIn(false);
    };
  }, [errorMessage, isLoggedIn]);

  return (
    <div className="login-container">
      <Toaster />
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <label>Username:</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
