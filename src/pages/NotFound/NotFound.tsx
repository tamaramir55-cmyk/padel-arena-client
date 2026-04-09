import React from "react";
import "./style.css";
import padelPlayer from "../../assets/padel-player.svg";
import { Link } from "react-router-dom";

export interface NotFoundProps {}

const NotFound: React.FC<NotFoundProps> = () => {
  return (
    <div className="notfound-container" dir="rtl">
      <h2 className="notfound-title"> הדף המבוקש לא נמצא</h2>
      <p className="notfound-text">
        בדוק את הכתובת או{" "}
        <Link to="/" className="notfound-link">
          חזור לעמוד הראשי
        </Link>
      </p>
      <img src={padelPlayer} alt="Padel Player" className="notfound-image" />
    </div>
  );
};

export default NotFound;
