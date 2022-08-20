import React from "react";
import "./Customer.css";
import Neurological from "../../img/neurological.png";
import Quate from "../../img/quate.png";

const Customer = () => {
  return (
    <div>
      <h1> What Our Customer Say </h1>
      <div className="box-1">
        <div className="quate">
          <img src={Quate} alt="Mountains" />
        </div>
        <div>
          <p>
            I wanted to thanks everyone at this facility for the <br /> quelity
            of care and compassion they showed during <br /> my stay.
          </p>
        </div>
        <div className="photo">
        <img src={Neurological} alt="Mountains"  />
        </div>
        <div className="text-1">
          <h2>Amit Kumar</h2>
          <h3>patient</h3>
        </div>
      </div>
    </div>
  );
};

export default Customer;
