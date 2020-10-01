import React, { Component } from 'react';
import Example from './feedbackModal';
import LiveStats from './LiveStatsComponent';
import Home from './home';
import Registration from './registration';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
class Main extends Component {
  render() {
    return (
      <Switch location={this.props.location}>
        <Route exact path='/livestats' component={() => <LiveStats />} />
        <Route exact path='/example' component={() => <Example />} />
        <Route exact path='/registration' component={() => <Registration />} />
        <Route exact path='/' component={() => <Home />} />
      </Switch>
    );
  }
}

export default withRouter(Main);
