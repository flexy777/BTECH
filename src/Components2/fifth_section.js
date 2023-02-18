import React, { Component } from "react";
import ChooseUs from "../Components/App/ChooseUs";
class FifthSection extends Component {
  render() {
    return (
      <section className="bg-gradient-white-light-gray">
        <div className="container-fluid">
          <div className="row align-items-center justify-content-center">
           
            <div className="col-lg-6 ">
            <img src="Boolean_Images/Group 73.png" alt="" />
            </div>

            <div
              className="col-lg-6  text-center md-margin-30px-bottom wow animate__fadeIn"
              data-wow-delay="0.2s"
            >
               <ChooseUs />
            </div>
          </div>
        
        </div>
      </section>
    );
  }
}

export default FifthSection;