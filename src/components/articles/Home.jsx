import React, { useContext } from "react";
import NavBar from "./NavBar";
import Blogs from "./Blogs";
import { AppContext } from "../../context/AppContext";
import Login from "./Login";
import BlogForm from "./BlogForm";
import Logout from "./Logout";

const Home = () => {
  const { loggedIn } = useContext(AppContext);
  return (
    <div>
      {loggedIn ? (
        <div>
          <BlogForm />
          <Logout />
        </div>
      ) : (
        <div>
          <Login />
        </div>
      )}
    </div>
  );
};

export default Home;
