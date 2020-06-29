import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import Card from "react-bootstrap/Card";
import NavBar from "./NavBar";
import { InputGroup, FormControl } from "react-bootstrap";

const Blogs = () => {
  const { blogs } = useContext(AppContext);

  return (
    <div>
      <NavBar />
      {blogs.map((blog) => (
        <Card>
          <Card.Body>{blog.title}</Card.Body>
          <Card.Body>{blog.text}</Card.Body>
        </Card>
      ))}
      <br></br>
      <label htmlFor="basic-url">comments</label>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="inputGroup-sizing-default">
            Default
          </InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
    </div>
  );
};

export default Blogs;
