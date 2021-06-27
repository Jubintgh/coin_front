import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';



function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  
  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };
  
  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);
  
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
    <>
      <button className={'menu-btn'} onClick={openMenu}>
        {/* <i className="fas fa-user-circle"/> */}
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
      </button>
      {showMenu && (
        <ul className="profile-dropdown">
          {/* <input id="search-bar" type="text" placeholder="Search"/> */}
          <li><a href={'/'}>Home</a></li>
          <li><a href={'/products/new'}>Post new product</a></li>
          <li><a href={'/profile'}>{user.username}</a></li>
          <li>
            <button className={'logout-btn'} onClick={logout}>Log Out</button>
          </li>
        </ul>
      )}
    </>
  );
}

export default ProfileButton;