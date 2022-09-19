import {React, useState}from 'react';
import { FaTimes, FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { NavbarContainer, NavbarWrapper, LogoContainer, Logo, MenuContainer, MenuItem, MenuLink, MobileIcon } from './Navbar.style';

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
                승용
              </MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink to='/'>
                SUV
              </MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink to='/'>
                수소/전기차
              </MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink to='/'>
                N/N Line
              </MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink to='/'>
                소형상용&택시
              </MenuLink>
            </MenuItem>
          </MenuContainer>
        </NavbarWrapper>
      </NavbarContainer>
    </IconContext.Provider>
  )
}

export default Navbar