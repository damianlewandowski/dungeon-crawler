import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import ModalSwitch from '../containers/ModalSwitch';

const Root = ({ store }) => {
  return (
    <Provider store={store}>
        <Route component={ModalSwitch} />
    </Provider>
  );
};

Root.propTypes = {
  store: PropTypes.object.isRequired,
}

export default Root;