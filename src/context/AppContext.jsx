import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [blogs, setBlogs] = useState([]);

  const token = localStorage.getItem('token');

  useEffect(() => {
    if (token) {
      axios
        .get('/users', {
          headers: { Authorization: `Bearer ${token}` }
        })
        .then(({ data }) => {
          setUser(data);
          setLoggedIn(true);
        })
        .catch((e) => console.log(e.message.toString()));
    }
  }, [token]);

  useEffect(() => {
    if (token) {
      axios
        .get(`/blogs`, { headers: { Authorization: `Bearer ${token}` } })
        .then(({ data }) => {
          setBlogs(data);
        })
        .catch((e) => console.log(e.message.toString()));
    }
  }, [loggedIn, token]);

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        loggedIn,
        setLoggedIn,
        email,
        setEmail,
        blogs,
        setBlogs,
        username,
        setUsername,
        password,
        setPassword
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
