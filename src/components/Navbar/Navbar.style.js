import styled from "styled-components";
import { Container } from "../../globalStyles";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.nav`
  width: 100%;
  height: 80px;
  background: transparent;
  position: sticky;
  top: 0;
  z-index: 999;
`
export const NavbarWrapper = styled(Container)`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const LogoContainer = styled.div`
  width: 200px;
  height: 80px;
`

export const Logo = styled(Link)`
  background: url('/assets/logo.png') no-repeat 50%;
  width: 149px;
  height: 100%;
  display: inline-block;
  line-height: 70px;
  background-size: 100% auto;
`;

export const MenuContainer = styled.ul`
  display: flex;
  text-align: center;
  align-items: center;
  list-style: none;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({isClick}) => (isClick ? 0: '-100%')};
    transition: all 0.5s ease;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px){
    display: block;
    font-size: 1.8rem;
    /* position: absolute; */
    cursor: pointer;
  }
`;

export const MenuItem = styled.li`
  padding: 0.5rem 1rem;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 960px) {
    width: 100%;
    padding: 2rem;
  }
`;

export const MenuLink = styled(Link)`
  text-decoration: none;
  height: 100%;
  display: flex;
  color: #002C5F;
  justify-content: center;
  align-items: center;
`;