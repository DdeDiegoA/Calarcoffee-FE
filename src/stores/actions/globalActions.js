import Api from '../../services/Api';
import {
  GLOBAL_DASHBOARD_SIDEBAR_OPEN,
  GLOBAL_GENERAL_SPINNER,
  GLOBAL_COUNTRIES_OPTIONS,
  GLOBAL_DEPARTMENTS_OPTIONS,
  GLOBAL_CITIES_OPTIONS,
} from '../types/globalTypes';
import { setCountrySelected } from './userActions';

export const setSidebarOpen = (payload) => (dispatch) => {
  dispatch({
    type: GLOBAL_DASHBOARD_SIDEBAR_OPEN,
    payload,
  });
};
export const setCountriesOptions = (payload) => (dispatch) => {
  dispatch({
    type: GLOBAL_COUNTRIES_OPTIONS,
    payload,
  });
};
export const setDepartmentsOptions = (payload) => (dispatch) => {
  dispatch({
    type: GLOBAL_DEPARTMENTS_OPTIONS,
    payload,
  });
};
export const setCitiesOptions = (payload) => (dispatch) => {
  dispatch({
    type: GLOBAL_CITIES_OPTIONS,
    payload,
  });
};

export const setGlobalGeneralSpinner = (open, message) => (dispatch) => {
  const payload = {
    open: open,
    message: message,
  };
  dispatch({
    type: GLOBAL_GENERAL_SPINNER,
    payload,
  });
};

export const getCountriesOptions = () => async (dispatch) => {
  try {
    const res = await Api.asyncCallMethod('/countries', 'GET');
    const { status, response } = res;
    if (status === 200) {
      const { body } = response;
      dispatch(setCountriesOptions(body));
      dispatch(setCountrySelected(body[0]));
    }
  } catch (error) {
    console.error(error);
  }
};
export const getDepartmentOptions = (country) => async (dispatch) => {
  try {
    const res = await Api.asyncCallMethod(
      `/departments/country/${country.id}`,
      'GET'
    );
    const { status, response } = res;
    if (status === 200) {
      dispatch(setDepartmentsOptions(response.body));
    }
  } catch (error) {
    console.error(error);
  }
};
export const getCitiesOptions = (department) => async (dispatch) => {
  try {
    const res = await Api.asyncCallMethod(
      `/cities/department/${department.id}`,
      'GET'
    );
    const { status, response } = res;
    if (status === 200) {
      dispatch(setCitiesOptions(response.body));
    }
  } catch (error) {
    console.error(error);
  }
};
