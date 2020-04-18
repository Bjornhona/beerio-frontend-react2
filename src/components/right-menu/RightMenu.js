import React from 'react';
import './RightMenu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const RightMenu = ({ rightMenuList }) => {

  return (
    <div>
      <nav role="navigation">
        <div id="menuToggleRight">
          <input type="checkbox" />
          <FontAwesomeIcon icon='user' className='user-pic' />
          <ul id="menu-user">
            {rightMenuList}
          </ul>
        </div>
      </nav>
    </div> 
  )
};

export default RightMenu;