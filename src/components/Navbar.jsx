import React from "react";

const Navbar = () => {
  return (
    <div>
      <Navbar>
        <Navbar.Brand href="#home">BlogLyfe</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Mark Twain</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navbar;
