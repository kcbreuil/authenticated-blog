import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AppContextProvider } from './context/AppContext';
import Blog from './components/Blog';
import Blogs from './components/Blogs';
import BlogForm from './components/BlogForm';
import Home from './components/Home';

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
