import React, { useState, useContext } from "react";
import { AppContext } from "../../context/AppContext";
import Card from "react-bootstrap/Card";
import NavBar from "./NavBar";

import "./Blog.css";

const Blogs = () => {
  const { blogs } = useContext(AppContext);
  const [comment, setComment] = useState("");

  return (
    <div>
      {blogs.map((blog) => (
        <Card className="article-container">
          <Card.Body>{blog.title}</Card.Body>
          <Card.Body>{blog.text}</Card.Body>
          <input
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button type="submit">Add Comment</button>
        </Card>
      ))}
      <br></br>
    </div>
  );
};

export default Blogs;
