import React from 'react';
import { withAuth } from '../../lib/authContext';
import HomeItem from './home-item/HomeItem';
import './Home.css';

const Home = () => {

  return (
    <div className="home-div section">
      <HomeItem 
        link='/beers' 
        h2Text='Explore' 
        pText='Read about the best beers' 
        iconName='search' 
        iconClass='fontawesome blue' />
      <HomeItem 
        link='/favorites' 
        h2Text='Favourites' 
        pText='Remember the beers you love' 
        iconName='heart' 
        iconClass='fontawesome red' />
      <HomeItem 
        link='/recommended' 
        h2Text='Recommended' 
        pText='The most wanted beers' 
        iconName='thumbs-up' 
        iconClass='fontawesome lila' />
      <HomeItem 
        link='/play' 
        h2Text='Play' 
        pText='Your beer personality' 
        iconName='play-circle' 
        iconClass='fontawesome yellow' />
    </div>
  )
}

export default withAuth(Home);