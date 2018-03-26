import React from 'react';

// Redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { apiMiddleware } from './store';
import { reducer } from './reducers';

// Camera
import Scanner from './components/Scanner';

// Create Redux store
const store = createStore(reducer, applyMiddleware(apiMiddleware));

// Fetch product data
store.dispatch({type: 'GET_PRODUCT_DATA'});

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
          <Scanner />
      </Provider>
    );
  }
}