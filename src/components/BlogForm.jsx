import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import './Blog.css';

const BlogForm = () => {
  const { setBlog } = useContext(AppContext);
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    await axios({
      method: 'POST',
      url: `/articles/new`,
      headers: { Authorization: `Bearer ${token}` },
      data: {
        title: title,
        text: text
      }
    })
      .then(({ data }) => {
        setBlog(data);
        setTitle('');
        setText('');
      })
      .catch((e) => console.log(e.message.toString()));
  };

  return (
    <div>
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

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default BlogForm;
