import React from 'react';
import './HomeItem.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const HomeItem = (props) => {
  const { link, h2Text, pText, iconName, iconClass } = props;

  return (
    <Link to={link} >
      <div className='home-container'>
        <div className="home-text">
          <h2>{h2Text.toUpperCase()}</h2>
          <p>{pText}</p>
        </div>
        <div className="home-icon">
          <FontAwesomeIcon icon={iconName} className={iconClass} />
        </div>
      </div>
    </Link>
  )
}

export default HomeItem;