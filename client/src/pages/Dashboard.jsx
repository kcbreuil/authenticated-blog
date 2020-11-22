import React, { useContext, useEffect, useState } from 'react';
import { Card, Button, Container } from 'react-bootstrap';
import axios from 'axios';
import { AppContext } from '../context/AppContext';
import NavBar from '../components/NavBar';
import { useParams, useHistory } from 'react-router-dom';

const Dashboard = ({ id }) => {
  const { user, loggedIn } = useContext(AppContext);
  const [myBlogs, setMyBlogs] = useState([]);
  const token = localStorage.getItem('token');
  const history = useHistory();

  // useEffect(() => {
  //   if (user && token) {
  //     axios
  //       .get('/blogs/user', {
  //         headers: { Authorization: `Bearer ${token}` }
  //       })
  //       .then((response) => console.log(response));
  //   }
  // }, [user, setMyBlogs, myBlogs]);

  useEffect(() => {
    if (user) {
      axios
        .get(`/blogs/${id}`, {
          headers: { Authorization: `Bearer ${token}` }
        })
        .then(({ data }) => {
          setMyBlogs(data);
          console.log(data);
        })
        .catch((e) => console.log(e.message.toString()));
    }
  }, [token, user, myBlogs, setMyBlogs]);

  const addNewBlog = () => {
    if (user) {
      history.push('/add');
    }
  };
  const editBlog = () => {};

  const deleteBlog = (id, req, res) => {
    try {
      axios({
        method: 'DELETE',
        url: `/blogs/${id}`,
        headers: { Authorization: `Bearer ${token}` }
      });
      res.json('Item has been deleted');
      console.log('is it here?');
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <NavBar />
      <h3>Welcome to your Dashboard!</h3>
      <Container>
        <h4>Your Blog Posts</h4>
        <Button onClick={addNewBlog}>Add a Blog</Button>
        {myBlogs.map((blog) => (
          <Card>
            <Card.Body>{blog.title}</Card.Body>
            <Card.Body>{blog.text}</Card.Body>
            <Card.Footer>
              <Button variant="primary">Edit</Button>
              <Button onClick={{ deleteBlog }} variant="danger">
                X
              </Button>
            </Card.Footer>
          </Card>
        ))}
      </Container>
    </div>
  );
};

export default Dashboard;
