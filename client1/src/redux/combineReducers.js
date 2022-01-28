import { combineReducers } from "redux";
import { reducerApp } from "./reducerApp";
import { reducerTickets } from "./reducerTickets";
import { reducerUsers } from "./reducerUsers";
import { reducerAvia } from "./reducerAvia";
import { reducerAdmin } from "./reducerAdmin";

export const rootReducers = combineReducers({
  tickets: reducerTickets,
  aviaTickets: reducerAvia,
  users: reducerUsers,
  admin: reducerAdmin,
  app: reducerApp,
});
