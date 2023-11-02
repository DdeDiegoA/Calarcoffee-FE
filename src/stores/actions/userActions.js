import Api from '../../services/Api';
import { swalStyled } from '../../utils/swalStyled';
import {
  USER_NAME,
  USER_LASTNAME,
  USER_DATA,
  USER_PAYSTATUSES,
  USER_SELECTED_COUNTRY,
  USER_SELECTED_DEPARTMENT,
  USER_SELECTED_CITY,
} from '../types/userTypes';
import { setGlobalGeneralSpinner } from './globalActions';
import { deleteCookieToken } from './userRegisterActions';

export const setUserData = (payload) => (dispatch) => {
  dispatch({
    type: USER_DATA,
    payload: payload,
  });
};

export const setUserPayStatuses = (payload) => (dispatch) => {
  dispatch({
    type: USER_PAYSTATUSES,
    payload: payload,
  });
};
export const setCountrySelected = (payload) => (dispatch) => {
  dispatch({
    type: USER_SELECTED_COUNTRY,
    payload: payload,
  });
};
export const setDepartmentSelected = (payload) => (dispatch) => {
  dispatch(setCitySelected(''));
  dispatch({
    type: USER_SELECTED_DEPARTMENT,
    payload: payload,
  });
};
export const setCitySelected = (payload) => (dispatch) => {
  dispatch({
    type: USER_SELECTED_CITY,
    payload: payload,
  });
};

export const getUserData = () => async (dispatch) => {
  dispatch(setGlobalGeneralSpinner(true, ''));

  try {
    const res = await Api.asyncCallMethod('/my-user', 'GET');
    const { status, response } = res;
    if (status === 200) {
      dispatch(setUserData(response.body));
      dispatch(setGlobalGeneralSpinner(false, ''));
    }
    if (status === 409) {
      swalStyled.fire(
        'Cession Cerrada',
        'Porfavor inicia sesion nuevamente',
        'warning'
      );
      dispatch(deleteCookieToken());
    }
  } catch (error) {
    console.log(error);
  }
};

export const getUserPayStatuses = () => async (dispatch) => {
  dispatch(setGlobalGeneralSpinner(true, ''));
  try {
    const res = await Api.asyncCallMethod('/me/pay-statuses', 'GET');
    const { status, response } = res;
    if (status === 200) {
      dispatch(setUserPayStatuses(response.body));
      dispatch(setGlobalGeneralSpinner(false, ''));
    } else {
      swalStyled.fire(
        'Error',
        'ha ocurrido un error cargando los estados de pago',
        'error'
      );
    }
    dispatch(setGlobalGeneralSpinner(false, ''));
  } catch (error) {
    console.log(error);
  }
};
