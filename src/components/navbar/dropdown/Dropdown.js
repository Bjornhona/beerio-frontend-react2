import React from 'react';
import './Dropdown.css';
import DropdownItem from '../dropdownItem/DropdownItem';
import { faSignInAlt, faUserPlus, faHome, faBeer, faHeart, faThumbsUp, faGamepad, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { withAuth } from '../../../lib/authContext';

const Dropdown = (props) => {

  const { isLogged, logout, user, menuRight } = props;

  return (
    menuRight ?
      isLogged ?
        <ul className="dropdown dropdownRight">
          <li className="hi-user">Hi {user.username}</li>
          <DropdownItem leftIcon={faSignOutAlt} link={"/login"} logout={logout}>Logout</DropdownItem>
        </ul>
      :
      <ul className="dropdown dropdownRight">
        <DropdownItem leftIcon={faSignInAlt} link={"/login"}>Login</DropdownItem>
        <DropdownItem leftIcon={faUserPlus} link={"/signup"}>Signup</DropdownItem>
      </ul> :
    <ul className="dropdown dropdownLeft">
      <DropdownItem leftIcon={faHome} link={'/home'}>Home</DropdownItem>
      <DropdownItem leftIcon={faBeer} link={"/beers"}>Beers</DropdownItem>
      <DropdownItem leftIcon={faHeart} link={"/favorites"}>Favorites</DropdownItem>
      <DropdownItem leftIcon={faThumbsUp} link={"/recommended"}>Recommended</DropdownItem>
      <DropdownItem leftIcon={faGamepad} link={"/play"}>Play</DropdownItem>
    </ul>
  )
}

export default withAuth(Dropdown);