import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './App';
import Home from './HomeContainer';
import HeroesContainer from './Heroes/HeroesContainer';
import PostHeroesContainer from './Heroes/PostHeroesContainer';
import './index.css';


ReactDOM.render(
  <Router history={ browserHistory }>
   <Route path="/" component={ App }>
     <IndexRoute component={ Home } />
     <Route path="/heroes" component={ HeroesContainer }/>
     <Route path="/home" component={ Home }/>
     <Route path="/post" component={ PostHeroesContainer }/>
   </Route>
  </Router>,
  document.getElementById('root')
);