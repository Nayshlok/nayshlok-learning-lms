import React from 'react';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  border: 1px solid black;
  height: 100%;
  width: 200px;
`;

function Sidebar(){
  return (
    <SidebarContainer>
      Classes
    </SidebarContainer>
  );
}


export default Sidebar;
