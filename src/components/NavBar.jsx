import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
  return (
    <Navbar
      style={{
        width: '100%'
      }}
    >
      <Navbar.Brand href="/">WynBlog</Navbar.Brand>
      <Navbar.Brand href="/blogs">Read all the things</Navbar.Brand>
      <Navbar.Brand href="/add">Add a thing</Navbar.Brand>
      <Navbar.Brand href="/add">Edit a thing</Navbar.Brand>
    </Navbar>
  );
};

export default NavBar;
