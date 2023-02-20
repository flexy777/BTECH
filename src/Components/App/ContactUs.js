import React, { Component } from "react";
import AppLayer from "./AppLayer";

class ContactUs extends Component {
  render() {
    return (
      <AppLayer
        navbarClass={
          "navbar navbar-expand-lg navbar-dark bg-transparent header-light fixed-top header-reverse-scroll"
        }
      >
        <section
          style={{
            backgroundImage: 'url("Boolean_Images/Group 98.png")',
            backgroundSize: "100%",
          }}
        >
          <div className="container">
            <div class="col-lg-12 text-center">
              <h1
                style={{
                  fontSize: "20px",
                  color: "#d9b223",
                }}
              >
                CONTACT
              </h1>
              <h1
                style={{
                  fontSize: "60px",
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                HAVE A <span style={{ color: "#d9b223" }}>PROJECT?</span>
                <br />
                WE WOULD <span style={{ color: "#d9b223" }}>LOVE TO HELP.</span>
              </h1>
              <p style={{color:"white", fontSize:"20px"}}>
                Let’s Start something great together today.
                <br />
                Get in touch with the team today.
              </p>
            </div>
            <div class="col- 12 col-lg-5 offset-lg-1 col-md-6"></div>

          </div>
        </section>
        {/* end page title */}
        {/* start section */}
        <section
          style={{
           background:"black"
          }}
        >
          <div className="container-fluid">
            <div className="row">
              <div
                style={{
                  paddingLeft: "60px",
                }}
                className="col-lg-6"
              >
                <h1
                  style={{
                    fontSize: "3rem",
                    fontWeight: "bold",
                    color: "#d9b223",
                  }}
                >
                  GET IN TOUCH
                </h1>

                <h1
                  style={{
                    color: "#d9b223",
                    fontSize: "20px",
                    fontWeight: "bold",
                    marginBottom:"0px"
                    
                  }}
                >
                  <img style={{height:"30px", marginRight:"10px"}} src="Boolean_Images/Group 99.png" />PHONE
                </h1>
                <h3
                  style={{
                    color: "white",
                    fontSize: "20px",
                  }}
                >
                 +234 909 426 7360
                </h3>
                <h1
                  style={{
                    color: "#d9b223",
                    fontSize: "20px",
                    fontWeight: "bold",
                    marginBottom:"0px"
                   
                  }}
                >
                  <img style={{height:"30px", marginRight:"10px"}} src="Boolean_Images/Group 100.png" /> E-MAIL
                </h1>
                <p
                  style={{
                    color: "white",
                    fontSize: "20px",
                  }}
                >
                  coo@boolean.tech
                </p>
                <h1
                  style={{
                    color: "#d9b223",
                    fontSize: "20px",
                    fontWeight: "bold",
                    marginBottom:"0px"
                   
                  }}
                >
                 <img style={{height:"30px", marginRight:"10px"}} src="Boolean_Images/Group 101.png" />  WEBSITE
                </h1>
                <p
                  style={{
                    color: "white",
                    fontSize: "20px",
                  }}
                >
                  www.theboolean.tech
                </p>
                <h1
                  style={{
                    color: "#d9b223",
                    fontSize: "20px",
                    fontWeight: "bold",
                    marginBottom:"0px"
                   
                  }}
                >
                  <img style={{height:"30px", marginRight:"10px"}} src="Boolean_Images/Group 102.png" /> OFFICE ADDRESS
                </h1>
                <p
                  style={{
                    color: "white",
                    fontSize: "20px",
                  }}
                >
                  Plot 576, Independence Ave,
Central Business District,
900103, Abuja.
                </p>
              </div>
              <div className="col-lg-6">
              <div style={{background:"#0F0E0E", padding:"30px",
              borderTopLeftRadius:"80px",
              borderTopRightRadius:"20px",
              borderBottomLeftRadius:"20px",
              borderBottomRightRadius:"80px",
              border:"2px solid #d9b223"}}>
              <form>
              <div style={{justifyContent:"space-between"}}  className="d-flex">
                 <div><label style={{color:"#d9b223"}} for="first_name">First Name</label>
                 <p><input style={{borderRadius:"10px", width:"200px", background:"black", border:"2px solid #d9b223"}}
                  type="text"
                  name="first_name"
                /></p> </div> 

              <div><label style={{color:"#d9b223"}} for="last_name">Last Name</label>
                 <p><input style={{borderRadius:"10px", width:"200px", background:"black", border:"2px solid #d9b223"}}
                  type="text"
                  name="last_name"
                /></p> 
                </div>
                </div>
                <label style={{color:"#d9b223"}} for="email">E-mail Address</label>
                 <p><input style={{borderRadius:"10px", background:"black", border:"2px solid #d9b223"}}
                  type="email"
                  name="email"
                /></p>

                <label style={{color:"#d9b223"}} for="phone">Phone Number</label>
                 <p><input style={{borderRadius:"10px", background:"black", border:"2px solid #d9b223"}}
                  type="text"
                  name="phone"
                /></p>
                <label style={{color:"#d9b223"}} for="message">Message</label>
                <p>
                  <textarea  style={{borderRadius:"10px", height:"200px", background:"black", border:"2px solid #d9b223"}}>
                  

                  </textarea>
                </p>
                <a href="#">
                  <button className="btn btn-medium btn-yellow ">
                    SEND MESSAGE
                    <span className="m-2">
                     <img style={{height:"15px"}} src="Boolean_Images/Iconly-Bulk-Send.png" />
                    </span>
                  </button>
                </a>

              </form>
              </div>
              </div>
            </div>
          </div>
        </section>
        {/* end section */}
        
        {/* start map section */}
        <section className="no-padding-tb wow animate__fadeIn">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12 px-0">
                <div className="map-style-3 h-500px xs-h-300px">
                  <iframe
                    classname="w-100 h-100 filter-grayscale-100"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15761.04702017564!2d7.4723841!3d90398707!3m2!1i1024!2i768!4f131!3m3!1m2!1s0x0%3A0x4a445dad6c5a0a80!2sThe%20Boolean%20Technologies%20Nig%20Ltd!5e0!3m2!1sen!2sng!4v1634043314606!5m2!1sen!2sng"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    width="100%"
                    height={500}
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* end map section */}
      
      </AppLayer>
    );
  }
}

export default ContactUs;