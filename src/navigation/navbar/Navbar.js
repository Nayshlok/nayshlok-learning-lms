import React from 'react';
import styled from 'styled-components';

const NavContainer = styled.div`
  margin: 30px 0 20px 20px;
  border-bottom: 1px solid black;
`;

const StlyedLink = styled.a`
  text-decoration: none;
  border: 1px solid black;
  background-color: aliceblue;
  padding: 10px;
  display: inline-block;
`;

function Navbar({ navLinks }){

  const links = navLinks.map((nav) => {
    return <StlyedLink href={nav.destination}>{nav.linkName}</StlyedLink>
  })

  return (
    <NavContainer>
      {links}
    </NavContainer>
  )
}

export default Navbar;
