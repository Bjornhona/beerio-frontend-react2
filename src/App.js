import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import PrivateRoute from './components/PrivateRoute'
import PublicRoute from './components/PublicRoute'

import Navbar from './components/navbar/Navbar';
import Index from './pages/Index';
import Signup from './pages/signup/Signup';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import Beers from './pages/beers/Beers';
import Favorites from './pages/favorites/Favorites';
// import Recommended from './pages/Recommended';
// import NotFound from './pages/NotFound';
import Beer from './pages/beer/Beer';
// import Play from './pages/Play';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import AuthContext from './lib/authContext';

library.add(faPlayCircle);
library.add(faSearch);
library.add(faHeart);
library.add(faStar);
library.add(faThumbsUp);
library.add(faUser);

const App = () => {

  return (
    <AuthContext>
      <div className="app">
        <Navbar />
        <Switch>
          <Route exact path="/"><Index /></Route>
           <PublicRoute path="/signup"><Signup /></PublicRoute>
           <PublicRoute path="/login"><Login /></PublicRoute>
           <PrivateRoute path="/home"><Home /></PrivateRoute>
           <PrivateRoute exact path="/beers"><Beers/></PrivateRoute>
           <PrivateRoute path="/favorites" component={Favorites} />
           {/* <PrivateRoute path="/recommended" component={Recommended} /> */}
           <PrivateRoute path="/beers/:id"><Beer /></PrivateRoute>
           {/* <PrivateRoute path="/play" component={Play} /> */}
           {/* <Route component={NotFound} /> */}
         </Switch>
      </div>
    </AuthContext>
  );
}

export default App;
