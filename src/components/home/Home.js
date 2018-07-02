import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const StyledLink = styled.a`
  width: auto;
`;

function Home({ navList }){
  const navElements = navList.map(nav => {
    return (
      <StyledLink key={nav.linkName} href={nav.destination}><h2>{nav.linkName}</h2></StyledLink>
    )
  });
  return(
    <MainWrapper>
      <h1>Nashlok Learning</h1>
      {navElements}
    </MainWrapper>
  )
}

const navListShape = PropTypes.shape({
  linkName: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired
})

Home.propTypes = {
  navList: PropTypes.arrayOf(navListShape)
}

Home.defaultProps = {
  navList: []
}

export default Home;
