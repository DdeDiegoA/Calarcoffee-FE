import { GLOBAL_DASHBOARD_SIDEBAR_OPEN } from '../types/globalTypes';
const INITIAL_STATE = {
  global_dashboard_sidebar_open: true,
};

const globalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GLOBAL_DASHBOARD_SIDEBAR_OPEN:
      return {
        ...state,
        global_dashboard_sidebar_open: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};
export default globalReducer;
