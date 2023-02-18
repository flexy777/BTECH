import React, { Component } from "react";
class FourthSection extends Component {
  render() {
    return (
      <section className="bg-gradient-white-light-gray">
        <div className="container">
          <div className="row align-items-center justify-content-center">
           
            <div className="col-lg-6 ">
            <h1 style={{fontSize:"2rem", fontWeight:"bold", color:"#d9b223"}}>OUR COMPANY</h1>
              <h5
                className="alt-font font-weight-600 text-extra-dark-gray half-rem-bottom text-left text-lg-start wow animate__fadeInRight"
                data-wow-delay="0.2s"
              >
               Takes your Ideas From
              Concepts to
              Actuality
              </h5>
              <p
                style={{
                  color: "black",
                  fontWeight:"450",
                  // textAlign:"justify",
                  fontSize: "20px",
                }}
              >
                At Boolean Technology our goal is to take those little worms of
                ideas in your mind and create a fully functioning technology
                start up. We aim to use ground breaking technology making our
                clients future proof, as well as using key data analytics that
                could show them how to best run, market and financially position
                their company for success.
              </p>
            </div>

            <div
              className="col-lg-6  text-center md-margin-30px-bottom wow animate__fadeIn"
              data-wow-delay="0.2s"
              style={{
                width: "50%",
              }}
            >
              <img src="Boolean_Images/sebastian-svenson-d2w-_1LJioQ-unsplash.png" alt="" />
            </div>
          </div>
          <a href="#">
                <button className="btn btn-medium btn-yellow ">
                LEARN MORE
                <span className="m-2">
                  <i className="fas fa-arrow-circle-right"></i>
                </span>
                </button>
              </a>
        
        </div>
      </section>
    );
  }
}

export default FourthSection;
