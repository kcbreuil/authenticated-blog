import React, { useContext } from 'react';
import NavBar from './NavBar';
import Signup from './Signup';

const Home = () => {
  return (
    <div className="home">
      <div>
        <NavBar />
        <Signup />
      </div>
    </div>
  );
};

export default Home;
