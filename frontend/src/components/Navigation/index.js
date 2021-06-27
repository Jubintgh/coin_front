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
      <>
       <ProfileButton user={sessionUser} />
       <img className={'curr__profpic'} src={sessionUser?.profilePicUrl} alt={'profile pic'}/>
      </>
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
      <input id="search-bar" type="text" placeholder="Search" onKeyUp={(e) => search(e)} />
      <li className={'navbar'}>
        {isLoaded && sessionLinks}
      </li>
    </ul>
    </>
  );
}

export default Navigation;