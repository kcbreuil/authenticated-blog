import React, { useContext } from 'react';
import NavBar from './NavBar';
import Login from './Login';

const Home = () => {
  return (
    <div className="home">
      <div>
        <NavBar />
        <Login />
      </div>
    </div>
  );
};

export default Home;
