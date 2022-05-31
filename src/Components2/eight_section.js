import React, { Component } from "react";
class EightSection extends Component {
  render() {
    return (
      <div>
        <div>
            <div
              className="wow animate__fadeIn"
              data-wow-delay="0.4s"
              style = {{
                float: "right"
              }}              
            >
              {/* <a
                href="/contact-us"
                className="btn btn-fancy btn-box-shadow btn-small btn-dark-gray"
              >
                Start a project
              </a> */}
              <a href="/contact-us" className="btn-box-shadow btn-small btn btn-medium btn-fast-yellow btn-round-edge btn-fancy">
                Join the team!
              </a>
            </div>
        </div>        
        <div className="position-relative">
          <img src="new_images/creativity-bulb.jpg"></img>
          <div className="position-absolute" 
          style={{
              top: "25%",
              left: "55%"
          }}>
            <p style={{
                  color: "white",
                  lineHeight: "60px",
                  fontSize: "50px",
                  fontWeight: "800",
            }}>We are a Technology Agency</p>
            <p style={{
                  fontSize: "25px",
                  fontWeight: "600",
                  color: "black",
            }}>Express your idea, we will build and design!</p>
          </div>
        </div>
      </div>
    );
  }
}

export default EightSection;
