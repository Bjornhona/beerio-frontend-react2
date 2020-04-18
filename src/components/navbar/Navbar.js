import React from 'react';
import './Navbar.css';
import LeftMenu from '../../components/left-menu/LeftMenu';
import RightMenu from '../../components/right-menu/RightMenu';
import { Link } from 'react-router-dom';
import { withAuth } from '../../lib/authContext';

const Navbar = ({ isLogged, logout, user }) => {

  const rightMenuList = () => {
    if (isLogged) {
      return (
        <>
          <li><p>Hi {user.username}</p></li>
          <li className="cursor" onClick={logout}>Logout</li>
        </>
      )
    } else {
      return (
        <>
          <Link to='/login' className="link"><li>Log in</li></Link>
          <Link to='/signup' className="link"><li>Sign up</li></Link>
        </>
      )
    }
  }

  return (
    <div className="navbar menu-section">
      <LeftMenu />
      <h3>BEERIO</h3>
        <RightMenu rightMenuList={rightMenuList()} />
    </div>
  );
}

export default withAuth(Navbar);