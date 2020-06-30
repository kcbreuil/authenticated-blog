import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import NavBar from "./NavBar";
import axios from "axios";

const Blog = ({ match }) => {
  const { blog, setBlog } = useContext(AppContext);

  useEffect(() => {
    axios
      .get(`/articles/${match.params.articleId}`)
      .then((blog) => setBlog(blog))
      .catch((error) => alert(error));
  });
  return (
    <div>
      <NavBar />
      <div>
        <h1>{blog.title}</h1>
        <p>{blog.text}</p>
      </div>
    </div>
  );
};

export default Blog;
