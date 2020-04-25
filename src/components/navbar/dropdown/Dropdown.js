import React from 'react';
import './Dropdown.css';
import DropdownItem from '../dropdownItem/DropdownItem';
import { faSignInAlt, faUserPlus, faHome, faBeer, faHeart, faThumbsUp, faGamepad } from '@fortawesome/free-solid-svg-icons';

const Dropdown = (props) => {

  return (
    props.menuRight ?
    <ul className="dropdown dropdownRight">
      <DropdownItem leftIcon={faSignInAlt}>Login</DropdownItem>
      <DropdownItem leftIcon={faUserPlus}>Signup</DropdownItem>
    </ul> :
    <ul className="dropdown dropdownLeft">
      <DropdownItem leftIcon={faHome}>Home</DropdownItem>
      <DropdownItem leftIcon={faBeer}>Beers</DropdownItem>
      <DropdownItem leftIcon={faHeart}>Favorites</DropdownItem>
      <DropdownItem leftIcon={faThumbsUp}>Recommended</DropdownItem>
      <DropdownItem leftIcon={faGamepad}>Play</DropdownItem>
    </ul>
  )
}

export default Dropdown;