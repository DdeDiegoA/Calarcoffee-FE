import {
  DASHBOARD_USER_LIST,
  DASHBOARD_CATEGORIES_LIST,
  DASHBOARD_PAYSTATUS_LIST,
} from '../types/dashboardTypes';

const INITIAL_STATE = {
  dashboard_user_list: null,
  dashboard_categories_list: null,
  dashboard_payStatus_list: null,
};

const dashboardReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DASHBOARD_USER_LIST:
      return {
        ...state,
        dashboard_user_list: action.payload,
      };
    case DASHBOARD_CATEGORIES_LIST:
      return {
        ...state,
        dashboard_categories_list: action.payload,
      };
    case DASHBOARD_PAYSTATUS_LIST:
      return {
        ...state,
        dashboard_payStatus_list: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};
export default dashboardReducer;
