import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <div className="navbar-main">
        <ProfileButton user={sessionUser} />
        {/* <img src="../../../public/logo.png" alt="webicon"/> */}
        <input id="search-bar" type="text" placeholder="Search" onKeyUp={(e) => search(e)} />
        <img className={'curr__profpic'} src={sessionUser?.profilePicUrl} alt={'profile pic'}/>
      </div>
    );
  } else {
    sessionLinks = (
      <>
        <NavLink to="/login">Log In</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
      </>
    );
  }

  const search = (e) => {
    if (e.keyCode === 13){
      
    }
  }

  return (
    <>
      <ul className={'navbar-1'}>
        <li className={'navbar'}>
          {isLoaded && sessionLinks}
          {/* <input id="search-bar" type="text" placeholder="Search" onKeyUp={(e) => search(e)} /> */}
          {/* {isLoaded && <img className={'curr__profpic'} src={sessionUser?.profilePicUrl} alt={'profile pic'}/>} */}
        </li>
      </ul>
    </>
  );
}

export default Navigation;