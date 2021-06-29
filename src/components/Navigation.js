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
      <Nav style={{fontFamily: 'Yellowtail'}}>
        <h1>Adventure to Parenthood</h1>
        <Bars />
          <NavMenu style={{fontFamily: 'Montserrat'}}>
              <NavLink to='/about' activeStyle>
                <h2>About</h2>
              </NavLink>
              <NavLink to='/join' activeStyle>
                  <h2>Join</h2>
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