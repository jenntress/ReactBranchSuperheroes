import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './App';
import Home from './HomeContainer';
import HeroesContainer from './Heroes/HeroesContainer';
import PostHeroesContainer from './Heroes/PostHeroesContainer';
import VillainsContainer from './Villains/VillainsContainer';
import PostVillainsContainer from './Villains/PostVillainsContainer';
import './index.css';


ReactDOM.render(
  <Router history={ browserHistory }>
   <Route path="/" component={ App }>
     <IndexRoute component={ Home } />
     <Route path="/home" component={ Home }/>
     <Route path="/heroes" component={ HeroesContainer }/>
     <Route path="/post" component={ PostHeroesContainer }/>
     <Route path="/Villains" component={ VillainsContainer }/>
     <Route path="/postvill" component={ PostVillainsContainer }/>
   </Route>
  </Router>,
  document.getElementById('root')
);
