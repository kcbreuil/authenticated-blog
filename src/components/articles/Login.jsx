import React, { useState, useContext } from "react";
import { AppContext } from "../../context/AppContext";
import axios from "axios";

const Login = () => {
  const { setUser, setLoggedIn } = useContext(AppContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const logIn = async (username, password, e) => {
    e.preventDefault();
    await axios({
      method: "POST",
      url: `/users/login`,
      data: {
        username,
        password,
      },
    })
      .then((user) => {
        setUser(user.data);
        localStorage.setItem("token", user.data.tokens[0].token);
        setLoggedIn(true);
        setUsername("");
        setPassword("");
      })
      .catch((e) => {
        console.log(e.message.toString(), "Credentials Error");
      });
  };

  return (
    <>
      <form onSubmit={(e) => logIn(username, password, e)}>
        <input
          type="username"
          name="username"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="btn-sm btn-primary actions">
          Log In
        </button>
      </form>
    </>
  );
};

export default Login;
