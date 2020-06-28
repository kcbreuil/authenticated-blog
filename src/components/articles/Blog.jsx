import React, { useState, useEffect } from "react";

const Blog = ({ match }) => {
  const [blog, setBlog] = useState({});

  useEffect(() => {
    fetch(`/articles/${match.params.articleId}`)
      .then((response) => response.json())
      .then((blog) => setBlog(blog))
      .catch((error) => alert(error));
  });
  return (
    <article>
      <h1>{blog.title}</h1>
      <p>{blog.text}</p>
    </article>
  );
};

export default Blog;
