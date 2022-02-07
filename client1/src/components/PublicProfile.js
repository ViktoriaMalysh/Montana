import { Col, Form, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

function PublicProfile() {
  const store = useSelector((state) => state);

  return (
    <div className="div-prof-sett-block2">
      <div className="div-block2">
        <p className="p-block2-title">Public profile</p>
        <div className="div-border-block2"></div>
      </div>
      <div className="div-avatar-change">
        <p className="p-avatar-title">Profile picture</p>
        <img
          alt="Avatar"
          className="img-avatar-change"
          src="https://okeygeek.ru/wp-content/uploads/2020/03/no_avatar.png"
        />
      </div>

      <div className="div-change-myself">
        <div className="div-block3">
          <p className="p-change-myself">Name </p>
          <input
            type="text"
            className="input-prof-sett"
            name="name"
            defaultValue={store.users.userName}
          ></input>
        </div>
        <div className="div-block3">
          <p className="p-change-myself">Surname </p>
          <input
            type="text"
            className="input-prof-sett"
            name="surname"
            defaultValue={store.users.userSurname}
          ></input>
          <p className="p-block3-message">
            Your name and surname may appear around Montana where you contribute
            or are mentioned. You can remove it at any time.
          </p>
        </div>

        <div className="div-block3">
          <p className="p-change-myself">Country </p>
          <input
            type="text"
            className="input-prof-sett1"
            name="email"
            defaultValue={store.users.userCountry}
          ></input>
        </div>
        <div className="div-block3">
          <h4 className="p-change-myself">Date of Birth</h4>
          <input
            type="date"
            id="start"
            className="input-data"
            name="trip-start"
            defaultValue="2020-07-22"
            min="1960-01-01"
            max="2018-12-31"
          ></input>{" "}
        </div>

        <div className="div-block3">
          <h4 className="p-change-myself">Choose Gender:</h4>
          <select 
            name="select" 
            className="input-prof-sett1"
          >
            <option value={store.users.userGender}>{store.users.userGender}</option>
            <option value="male">
              Male
            </option>
            <option value="female">Female</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default PublicProfile;
