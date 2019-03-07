import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import { TasksContainer } from './components/tasks/TasksContainer';
import AboutPage from './components/about/AboutPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={TasksContainer}/>
    <Route path="about" component={AboutPage}/>
  </Route>
);

