import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const BlogForm = ({ history }) => {
  const initialState = { title: "", text: "" };
  const [values, setValues] = useState(initialState);
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("/articles", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    })
      .then((response) => {
        if (response.ok) {
          alert("Article successfully created");
          return response.json().then((article) => {
            history.push(`/articles/${article._id}`);
          });
        }
      })
      .catch((error) => alert(error));
  };
  return (
    <div>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Title of your blog..."
            required={true}
            onChange={(e) => setValues({ ...values, title: e.target.value })}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Text</Form.Label>
          <Form.Control
            as="textarea"
            rows="5"
            placeholder="Text for your blog post..."
            required={true}
            onChange={(e) => setValues({ ...values, text: e.target.value })}
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
