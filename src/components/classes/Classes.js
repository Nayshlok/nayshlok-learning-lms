import React from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';

const ClassContainer = styled.div`
  display: flex;
  height: 100%;
`;

const ClassMain = styled.div`
  margin: 0 0 0 20px;
`;

class ClassView extends React.Component{



  render(){
    return (
      <ClassContainer>
        <Sidebar />
        <ClassMain>
          Hello World
        </ClassMain>
      </ClassContainer>
    )
  }
}


export default ClassView;
