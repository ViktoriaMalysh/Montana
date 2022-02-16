import {
  USER_NAME,
  IS_AUTH,
  USER_SURNAME,
  ERROR,
  USER_EMAIL,
  USER_PASSWORD,
  USER_ROLE,
  USER_ID,
  CLEAR_USER,
  REQUESTED_USER,
  REQUESTED_SUCCEEDED_USER,
  REQUESTED_SUCCEEDED_CLOSE_USER,
  REQUESTED_FAILED_USER,
  SHOW_ALERT_USER,
  HIDE_ALERT_USER,
  SUCCESS,
  FLAG,
  CHANGE,
  USER_GENDER,
  USER_AGE,
  USER_COUNTRY,
  USER_PHONE,
  COUNT_TICKET,
  COUNT_HOTEL_TICKET,
  USER_DATE_OF_BIRTH,
} from "./types";

const initialState = {
  isAuth: false,
  userName: "",
  userSurname: "",
  userGender: "",
  userCountry: "",
  userDateOfBirth: "",
  userDate: '',
  userPhone: 0,
  userEmail: "",
  userPassword: "",
  userRole: 0,
  userId: 0,
  flag: false,
  err: false,
  error: "",
  success: false,
  loading: false,
  change: false,
  text: false,
  flagSuccess: false,
  countHotelTickets: 0,
};

export const reducerUsers = (state = initialState, action) => {
  switch (action.type) {
    case IS_AUTH:
      return { ...state, isAuth: action.payload };
    case USER_NAME:
      return { ...state, userName: action.payload };
    case USER_SURNAME:
      return { ...state, userSurname: action.payload };
    case USER_GENDER:
      return { ...state, userGender: action.payload };
    case USER_DATE_OF_BIRTH:
      return { ...state, userDateOfBirth: action.payload };
    case USER_COUNTRY:
      return { ...state, userCountry: action.payload };
    case USER_PHONE:
      return { ...state, userPhone: action.payload };
    case COUNT_HOTEL_TICKET:
      return { ...state, countHotelTickets: action.payload };
    case USER_EMAIL:
      return { ...state, userEmail: action.payload };
    case USER_PASSWORD:
      return { ...state, userPassword: action.payload };
    case USER_ROLE:
      return { ...state, userRole: action.payload };
    case USER_ID:
      return { ...state, userId: action.payload };
    case CLEAR_USER:
      return initialState;
    case REQUESTED_USER:
      return { ...state };
    case REQUESTED_SUCCEEDED_USER:
      return { ...state, success: true };
    case REQUESTED_SUCCEEDED_CLOSE_USER:
      return { ...state, success: false };
    case REQUESTED_FAILED_USER:
      return { ...state, err: true };

    case SUCCESS:
      return { ...state, flagSuccess: action.payload };
    case CHANGE:
      return { ...state, change: action.payload };
    case ERROR:
      return { ...state, error: action.payload };
    case FLAG:
      return { ...state, flag: action.payload };

    default:
      return state;
  }
};
