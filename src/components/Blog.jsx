import React, { useContext, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import NavBar from './NavBar';

const Blog = ({ match }) => {
  const { blog, setBlog } = useContext(AppContext);

  useEffect(() => {
    axios
      .get(`/blogs/${match.params.articleId}`)
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
