import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import axios from 'axios';

const Logout = () => {
  const { setUser, setLoggedIn } = useContext(AppContext);

  const logOut = async () => {
    const token = localStorage.getItem('token');
    await axios({
      method: 'POST',
      url: `/users/logout`,
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(({ data }) => {
        console.log(data, 'logout response');
        localStorage.removeItem('token');
        setUser({});
        setLoggedIn(false);
      })
      .catch((e) => console.log(e.message.toString()));
  };
  return (
    <button className="btn btn-danger" onClick={logOut}>
      Log out
    </button>
  );
};

export default Logout;
