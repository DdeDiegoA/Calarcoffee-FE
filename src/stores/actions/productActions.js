import {
  PRODUCTS_LIST,
  PRODUCTS_TAXES,
  PRODUCTS_CATEGORIES,
  PRODUCT_ITEM,
} from '../types/productsTypes';
import Api from '../../services/Api';
import { swalStyled } from '../../utils/swalStyled';
import { setGlobalGeneralSpinner } from './globalActions';

export const setProductList = (payload) => (dispatch) => {
  dispatch({
    type: PRODUCTS_LIST,
    payload,
  });
};

export const setProductItem = (payload) => (dispatch) => {
  dispatch({
    type: PRODUCT_ITEM,
    payload,
  });
};

export const setProductTaxes = (payload) => (dispatch) => {
  dispatch({
    type: PRODUCTS_TAXES,
    payload,
  });
};
export const setProductCategories = (payload) => (dispatch) => {
  dispatch({
    type: PRODUCTS_CATEGORIES,
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

export const getProductById = (productId) => async (dispatch) => {
  try {
    const res = await Api.asyncCallMethod(`/product/${productId}`, 'GET');
    const { status, response } = res;
    if (status === 200) {
      dispatch(setProductItem(response.body));
    }
  } catch (error) {
    console.log(error);
  }
};

export const getTaxes = () => async (dispatch) => {
  try {
    const res = await Api.asyncCallMethod('/taxes', 'GET');
    const { status, response } = res;
    if (status === 200) {
      dispatch(setProductTaxes(response.body));
    }
  } catch (error) {
    console.log(error);
  }
};
export const getCategories = () => async (dispatch) => {
  try {
    const res = await Api.asyncCallMethod('/categories', 'GET');
    const { status, response } = res;
    if (status === 200) {
      dispatch(setProductCategories(response.body));
    }
  } catch (error) {
    console.log(error);
  }
};

export const createProduct = (data, images) => async (dispatch) => {
  try {
    if (
      !data ||
      typeof data !== 'object' ||
      !Array.isArray(images) ||
      images.length === 0
    ) {
      throw new Error('Parámetros inválidos para crear un producto.');
    }

    dispatch(setGlobalGeneralSpinner(true, ''));

    const res = await Api.asyncCallMethod('/products', 'POST', data);
    const { status, response } = res;

    if (status === 201) {
      if (!response || typeof response.body !== 'object' || !response.body.id) {
        throw new Error(
          'La respuesta del servidor no contiene el ID esperado.'
        );
      }

      dispatch(addImageToProduct(images, response.body.id));
    } else {
      swalStyled.fire('Error', res.message, 'error');
    }
  } catch (error) {
    console.error('Error al crear el producto:', error);
  } finally {
    dispatch(setGlobalGeneralSpinner(false, ''));
    dispatch(getProduct());
  }
};

const addImageToProduct = (images, productId) => async (dispatch) => {
  try {
    if (!Array.isArray(images) || images.length === 0) {
      throw new Error('La lista de imágenes es inválida o está vacía.');
    }

    await Promise.all(
      images.map(async (element, index) => {
        if (!(element instanceof File)) {
          console.error(
            `Elemento en la posición ${index} no es una instancia de File.`
          );
          return; // Continúa con la siguiente iteración del bucle.
        }

        const data = new FormData();
        data.append('productId', productId);
        data.append('image', element);
        data.append('order', index + 1);

        try {
          await Api.asyncSendFormData('/image-product', 'POST', data);
        } catch (error) {
          console.error(
            `Error al enviar imagen en la posición ${index}:`,
            error
          );
        }
      })
    );

    // Después de completar todas las operaciones del bucle, realiza los dispatch necesarios.
    dispatch(setGlobalGeneralSpinner(false, ''));
    dispatch(getProduct());
  } catch (error) {
    console.error('Error al procesar las imágenes:', error);
  }
};
