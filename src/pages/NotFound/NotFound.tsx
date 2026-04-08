import React from "react";
import "./style.css";
import padelPlayer from "../../assets/padel-player.svg";

const NotFound = () => {
  return (
    <div className="notfound-container" dir="rtl">
        <h2 className="notfound-title"> הדף המבוקש לא נמצא</h2>
        <p className="notfound-text">
           בדוק את הכתובת או חזור לעמוד הראשי
        </p>
      <img src={padelPlayer} alt="Padel Player" className="notfound-image" />
    </div>
  );
};

export default NotFound;
