import React from "react";
import "./MockupApp.css";
import butterfly from "./Images/butterflyimg.jpg";
import searchicon from "./Images/searchicon.png";
import homeicon from "./Images/homeicon.jpg";
import iconimg from "./Images/iconimg.png";
import iconsimg from "./Images/iconsimg.png";
import humanicon from "./Images/humanicon.png";
import bellicon from "./Images/bellicon.png";
import arrowicon from "./Images/arrowicon.png";
import akila_jpeg from "./Images/akila-jpeg.jpeg";

const MockupApp = () => {
  return (
    <div>
      <div className="container">
        <div className="containerchild">
          <div className="containerchild2">
            <div className="imgparent">
              <img className="butterflycss" src={butterfly} alt="butterfly" />

              <img
                className="searchiconcss"
                src={searchicon}
                alt="searchicon"
              />

              <img className="homeiconcss" src={homeicon} alt="homeicon" />

              <img className="iconimg" src={iconimg} alt="iconimg" />

              <img className="iconsimg" src={iconsimg} alt="iconsimg" />

              <img className="humaniconcss" src={humanicon} alt="humanicon" />

              <img className="belliconcss" src={bellicon} alt="bellicon" />

              <img className="arrowiconcss" src={arrowicon} alt="arrowicon" />
            </div>

            <div className="containerchild3">
              <div className="grandpictcss">
                <div className="picparentcss">
                  <img
                    className="picturecss"
                    src={akila_jpeg}
                    alt="akila-jpeg"
                  />
                  <span className="spancss">Hi Akila,</span>
                  <div className="welcss">welcome back</div>
                </div>
              </div>
              <div className="dayparentcss">
                <div className="daycss">Today</div>
                <br></br>

                <span className="daycss">$19,892</span>
                <span className="daycss">Account Balance</span>
                <br></br>

                <span className="daycss">$ 4,000</span>
                <span className="daycss">year-to-date Contribution</span>
                <br></br>

                <span className="daycss">$1,892</span>
                <span className="daycss">Total Interest</span>
                <br></br>

                <button className="daycss btncss">I want to</button>
                <br></br>

                <span className="daycss">Resent transaction</span>
                <br></br>

                <span className="daycss">2020-08-07</span>
                <span className="daycss">
                  <u>Withdrawl Transfer to Bank-xxx11</u>
                </span>
                <br></br>

                <span className="daycss">2020-08-07</span>
                <span className="daycss">
                  <u>Withdrawl Transfer to Bank-xxx11</u>
                </span>
                <br></br>

                <span className="daycss">2020-08-07</span>
                <span className="daycss">
                  <u>Withdrawl Transfer to Bank-xxx11</u>
                </span>
              </div>
            </div>
            <div className="incssparent">
              <div className="inccss">Retirement Income</div>

              <span className="spncss">Starting year 2056</span>
              <br></br>
              <div className="startingyearcss">
                <div className="goelcssparent">
                  <span className="goelcss">
                    $300,000<br></br>
                  </span>
                  <span className="goelcss">
                    <u>my Goel</u>
                  </span>
                </div>

                <div className="goelcssparent">
                  <span className="goelcss">
                    59%<br></br>
                  </span>
                  <span className="goelcss">
                    <u>Goel Achived</u>
                  </span>
                </div>

                <div className="goelcssparent">
                  <span className="goelcss">
                    $300<br></br>
                  </span>
                  <span className="goelcss">
                    <u>Est.Monthly Income</u>
                  </span>
                </div>
              </div>
              <br></br>

              <div>
                <div className="contributioncss">Conribution Overtime</div>
                <br></br>
                <div className="employerparent">
                  <div>.Employer: K73,500</div>
                  <div>.Employee: K52,500</div>
                  <div>.Total : Interest</div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MockupApp;
