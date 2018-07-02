import React, { Component } from 'react';
import LmsRouter from './navigation/LmsRouter';
import styled from 'styled-components';
import './App.css';

const Container = styled.div`
  height: 100%;
`;

class App extends Component {
  render() {
    return (
      <Container className="App">
        <LmsRouter />
      </Container>
    );
  }
}

export default App;
