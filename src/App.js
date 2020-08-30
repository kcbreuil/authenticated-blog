import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AppContextProvider } from './context/AppContext';
import Blog from './components/Blog';
import Blogs from './components/Blogs';
import BlogForm from './components/BlogForm';
import Home from './components/Home';
import Login from './components/Login';

const App = () => {
  return (
    <BrowserRouter>
      <AppContextProvider>
        <Switch>
          <Route exact path="/add" component={BlogForm} />
          <Route path="/blogs/:articleId/edit" component={BlogForm} />
          <Route path="/blogs/:articleId" component={Blog} />
          <Route exact path="/blogs" component={Blogs} />
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </AppContextProvider>
    </BrowserRouter>
  );
};

export default App;
