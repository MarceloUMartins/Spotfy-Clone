import React from "react";
import "./Premium.scss";
import benefit1 from "../../images/benefit1.png";
import benefit2 from "../../images/benefit2.png";
import benefit3 from "../../images/benefit3.png";
import benefit4 from "../../images/benefit4.png";

const Premium = () => {
  return (
    <div className="premium">
      <h1>Why go Premium?</h1>
      <div className="content">
        <div className="premiumBenefits">
          <img src={benefit2} alt="benefit1" />
          <h3>Download music.</h3>
          <span>Listen anywhere.</span>
        </div>
        <div className="premiumBenefits">
          <img src={benefit1} alt="benefit2" />
          <h3>Ad-free music listening.</h3>
          <span>Enjoy nonstop music.</span>
        </div>
        <div className="premiumBenefits">
          <img src={benefit3} alt="benefit3" />
          <h3>Play any song.</h3>
          <span>Even on mobile.</span>
        </div>
        <div className="premiumBenefits">
          <img src={benefit4} alt="benefit4" />
          <h3>Unlimited skips.</h3>
          <span>Just hit next.</span>
        </div>
      </div>
    </div>
  );
};

export default Premium;
