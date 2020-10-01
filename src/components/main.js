import React, { Component } from 'react';
import Example from './feedbackModal';
import LiveStats from './LiveStatsComponent';
import HallofFame from './halloffame';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
class Main extends Component {
  render() {
    return (
      <div>
        <Switch location={this.props.location}>
          <Route exact path='/halloffame' component={() => <HallofFame />} />
          <Route exact path='/livestats' component={() => <LiveStats />} />
          <Route exact path='/example' component={() => <Example />} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(Main);
