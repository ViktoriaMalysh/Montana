import {
  SHOW_ALERT,
  HIDE_ALERT,
  FIND,
  PHOTO_URL,
  SHOW_LOADER,
  HIDE_LOADER,
  REQUESTED_SUCCEEDED_TICKET,
  REQUESTED_SUCCEEDED_CLOSE_TICKET,
  REQUESTED_FAILED_TICKET,
  REQUESTED_TICKET,
  NAME_COUNTRY,
  START_DATE,
  TICKET_NAME,
  END_DATE,
  PRICE_MIN,
  PRICE_MAX,
  SHOW_TICKETS,
  RESERVED,
  SHOW_MY_TICKETS,
  COUNTRY,
  ADDRESS,
  LOCALITY,
  PRICE,
} from "./types";

const initialState = {
  nameCountry: "",
  showTickets: [{}],
  showMyTickets: [{}],
  loading: false,
  country: "",
  err: false,
  find: false,
  reserved: "processed",
  ticketName: "",
  address: "",
  locality: "",
  price: "",
  url: "",
};

export const reducerTickets = (state = initialState, action) => {
  switch (action.type) {
    case NAME_COUNTRY:
      return { ...state, nameCountry: action.payload };
    case SHOW_TICKETS:
      return { ...state, showTickets: action.payload };
    case SHOW_MY_TICKETS:
      return { ...state, showMyTickets: action.payload };
    case RESERVED:
      return { ...state, reserved: action.payload };
    case FIND:
      return { ...state, find: action.payload };
    case COUNTRY:
      return { ...state, country: action.payload };
    case TICKET_NAME:
      return { ...state, ticketName: action.payload };
    case ADDRESS:
      return { ...state, address: action.payload };
    case LOCALITY:
      return { ...state, locality: action.payload };
    case PRICE:
      return { ...state, price: action.payload };
    case PHOTO_URL:
      return { ...state, url: action.payload };
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
