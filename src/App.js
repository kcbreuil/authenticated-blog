import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AppContextProvider } from "./context/AppContext";
import { Container } from "react-bootstrap";
import Blog from "./components/articles/Blog";
import Blogs from "./components/articles/Blogs";
import BlogForm from "./components/articles/BlogForm";
import Home from "./components/articles/Home";

const App = () => {
  return (
    <BrowserRouter>
      <AppContextProvider>
        <Container>
          <Switch>
            <Route path="/articles/new" component={BlogForm} />
            <Route path="/articles/:articleID/edit" component={BlogForm} />
            <Route path="/articles/:articleID" component={Blog} />
            <Route path="/articles" component={Blogs} />
            <Route path="/" component={Home} />
          </Switch>
        </Container>
      </AppContextProvider>
    </BrowserRouter>
  );
};

export default App;
