import { SHOW_ALERT, HIDE_ALERT, FIND, SHOW_LOADER, HIDE_LOADER, REQUESTED_SUCCEEDED_TICKET, REQUESTED_SUCCEEDED_CLOSE_TICKET, REQUESTED_FAILED_TICKET, REQUESTED_TICKET, NAME_COUNTRY, START_DATE, END_DATE, PRICE_MIN, PRICE_MAX, SHOW_TICKETS, RESERVED, SHOW_MY_TICKETS, COUNTRY } from "./types";

const initialState = {
  nameCountry: "",
  showTickets: [{}],
  showMyTickets: [{}],
  loading: false,
  country: "",
  err: false,
  find: false,
  reserved: "processed"
};

export const reducerTickets = (state = initialState, action) => {
  switch (action.type) {
    case NAME_COUNTRY:
      return { ...state, nameCountry: action.payload };
    case SHOW_TICKETS:
      return { ...state, showTickets: action.payload  };
    case SHOW_MY_TICKETS:
      return { ...state, showMyTickets: action.payload  };
    case RESERVED:
      return { ...state, reserved: action.payload  };
    case FIND:
      return { ...state, find: action.payload  };
    case COUNTRY:
      return { ...state, country: action.payload  };
    case REQUESTED_TICKET:
      return { ...state, success: true };
    case REQUESTED_SUCCEEDED_TICKET:
      return { ...state, success: true };
    case REQUESTED_SUCCEEDED_CLOSE_TICKET:
      return { ...state, success: false };
    case REQUESTED_FAILED_TICKET:
      return { ...state, err: true };

    default:
      return state;
  }
};
