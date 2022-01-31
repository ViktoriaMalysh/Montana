import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CLEAR_USER, IS_AUTH } from "../redux/types";
import { alert } from "../redux/actionTickets";
import { Alert } from "../components/Alert";

export default function Logout() {
  const dispatch = useDispatch();
  let history = useHistory();
  const store = useSelector((state) => state);

  useEffect(() => {
    LogoutFunk();
  }, []);

  function LogoutFunk() {
    localStorage.removeItem('token');
 
    dispatch({ type: CLEAR_USER });
      //  localStorage.setItem('token', '')
    // dispatch({ type: IS_AUTH, payload: false});
    dispatch(alert("Logout success!"));
    setTimeout(() => {
      history.push("/users/login");
    }, 1400);
  }
  return (
    <div>{store.tickets.text && <Alert text={store.tickets.text} />}</div>
  );
}
