import React from "react";
import "./WhyChooseUs.css";
import img1 from "../../../imgg/aboutUs.png";

const WhyChooseUs = () => {
  return (
    <div className="mainContainer-sec2">
      <div className="container-sec2">
        <div className="sec2-box">
          <div className="text-box">
            <div className="sec2-heading">
              <p>Why You Should Choose Us</p>
            </div>

            <div className="sub-text-box">
              <div className="sub-box-icon">
                <div className="sub-sub-box-icon">
               {/*  */}
                <i className="fa-solid fa-phone-volume fa-2xl"></i>                </div>
                </div>
              <div className="sub-box-text">
                <span id="sub-heading">Professional</span>
                <p id="sub-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corrupti nobis ut commodi, fugiat iusto sequi Lorem, ipsum
                  dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>

            <div className="sub-text-box">
              <div className="sub-box-icon">
              <div className="sub-sub-box-icon">
              <i className="fa-solid fa-user-check fa-2xl"></i>
              </div>
              </div>
              <div className="sub-box-text">
                <span id="sub-heading">Good Review</span>
                <p id="sub-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corrupti nobis ut commodi, fugiat iusto sequi Lorem, ipsum
                  dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>

          <div className="img-box">
            <div id="sec2-img">
              <img src={img1} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WhyChooseUs;
