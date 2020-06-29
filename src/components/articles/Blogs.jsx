import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import Card from "react-bootstrap/Card";
import NavBar from "./NavBar";

const Blogs = () => {
  const { blogs } = useContext(AppContext);

  return (
    <div>
      <NavBar />
      {blogs.map((blog) => (
        <Card>
          <Card.Body>{blog.title}</Card.Body>
          <Card.Body>{blog.text}</Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Blogs;
