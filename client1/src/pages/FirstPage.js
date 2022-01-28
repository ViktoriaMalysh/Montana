import { Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './firstPage.css'

function FirstPage() {
  return (
    <div className="div-first">
      <p className="p-name">MONTANA</p>
      <div className="div-spinner">
        <Spinner animation="grow" variant="info" role="status"></Spinner>
      </div>
    </div>
  );
}

export default FirstPage;
