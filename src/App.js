import React, {useState, useEffect, useRef} from 'react';
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
import Recommended from './pages/recommended/Recommended';
// import NotFound from './pages/NotFound';
import Beer from './pages/beer/Beer';
import Play from './pages/play/Play';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import AuthContext from './lib/authContext';
import NavItem from './components/navbar/nav-item/NavItem';
import Dropdown from './components/navbar/dropdown/Dropdown';

library.add(faPlayCircle);
library.add(faSearch);
library.add(faHeart);
library.add(faStar);
library.add(faThumbsUp);
library.add(faUser);
library.add(faBars);

const App = () => {
  const node = useRef();
  const [openLeft, setOpenLeft] = useState(false);
  const [openRight, setOpenRight] = useState(false);

  // useEffect(() => {
  //   document.addEventListener("mousedown", handleClick);

  //   return () => {
  //     document.removeEventListener("mousedown", handleClick);
  //   };
  // }, []);

  // const handleClick = (event) => {
  //   if (node.current.contains(event.target)) {
  //     // inside click
  //     return;
  //   }
  //   // outside click 
  //   //navigation menuToggleRight input.checkbox
  // };


  return (
    <AuthContext>
      <div className="app">
        <Navbar node={node}>
          <NavItem icon={faBars} isOpen={openLeft} handleOpen={() => setOpenLeft(!openLeft)}>
            <Dropdown menuLeft handleClickItem={() => setOpenLeft(false)} />
          </NavItem>
          <h2 className='nav-headline'>Beerio</h2>
          <NavItem icon={faUser} isOpen={openRight} handleOpen={() => setOpenRight(!openRight)}>
            <Dropdown menuRight handleClickItem={() => setOpenRight(false)} />
          </NavItem>
        </Navbar>
        <Switch>
          <Route exact path="/"><Index /></Route>
           <PublicRoute path="/signup"><Signup /></PublicRoute>
           <PublicRoute path="/login"><Login /></PublicRoute>
           <PrivateRoute path="/home"><Home /></PrivateRoute>
           <PrivateRoute exact path="/beers"><Beers/></PrivateRoute>
           <PrivateRoute path="/favorites" component={Favorites} />
           <PrivateRoute path="/recommended" component={Recommended} />
           <PrivateRoute path="/beers/:id"><Beer /></PrivateRoute>
           <PrivateRoute path="/play" component={Play} />
           {/* <Route component={NotFound} /> */}
         </Switch>
      </div>
    </AuthContext>
  );
}

export default App;
