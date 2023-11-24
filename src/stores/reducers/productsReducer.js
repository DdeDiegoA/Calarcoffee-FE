import { PRODUCTS_LIST, PRODUCTS_TAXES } from '../types/productsTypes';

const INITIAL_STATE = {
  products_list: null,
  products_taxes: null,
};

const productReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PRODUCTS_LIST:
      return {
        ...state,
        products_list: action.payload,
      };
    case PRODUCTS_TAXES:
      return {
        ...state,
        products_taxes: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};
export default productReducer;
