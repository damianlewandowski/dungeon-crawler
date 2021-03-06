import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Menu from '../components/Menu';
import App from './App';
import Modal from '../components/Modal';
import Instructions from '../components/Instructions';
import Leaderboard from './Leaderboard';
import Name from './Name';

class ModalSwitch extends Component {
  previousLocation = this.props.location;

  componentWillUpdate(nextProps) {
    const { location } = this.props;
    // set previousLocation if props.location is not modal
    if (
      nextProps.history.action !== "POP" &&(
        (!location.state || !location.state.instructionsModal) ||
        (!location.state || !location.state.leaderboardModal)
      )
    ) {
      this.previousLocation = this.props.location;
    }
  }

  render() {
    const { location } = this.props;
    const isInstructionsModal = !!(
      location.state &&
      location.state.instructionsModal &&
      this.previousLocation !== location
    );
    const isLeaderboardModal = !!(
      location.state &&
      location.state.leaderboardModal &&
      this.previousLocation !== location
    );

    return (
      <div>
        <Switch location={(isInstructionsModal || isLeaderboardModal) ? this.previousLocation : location}>
        <Route exact path={`${process.env.PUBLIC_URL}/`} component={Menu} />
          <Route path={`${process.env.PUBLIC_URL}/instructions`} component={Menu} />
          <Route path={`${process.env.PUBLIC_URL}/leaderboard`} component={Menu} />
          <Route path={`${process.env.PUBLIC_URL}/name`} component={Name} />
          <Route path={`${process.env.PUBLIC_URL}/game_window`} component={App} />
        </Switch>
        {
          isInstructionsModal 
            ? <Route 
                path={`${process.env.PUBLIC_URL}/instructions`} 
                render={
                  (props) => (
                    <Modal {...props}>
                      <Instructions />
                      <h2 style={{textAlign: "center", marginBottom: "3rem"}}>Good Luck!</h2>
                    </Modal>
                  )
                }
              />
            : null
        }
        {
          isLeaderboardModal 
            ? <Route
                path={`${process.env.PUBLIC_URL}/leaderboard`}
                render={
                  (props) => (
                    <Modal {...props}>
                      <div>
                        <Leaderboard {...props} />
                      </div>
                    </Modal>
                  )
                }
              />
            : null
        }   
      </div>
    );
  }
}

export default ModalSwitch;