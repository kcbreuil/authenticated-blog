import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import Navbar from "react-bootstrap/Navbar";
import Login from "./Login";
import Logout from "./Logout";

const NavBar = () => {
  const { user } = useContext(AppContext);
  return (
    <Navbar
      style={{
        height: "300px",
        backgroundColor: "lightgrey",
        width: "100%",
      }}
    >
      <Navbar.Brand href="/">WynBlog</Navbar.Brand>
      <Navbar.Brand href="/articles">Read all the things</Navbar.Brand>
      <Navbar.Brand href="/add">Add a thing</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          Signed in as: <a href="#login">{user && user.username}</a>
          <Login />
          <Logout />
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
