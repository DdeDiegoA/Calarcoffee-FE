import { GLOBAL_DASHBOARD_SIDEBAR_OPEN } from '../types/globalTypes';

export const setSidebarOpen = (payload) => (dispatch) => {
  dispatch({
    type: GLOBAL_DASHBOARD_SIDEBAR_OPEN,
    payload,
  });
};
