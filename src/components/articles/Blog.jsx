import React, { useState, useContext, useEffect } from "react";
// import { AppContext } from "../../context/AppContext";
import NavBar from "./NavBar";
import axios from "axios";

const Blog = ({ match }) => {
  // const { blogs } = useContext(AppContext);
  const [article, setArticle] = useState({});

  useEffect(() => {
    axios
      .get(`/articles/${match.params.articleId}`)
      .then((article) => setArticle(article))
      .catch((error) => alert(error));
  });
  return (
    <div>
      <NavBar />
      <div>
        <h1>{article.title}</h1>
        <p>{article.text}</p>
      </div>
    </div>
  );
};

export default Blog;
