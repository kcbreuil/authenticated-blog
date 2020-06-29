import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import NavBar from "./NavBar";

const BlogForm = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    await axios({
      method: "POST",
      url: `/articles`,
      headers: { Authorization: `Bearer ${token}` },
      data: {
        title: title,
        text: text,
      },
    })
      .then(({ data }) => console.log(data))
      .catch((e) => console.log(e.message.toString()));
  };
  return (
    <div>
      <NavBar />
      <Form>
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

        <Button variant="primary" type="submit" onSubmit={handleSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default BlogForm;
