import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Blog from "./components/articles/Blog";
import Blogs from "./components/articles/Blogs";
import BlogForm from "./components/articles/BlogForm";

const App = () => {
  return;
  <BrowserRouter>
    <Container>
      <Switch>
        <Route path="/articles/new" component={BlogForm} />
        <Route path="/articles/:articleID/edit" component={BlogForm} />
        <Route path="/articles/:articleID" component={Blog} />
        <Route path="/articles" component={Blogs} />
      </Switch>
    </Container>
  </BrowserRouter>;
};

export default App;
