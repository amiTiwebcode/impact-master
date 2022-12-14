import React from "react";
import img1 from "../../../imgg/persons1.png";
import img2 from "../../../imgg/persons2.png";
import "./LetsGrow.css";
import { FaLayerGroup } from "react-icons/fa";

const LetsGrow = () => {
  const GetInTouch = () => {
    alert("Get in touch Btn Pressed!");
  };

  return (
    <div className="mainContainer">
      <div className="container">
        <div className="body1">
          <div className="grp-img">
            <div className="img">
              <img src={img1} alt="" style={{}} />
            </div>
          </div>
          <div className="body-text">
            <div className="heading">
              <span>Let's Grow your business with us.</span>
            </div>
            <div className="desc">
              <span>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error
                in similique molestias atque veniam ipsam quibusdam minus
                incidunt consequatur, eos voluptatem! Dolor, nulla repellat
                maxime quibusdam iste accusamus ad in?
              </span>
            </div>
            <div className="get-in-touch">
              <button id="btn1" onClick={GetInTouch}>
                Get in Touch
              </button>
            </div>
          </div>
          <div className="grp-img">
            <div className="img">
              <img src={img2} alt="" />
            </div>
          </div>
        </div>
        <div className="bottom-box">
          <div className="box">
            <div className="box-icon">
              <i className="fa-solid fa-layer-group fa-2xl"></i>
            </div>
            <div className="box-details">
              <p>
                <span id="box-heading">Design</span>
              </p>
              <span id="box-detail">
                Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Consectetur, illum!sit amet consectetur
                adipisicing elit. Esse, sapi
              </span>
            </div>
          </div>
          <div className="box">
            <div className="box-icon">
              <i className="fa-solid fa-computer fa-2xl"></i>
            </div>
            <div className="box-details">
              <p>
                <span id="box-heading">Application</span>
              </p>
              <span id="box-detail">
                Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Consectetur, illum!sit amet consectetur
                adipisicing elit. Esse, sapi
              </span>
            </div>
          </div>
          <div className="box">
            <div className="box-icon">
              <i className="fa-solid fa-bags-shopping fa-2xl"></i>
            </div>
            <div className="box-details">
              <p>
                <span id="box-heading">eCommerce</span>
              </p>
              <span id="box-detail">
                Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Consectetur, illum!sit amet consectetur
                adipisicing elit. Esse, sapi
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LetsGrow;
