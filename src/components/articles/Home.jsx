import React, { useState } from "react";
import NavBar from "./NavBar";

const Home = () => {
  const [user, setUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div>
      <NavBar />
    </div>
  );
};

export default Home;
