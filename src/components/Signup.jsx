import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const {
    setUser,
    setLoggedIn,
    password,
    setPassword,
    username,
    setUsername
  } = useContext(AppContext);

  const history = useHistory();

  const signup = async (username, password, e) => {
    e.preventDefault();
    await axios({
      method: 'POST',
      url: `/users`,
      data: {
        username,
        password
      }
    })
      .then(({ data }) => {
        setUser(data.user);
        setLoggedIn(true);
        localStorage.setItem('token', data.token);
      })
      .catch((e) => console.log(e.message.toString()));
  };
  return (
    <div>
      <form
        className="login-form"
        onSubmit={(e) => signup(username, password, e)}
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
        <div>
          Have an account?
          <Link onClick={() => history.push(`/login`)}>Log in</Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
