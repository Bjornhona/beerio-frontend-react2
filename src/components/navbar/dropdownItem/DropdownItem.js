import React from 'react';
import './DropdownItem.css';
import NavItem from '../nav-item/NavItem';
import { Link } from 'react-router-dom';

const DropdownItem = (props) => {

  return (
    <Link to={props.link} className="menu-item" onClick={()=> {
      props.logout && props.logout();
      props.handleClickItem();
    }}>
      <NavItem 
        className='icon-left' 
        icon={props.leftIcon} 
      />
      {props.children}
    </Link>
  )
}

export default DropdownItem;