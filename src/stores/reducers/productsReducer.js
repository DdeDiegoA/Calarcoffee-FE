import { PRODUCTS_LIST } from '../types/productsTypes';

const INITIAL_STATE = {
  products_list: null,
};

const productReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PRODUCTS_LIST:
      return {
        ...state,
        products_list: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};
export default productReducer;
