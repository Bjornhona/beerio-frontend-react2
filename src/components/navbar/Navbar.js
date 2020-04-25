import React from 'react';
// import './Navbar.css';
import './Navbar2.css';
// import LeftMenu from '../../components/left-menu/LeftMenu';
// import RightMenu from '../../components/right-menu/RightMenu';
// import { Link } from 'react-router-dom';
import { withAuth } from '../../lib/authContext';

const Navbar = (props) => {
// const Navbar = ({ isLogged, logout, user, node }) => {

  // const rightMenuList = () => {
  //   if (isLogged) {
  //     return (
  //       <>
  //         <li><p>Hi {user.username}</p></li>
  //         <li className="cursor" onClick={logout}>Logout</li>
  //       </>
  //     )
  //   } else {
  //     return (
  //       <>
  //         <Link to='/login' className="link"><li>Log in</li></Link>
  //         <Link to='/signup' className="link"><li>Sign up</li></Link>
  //       </>
  //     )
  //   }
  // }

  // return (
  //   <div className="navbar menu-section" > 
  //     <LeftMenu />
  //     <h3>BEERIO</h3>
  //       <RightMenu rightMenuList={rightMenuList()} ref={node} />
  //   </div>
  // );

  return (
    <nav className='navbar'>
      <ul className='navbar-nav'>{ props.children }</ul>
    </nav>
  )
}

export default withAuth(Navbar);