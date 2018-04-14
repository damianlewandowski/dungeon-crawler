import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import ModalSwitch from '../containers/ModalSwitch';
// import Menu from '../components/Menu';
// import App from '../containers/App';

const Root = ({ store }) => {
  return (
    <Provider store={store}>
        <Route component={ModalSwitch} />
        {/* <Route path="/game_window" component={App} /> */}
    </Provider>
  );
};

Root.propTypes = {
  store: PropTypes.object.isRequired,
}

export default Root;