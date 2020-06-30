import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AppContextProvider } from "./context/AppContext";
import Blog from "./components/articles/Blog";
import Blogs from "./components/articles/Blogs";
import BlogForm from "./components/articles/BlogForm";
import Home from "./components/articles/Home";

const App = () => {
  return (
    <BrowserRouter>
      <AppContextProvider>
        <Switch>
          <Route exact path="/add" component={BlogForm} />
          <Route path="/articles/:articleId/edit" component={BlogForm} />
          <Route path="/articles/:articleId" component={Blog} />
          <Route exact path="/articles" component={Blogs} />
          <Route exact path="/" component={Home} />
        </Switch>
      </AppContextProvider>
    </BrowserRouter>
  );
};

export default App;
