import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { useHistory } from 'react-router-dom';
import { Form, Button, Container } from 'react-bootstrap';
import swal from 'sweetalert';
import axios from 'axios';
import './Blog.css';

const BlogForm = () => {
  const { setBlog } = useContext(AppContext);
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    await axios({
      method: 'POST',
      url: `/blogs/new`,
      headers: { Authorization: `Bearer ${token}` },
      data: {
        title: title,
        text: text
      }
    }).then(({ data }) => {
      setBlog(data);
      swal('Blog post added');
      history.push('/dashboard');
    });
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit} className="blog-form">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Title of your blog..."
            required={true}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Text</Form.Label>
          <Form.Control
            as="textarea"
            rows="5"
            placeholder="Text for your blog post..."
            required={true}
            onChange={(e) => setText(e.target.value)}
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          // onClick={() => history.push('/blogs/{id}')}
        >
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default BlogForm;
