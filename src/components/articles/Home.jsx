import React, { useContext } from "react";
import NavBar from "./NavBar";
import { AppContext } from "../../context/AppContext";
import Login from "./Login";
import BlogForm from "./BlogForm";
import Logout from "./Logout";
import Blogs from "./Blogs";

const Home = () => {
  const { loggedIn } = useContext(AppContext);
  return (
    <div className="home">
      {loggedIn ? (
        <div>
          <NavBar />
          <BlogForm />
        </div>
      ) : (
        <div>
          <NavBar />
          <Blogs />
        </div>
      )}
    </div>
  );
};

export default Home;
