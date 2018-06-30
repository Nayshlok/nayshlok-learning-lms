import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../components/home/Home'

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
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Home navList={this.state.navLinks} /> }/>
          <Route component={() => <div>404 Not Found</div>} />
        </Switch>
      </Router>
    )
  }
}
