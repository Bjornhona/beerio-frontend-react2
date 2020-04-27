import React from 'react';
import Button from '../components/button/Button';
import './index-components/Index.css';

const Index = () => {
  
  return (
    <div className="index-div">
      <span className="index-background"></span>
      <span className="light-overlay"></span>
      <span className="dark-box">
        <span className="beerio-header">The happy Beer Gormand</span>
        <span className="beerio-title">Beerio</span>
        <span className="beerio-description">Sign up to learn about all your favorite beers.</span>
        <span className="beerio-description">We'll help you remember the good moments!</span>
        <div className="buttons-container">
          <Button link="/login" text='Log in' />
          <Button link="/signup" text='Sign up' />
        </div>
      </span>
    </div>
  );
}

export default Index;