import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import Menu from '../components/Menu';
import App from '../containers/App';

const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <div>
        <Route exact path="/" component={Menu} />
        <Route path="/game_window" component={App} />
      </div>
    </Provider>
  );
};

Root.propTypes = {
  store: PropTypes.object.isRequired,
}

export default Root;