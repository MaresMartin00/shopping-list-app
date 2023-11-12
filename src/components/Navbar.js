import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import './Navbar.css';
import UserDropdown from './UserDropdown'; // Importujte UserDropdown komponentu

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header>
      <nav>
        <div className="navigation">
          <div className="nav-header">
            <button onClick={() => setShowMenu(!showMenu)}>
              <GiHamburgerMenu className="hamburger-icon" />
            </button>
          </div>
          <div className={`${showMenu ? 'nav-list show' : 'nav-list hide'}`}>
            <ul>
              <li>
                <NavLink to="/ShoppingLists">Seznamy</NavLink>
              </li>
              <li>
                <NavLink to="/Archived">Archivované</NavLink>
              </li>
            </ul>
            <UserDropdown className="user-dropdown" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;