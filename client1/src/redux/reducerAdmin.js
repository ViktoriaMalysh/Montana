import { REQUESTED_FAILED_ADMIN, CLEAR_ADMIN, REQUESTED_SUCCEEDED_ADMIN, REQUESTED_SUCCEEDED_CLOSE_ADMIN, REQUESTED_ADMIN } from "./types";

const initialState = {
  err: false,
  success: false,
};

export const reducerAdmin = (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_ADMIN:
      return initialState; 
    case REQUESTED_ADMIN:
      return { ...state, success: true };
    case REQUESTED_SUCCEEDED_ADMIN:
      return { ...state, success: true };
    case REQUESTED_SUCCEEDED_CLOSE_ADMIN:
      return { ...state, success: false };
    case REQUESTED_FAILED_ADMIN:
      return { ...state, err: true };
  
    default:
      return state;
  }
};
