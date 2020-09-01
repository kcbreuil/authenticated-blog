import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import axios from 'axios';

const Signup = () => {
  const {
    setUser,
    setLoggedIn,
    password,
    setPassword,
    username,
    setUsername,
    email,
    setEmail
  } = useContext(AppContext);

  const signup = async (username, email, password, e) => {
    e.preventDefault();
    await axios({
      method: 'POST',
      url: `/users`,
      data: {
        username,
        email,
        password
      }
    })
      .then(({ data }) => {
        console.log(data);
        setUser(data.user);
        setPassword('');
        setUsername('');
        setEmail('');
        setLoggedIn(true);
        localStorage.setItem('token', data.token);
      })
      .catch((e) => console.log(e.message.toString()));
  };
  return (
    <div>
      <form
        className="login-form"
        onSubmit={(e) => signup(username, email, password, e)}
      >
        <input
          type="username"
          name="username"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          Sign up
        </button>
        <div>Have an account?</div>
      </form>
    </div>
  );
};

export default Signup;
