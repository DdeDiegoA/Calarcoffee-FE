import {
  GLOBAL_DASHBOARD_SIDEBAR_OPEN,
  GLOBAL_GENERAL_SPINNER,
  GLOBAL_COUNTRIES_OPTIONS,
  GLOBAL_DEPARTMENTS_OPTIONS,
  GLOBAL_CITIES_OPTIONS,
} from '../types/globalTypes';

const INITIAL_STATE = {
  global_dashboard_sidebar_open: true,
  global_general_spinner: {
    open: false,
    message: '',
  },
  global_countries_options: null,
  global_departments_options: null,
  global_cities_options: null,
};

const globalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GLOBAL_DASHBOARD_SIDEBAR_OPEN:
      return {
        ...state,
        global_dashboard_sidebar_open: action.payload,
      };
    case GLOBAL_GENERAL_SPINNER:
      return {
        ...state,
        global_general_spinner: action.payload,
      };
    case GLOBAL_COUNTRIES_OPTIONS:
      return {
        ...state,
        global_countries_options: action.payload,
      };
    case GLOBAL_DEPARTMENTS_OPTIONS:
      return {
        ...state,
        global_departments_options: action.payload,
      };
    case GLOBAL_CITIES_OPTIONS:
      return {
        ...state,
        global_cities_options: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};
export default globalReducer;
