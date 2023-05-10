import React from "react";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { IoCallSharp } from "react-icons/io5";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="box logo">
            <img src="../images/tech-logo-footer.png" alt="" />
            <p>
              This is a News Website where visiter can search for news and read
              their favourite articles
            </p>
            <div className="footer-contacts">
              <GrMail className="mail-icon"></GrMail>
              <span className="footer-span">
                <a href="mailto:warsi.work@gmail.com" style={{ color: "#fff" }}>
                  warsi.work@gmail.com{" "}
                </a>
              </span>
              <br />
            </div>
            <div className="footer-contacts">
              <IoCallSharp id="call-icon"></IoCallSharp>
              <span className="footer-span">
                <a href="tel:+919575726843"> +919575726843</a>
              </span>
            </div>
          </div>
          <div className="box">
            <h3>SPORT</h3>
            <div className="item">
              <img src="../images/hero/hero1.jpg" alt="" />
              <p>Google To Boost Android Security In Few Days</p>
            </div>
            <div className="item">
              <img src="../images/hero/hero2.jpg" alt="" />
              <p>Cespedes play the winning Baseball Game</p>
            </div>
          </div>
          <div className="box">
            <h3>CRICKET</h3>
            <div className="item">
              <img src="../images/hero/hero3.jpg" alt="" />
              <p>US Promises to give Intel aid to locate the soldiers</p>
            </div>
            <div className="item">
              <img src="../images/hero/hero1.jpg" alt="" />
              <p>Renewable energy dead as industry waits for Policy</p>
            </div>
          </div>
          <div className="box">
            <h3>LABELS</h3>
            {/*<i className='fa fa-chevron-right'></i>*/}
            <ul>
              <li>
                <span>Boxing</span> <label>(5)</label>
              </li>
              <li>
                <span>Fashion</span> <label>(6)</label>
              </li>
              <li>
                <span>Health</span> <label>(7)</label>
              </li>
              <li>
                <span>Nature</span> <label>(9)</label>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="legal  ">
        <div className="container footer-bottom">
          {/* classname flexSB */}
          <p>© all rights reserved | </p>
          <p>
            Created with <BsFillSuitHeartFill></BsFillSuitHeartFill> by Adil
            Warsi
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
