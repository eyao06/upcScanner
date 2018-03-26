
export const reducer = (state = { products: [], loading: true }, action) => {
  switch (action.type) {
    case 'GET_PRODUCT_DATA_LOADING':
      return {
        ...state,                   // keep the existing state,
        loading: true,              // but change loading to true
      };
    case 'GET_PRODUCT_DATA_RECEIVED':
      return {
        loading: false,                 // set loading to false
        products: action.data.products, // update product array with reponse data
      };
    case 'GET_PRODUCT_DATA_ERROR':
      return state;
    default:
      return state;
    }
};