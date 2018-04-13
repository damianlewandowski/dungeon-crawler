import { createStore, compose } from 'redux';
import rootReducer from './reducers';

const configureStore = () => {
  const store = createStore(
    rootReducer,
    compose(
      // applyMiddleware(logger),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&  // Redux debugger in chrome
      window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  )

  return store;
}

export default configureStore;