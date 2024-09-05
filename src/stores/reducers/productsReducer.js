import {
  PRODUCTS_LIST,
  PRODUCTS_TAXES,
  PRODUCTS_CATEGORIES,
  PRODUCT_ITEM,
} from '../types/productsTypes';

const INITIAL_STATE = {
  products_list: null,
  products_taxes: null,
  products_categories: null,
  product_item: null,
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
    case PRODUCTS_CATEGORIES:
      return {
        ...state,
        products_categories: action.payload,
      };
    case PRODUCT_ITEM:
      return {
        ...state,
        product_item: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};
export default productReducer;
