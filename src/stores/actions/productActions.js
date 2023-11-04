import { PRODUCTS_LIST } from '../types/productsTypes';
import Api from '../../services/Api';
export const setProductList = (payload) => (dispatch) => {
  dispatch({
    type: PRODUCTS_LIST,
    payload,
  });
};

export const getProduct = () => async (dispatch) => {
  try {
    const res = await Api.asyncCallMethod('/products', 'GET');
    const { status, response } = res;
    if (status === 200) {
      dispatch(setProductList(response.body));
    }
  } catch (error) {
    console.log(error);
  }
};
