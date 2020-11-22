import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';

import './Blog.css';
import './Blogs.css';

const Blogs = () => {
  const { blogs } = useContext(AppContext);

  return (
    <div className="container">
      <NavBar />
      {blogs.map((blog) => (
        <Link to={`/blogs/${blog._id}`}>
          <Card className="article-container" key={blog._id}>
            <Card.Body>{blog.title}</Card.Body>
            <Card.Body>{blog.text}</Card.Body>
          </Card>
        </Link>
      ))}
      <br></br>
    </div>
  );
};

export default Blogs;
