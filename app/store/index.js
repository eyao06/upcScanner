
const ipAddress = '192.168.42.74'
const API = 'http://' + ipAddress + ':3000/products.json';

export const apiMiddleware = store => next => action => {
  // Pass all actions through by default
  next(action);
  switch (action.type) {
    // In case we receive an action to send an API request
    case 'GET_PRODUCT_DATA':
      // Dispatch GET_PRODUCT_DATA_LOADING to update loading state
      store.dispatch({type: 'GET_PRODUCT_DATA_LOADING'});
      // Make API call and dispatch appropriate actions when done
      fetch(API)
        .then(res => res.json())
        .then(data => next({
          type: 'GET_PRODUCT_DATA_RECEIVED',
          data
        }))
        .catch(error => next({
          type: 'GET_PRODUCT_DATA_ERROR',
          error
        }));
      break;
    // Do nothing if the action does not interest us
    default:
      break;
  }
};