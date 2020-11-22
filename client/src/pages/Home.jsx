import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import NavBar from '../components/NavBar';
import Login from '../components/Login';
import Logout from '../components/Logout';
import Blogs from '../components/Blogs';

import '../components/Blogs.css';
import '../components/Blog.css';
import daco from '../assets/daco.png';

const Home = () => {
  const { loggedIn, user } = useContext(AppContext);

  return (
    <div className="home">
      <NavBar />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <h1 style={{ textAlign: 'center' }}>Welcome to my WynBlog!</h1>
        <img src={daco} className="displayed" alt="cloud" />
      </div>
      <div style={{ textAlign: 'center', fontSize: '25px' }}>
        {loggedIn ? <Logout /> : <Login />}
      </div>
    </div>
  );
};

export default Home;
