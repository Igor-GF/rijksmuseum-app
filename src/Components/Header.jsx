import React from 'react';
import Search from './Search';

const Header = ({ setSearchValue }) => {
  return (
    <nav className="header-container">
      <h1>Rembrandt Collection</h1>
      <Search setSearchValue={setSearchValue} />
    </nav>
  )
}

export default Header;