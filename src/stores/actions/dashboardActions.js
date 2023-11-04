import {
  DASHBOARD_USER_LIST,
  DASHBOARD_CATEGORIES_LIST,
  DASHBOARD_PAYSTATUS_LIST,
} from '../types/dashboardTypes';
import Api from '../../services/Api';

export const setDashboardUserlist = (payload) => (dispatch) => {
  dispatch({
    type: DASHBOARD_USER_LIST,
    payload,
  });
};

export const setDashboardCategorieslist = (payload) => (dispatch) => {
  dispatch({
    type: DASHBOARD_CATEGORIES_LIST,
    payload,
  });
};

export const setDashboardPayStatuslist = (payload) => (dispatch) => {
  dispatch({
    type: DASHBOARD_PAYSTATUS_LIST,
    payload,
  });
};

export const getCategoriesList = () => async (dispatch) => {
  try {
    const res = await Api.asyncCallMethod('/categories', 'GET');
    const { status, response } = res;
    if (status === 200) {
      dispatch(setDashboardCategorieslist(response.body));
    }
  } catch (error) {
    console.error(error);
  }
};

export const getPayStatusList = () => async (dispatch) => {
  try {
    const res = await Api.asyncCallMethod('/pay-status', 'GET');
    const { status, response } = res;
    if (status === 200) {
      dispatch(setDashboardPayStatuslist(response.body));
    }
  } catch (error) {
    console.error(error);
  }
};
