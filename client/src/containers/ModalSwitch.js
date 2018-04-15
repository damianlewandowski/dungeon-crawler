import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Menu from '../components/Menu';
import App from './App';
import InstructionsModal from '../components/InstructionsModal';

class ModalSwitch extends Component {
  previousLocation = this.props.location;

  componentWillUpdate(nextProps) {
    const { location } = this.props;
    console.log(this.props);
    // set previousLocation if props.location is not modal
    if (
      nextProps.history.action !== "POP" &&
      (!location.state || !location.state.modal)
    ) {
      this.previousLocation = this.props.location;
    }
  }

  render() {
    const { location } = this.props;
    const isModal = !!(
      location.state &&
      location.state.modal &&
      this.previousLocation !== location
    );
    console.log(isModal);

    return (
      <div>
        <Switch location={isModal ? this.previousLocation : location}>
          <Route exact path="/" component={Menu} />
          <Route path="/instructions" component={Menu} />
          <Route path="/game_window" component={App} />
        </Switch>
        {
          isModal 
            ? <Route 
                path="/instructions" 
                component={InstructionsModal} 
              />
            : null
        }
        
      </div>
    );
  }
}

export default ModalSwitch;