import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import NavBar from './NavBar';
import Login from './Login';

const Home = () => {
  const { loggedIn, user } = useContext(AppContext);

  return (
    <div className="home">
      <NavBar />
      <div style={{ textAlign: 'center', fontSize: '25px' }}>
        {loggedIn ? `Welcome back` : <Login />}
        {user.map((user) => (
          <p key={user.id}>{user.username}</p>
        ))}
      </div>
    </div>
  );
};

export default Home;
