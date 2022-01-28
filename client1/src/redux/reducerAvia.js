import { SHOW_ALERT, HIDE_ALERT, SHOW_LOADER, HIDE_LOADER, AVIA_SHOW_MY_TICKETS, AVIA_RESERVED, AVIA_FIND, REQUESTED_AVIA_TICKET, REQUESTED_SUCCEEDED_AVIA_TICKET, REQUESTED_SUCCEEDED_CLOSE_AVIA_TICKET, REQUESTED_FAILED_AVIA_TICKET } from "./types";

const initialState = {
  showMyTickets: [{}],
  loading: false,
  err: false,
  find: false,
  reserved: "processed",
  success: false,
};

export const reducerAvia = (state = initialState, action) => {
  switch (action.type) {
    case AVIA_SHOW_MY_TICKETS:
      return { ...state, showMyTickets: action.payload  };
    case AVIA_RESERVED:
      return { ...state, reserved: action.payload  };
    case AVIA_FIND:
      return { ...state, find: action.payload  };

      
    case REQUESTED_AVIA_TICKET:
      return { ...state, success: true };
    case REQUESTED_SUCCEEDED_AVIA_TICKET:
      return { ...state, success: true };
    case REQUESTED_SUCCEEDED_CLOSE_AVIA_TICKET:
      return { ...state, success: false };
    case REQUESTED_FAILED_AVIA_TICKET:
      return { ...state, err: true };

    default:
      return state;
  }
};
