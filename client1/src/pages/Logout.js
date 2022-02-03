import { useEffect } from "react";
import { useHistory, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CLEAR_USER, IS_AUTH } from "../redux/types";
// import { alert } from "../redux/actionTickets";
// import { Alert } from "../components/Alert";

export default function Logout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const store = useSelector((state) => state);

  useEffect(() => {
    LogoutFunk();
    console.log(("useEffect"))
  }, []);

  function LogoutFunk() {
    localStorage.removeItem('token');
 console.log('logout')
    dispatch({ type: CLEAR_USER });
      //  localStorage.setItem('token', '')
    // dispatch({ type: IS_AUTH, payload: false});
    // dispatch(alert("Logout success!"));
    setTimeout(() => {
      navigate("/login");
    }, 1400);
  }
  return null;
  // return (
    // <div>{store.tickets.text && <Alert text={store.tickets.text} />}</div>
  // );
}
