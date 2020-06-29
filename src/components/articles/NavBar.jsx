import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
  const { user } = useContext(AppContext);
  return (
    <Navbar
      style={{
        height: "100px",
        backgroundColor: "lightgrey",
        width: "100%",
      }}
    >
      <Navbar.Brand href="#home">WynBlog</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          Signed in as: <a href="#login">{user.username}</a>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
