import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { useParams } from 'react-router-dom';
import { Container, Form, Button, Card } from 'react-bootstrap';
import axios from 'axios';
import NavBar from './NavBar';
import './Blog.css';
import './Blogs.css';
const Blog = () => {
  const { blog, setBlog, comments, setComments } = useContext(AppContext);
  const [commentInputShow, setCommentInputShow] = useState(false);
  const [text, setText] = useState('');
  const { id } = useParams();

  useEffect(() => {
    getBlog();
    getComments();
  }, []);

  const getBlog = async () => {
    await axios.get(`/blogs/${blog._id}`).then(({ data }) => {
      setBlog(data);
    });
  };

  const getComments = async () => {
    await axios.get(`/${id}/comments`).then(({ data }) => {
      setComments(data);
    });
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    console.log(text);
    axios({
      method: 'POST',
      url: `/comments/${id}/add`,
      data: { text }
    })
      .then(() => setCommentInputShow(false))
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <NavBar />
      <Container className="mt-4">
        <h3>{blog && blog.title}</h3>
        <p style={{ whiteSpace: 'pre-line' }}>{blog && blog.text}</p>
        <Container
          style={{ borderBottom: '1px solid gray' }}
          className="d-flex justify-content-between"
        >
          <h5 className="mt-4">Comments</h5>
          <span
            className="mt-4"
            onClick={() => setCommentInputShow(!commentInputShow)}
          >
            Leave a Comment
          </span>
        </Container>
        {comments.length < 1 ? (
          <Container>
            <p className="mt-2">No Comments</p>
          </Container>
        ) : (
          comments.map((comment) => (
            <Card key={comment._id} className="mt-2">
              <Card.Body>{comment.text}</Card.Body>
              <Card.Footer>- @anonymous</Card.Footer>
            </Card>
          ))
        )}
        {commentInputShow && (
          <Form onSubmit={handleCommentSubmit} className="mt-2">
            <Form.Group>
              <Form.Control
                value={text}
                type="text"
                placeholder="Add your comment here.."
                onChange={(e) => setText(e.target.value)}
              />
            </Form.Group>
            <Button type="submit">Add Comment</Button>
          </Form>
        )}
      </Container>
    </div>
  );
};

export default Blog;
