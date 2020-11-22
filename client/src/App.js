import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AppContextProvider } from './context/AppContext';
import Blog from './components/Blog';
import Blogs from './components/Blogs';
import BlogForm from './components/BlogForm';
import Home from './pages/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import PrivateRoute from './components/PrivateRoute';
import Dashboard from './pages/Dashboard';

const App = () => {
  return (
    <BrowserRouter>
      <AppContextProvider>
        <Switch>
          {/* <Route path="/blogs/:articleId" component={Blog} /> */}
          <Route path="/blog" component={Blog} />
          <Route exact path="/blogs" component={Blogs} />
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <PrivateRoute exact path="/add" component={BlogForm} />
          <PrivateRoute path="/blogs/:articleId/edit" component={BlogForm} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
        </Switch>
      </AppContextProvider>
    </BrowserRouter>
  );
};

export default App;
