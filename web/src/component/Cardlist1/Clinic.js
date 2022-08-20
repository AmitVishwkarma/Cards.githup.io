import React from "react";
import "./Clinic.css";
import Dental from "../../img/dental.png";

const Clinic = () => {
  return (
    <div className="pl">
      
        <div className="Column-1">
          <div className="Content-1">
            <img src={Dental} alt="Mountains" style={{ width: "100%" }} />
            <h3>My Work</h3>
          </div>
        </div>
       
        <div className="Column-2">
          <div className="Content-2">
            <img src={Dental} alt="Mountains" style={{ width: "100%" }} />
            <h3>My Work</h3>
          </div>
        </div>
        <div className="button">

        <button className="a-award-img">Make an Appointment</button>
        </div>
        <div className="Column-3">
          <div className="Content-3">
            <img src={Dental} alt="Mountains" style={{ width: "100%" }} />
            <h3>My Work</h3>
          </div>
        </div>
      
    </div>
  );
};

export default Clinic;
