import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './nav_components/NavbarElements';



const Navigation = () => {
  return (
    <>
      <Nav>
        <Bars />
          <NavMenu>
              <NavLink to='/about' activeStyle>
                About
              </NavLink>
              <NavLink to='/join' activeStyle>
                  Join
              </NavLink>
          </NavMenu>
          <NavBtn>
          <NavBtnLink to='/join'>Join</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
}

export default Navigation;