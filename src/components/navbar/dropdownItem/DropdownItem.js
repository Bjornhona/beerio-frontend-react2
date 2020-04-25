import React from 'react';
import './DropdownItem.css';
import NavItem from '../nav-item/NavItem';

const DropdownItem = (props) => {
  return (
    <a href="#" className='menu-item'>
      <NavItem className='icon-left' icon={props.leftIcon} />
      {props.children}
    </a>
  )
}

export default DropdownItem;