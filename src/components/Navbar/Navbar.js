import {React, useState}from 'react';
import { FaTimes, FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { NavbarContainer, NavbarWrapper, LogoContainer, Logo, MenuContainer, MenuItem, MenuLink, MobileIcon, SearchIconContainer, SearchIcon } from './Navbar.style';

const Navbar = () => {
  const [isClick, setIsClick] = useState(false);

  const MobileIconClickHandler = () => setIsClick(prev => !prev)

  return (
    <IconContext.Provider value={{color: '#002C5F'}}>
      <NavbarContainer>
        <NavbarWrapper>
          <LogoContainer>
              <Logo to='/' />
          </LogoContainer>
          <MobileIcon onClick={MobileIconClickHandler}>
            {isClick ? <FaTimes/> : <FaBars />}
          </MobileIcon>
          <MenuContainer isClick={isClick}>
            <MenuItem>
              <MenuLink to='/'>
                IONIQ 5
              </MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink to='/'>
                IONIQ 6
              </MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink to='/'>
                NEXO
              </MenuLink>
            </MenuItem>
          </MenuContainer>
          <SearchIconContainer>
            <SearchIcon />
          </SearchIconContainer>
        </NavbarWrapper>
      </NavbarContainer>
    </IconContext.Provider>
  )
}

export default Navbar