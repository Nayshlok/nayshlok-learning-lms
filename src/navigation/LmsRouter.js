import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Home from '../components/home/Home';
import Classes from '../components/classes/Classes';
import Navbar from './navbar/Navbar';
import Login from '../components/login/Login';
import Auth from '../authentication/Auth';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 90%;
  height: 100%;
`;

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}

export default class LmsRouter extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      navLinks: []
    };

    this.getNavigation = this.getNavigation.bind(this);
  }

  async getNavigation(){
    const response = await fetch('http://localhost:3100/navigation', {mode: 'cors'});
    const navLinks = await response.json();
    this.setState({navLinks});
  }

  componentDidMount(){
    this.getNavigation();
  }

  render(){
    return (
      <PageContainer>
      <Navbar navLinks={this.state.navLinks} />
        <Router>
          <Switch>
            <Route exact path="/" render={() => <Home navList={this.state.navLinks} /> }/>
            <Route path="/login" render={() => <Login />} />
            <Route path="/callback" render={(props) => {
              handleAuthentication(props);
              return null;
            }} />
            <Route path="/logout" render={() => {
              auth.logout();
              return null;
            }} />
            <Route path="/class" render={() => <Classes />} />
            <Route component={() => <div>404 Not Found</div>} />
          </Switch>
        </Router>
      </PageContainer>
    )
  }
}
