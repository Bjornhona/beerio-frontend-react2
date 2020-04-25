import React, { useState } from 'react';
import './NavItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavItem = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <li className='nav-item'>
      <span
        className='icon-button'
        onClick={() => setOpen(!open)}
      >
        <FontAwesomeIcon icon={props.icon} className='icon' />
      </span>
      {open && props.children}
    </li>
  )
}

export default NavItem;