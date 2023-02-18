import React, { Component } from "react";
class Footer extends Component {
  render() {
    const h4Style = {
      color: "#d9b223",
      fontWeight: "bold",
      fontSize: "20px",
    };
    const textStyle = {
      color: "white",
      fontWeight: "bold",
    };
    return (
      <footer style={{background:"#0B0A02"}} className="padding-six-tb xs-padding-thirteen-tb footer-design-agency border-top border-width-1px border-color-medium-gray footer-sticky">
        <div className="container">
          <div>
            <h1
              style={{
                fontSize: "30px",
                color: "white",
                textAlign: "center",
              }}
            >
              Subscribe To Our Newsletter
            </h1>

            <div className="newsletter-style-03 position-relative w-75 mx-auto mx-md-0 mx-lg-auto xs-w-95">
              <form
                action="https://lithohtml.themezaa.com/email-templates/subscribe-newsletter.php"
                method="post"
              >
                <input style={{borderRadius:"5px"}}
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  className="small-input border-color-medium-gray m-0 required"
                />
                <input type="hidden" name="redirect" defaultValue />
                <button style={{background:"#d9b223", borderTopRightRadius:"5px", borderBottomRightRadius:"5px"}} className="btn submit" type="submit">
                Join Us
                  {/* <i className="feather icon-feather-mail text-extra-dark-gray icon-extra-small m-0" /> */}
                </button>
                <div className="form-results position-absolute d-none" />
              </form>
            </div>
          </div>

          <div
            style={{ marginTop: "30px" }}
            className=" row d-flex justify-content-between"
          >
            <div className="col-lg-2 col-md-4">
              <h4 style={h4Style}>Company</h4>
              <p style={textStyle}>Our Partners</p>
              <p style={textStyle}>Careers</p>
              <p style={textStyle}>Privacy Policy</p>
              <p style={textStyle}>Terms of Service</p>
              <p style={textStyle}>Disclaimer</p>
            </div>
            <div className="col-lg-2 col-md-4">
              <h4 style={h4Style}>Services</h4>
              <p style={{ width: "200px", color: "white", fontWeight: "bold" }}>
                Software Development
              </p>
              <p style={{ width: "200px", color: "white", fontWeight: "bold" }}>
                Mobile Development
              </p>
              <p style={{ width: "200px", color: "white", fontWeight: "bold" }}>
                Network Implementation
              </p>
              <p style={textStyle}>IT Consulting</p>
              <p style={{ width: "200px", color: "white", fontWeight: "bold" }}>
                Digital Marketing
              </p>
            </div>
            <div className="col-lg-2 col-md-4">
              <h4 style={h4Style}>Products</h4>
              <p style={textStyle}>Krypton Pay</p>
              <p style={textStyle}>Resulta</p>
            </div>
            <div className="col-lg-2 col-md-3">
              <h4 style={h4Style}>Industries</h4>
              <p style={textStyle}>Education</p>
              <p style={{ width: "200px", color: "white", fontWeight: "bold" }}>
                Shipping & Logistics
              </p>
              <p style={textStyle}>Revenue</p>
              <p style={textStyle}>Fashion</p>
              <p style={textStyle}>FinTech</p>
            </div>
            <div className="col-lg-2 col-md-3">
              <h4 style={h4Style}>Contact Us</h4>
              <p><img style={{height:"30px"}} src="Boolean_Images/Iconly-Bulk-Calling.png"  /></p>
              <p style={{color:"white", fontWeight:"bold", width:"200px"}}>+2348139703721</p>
              <p style={{color:"white", fontWeight:"bold", width:"200px"}}>+2348139324572</p>
              <p><img style={{height:"30px"}} src="Boolean_Images/Iconly-Bulk-Message.png"  /></p>
              <p  style={{color:"white", fontWeight:"bold", width:"200px"}}>info@booleantech.com</p>
            </div>
          </div>
          <img style={{height:"50px", textAlign:"center", display:"block", margin:"auto"}} src="Boolean_Images/Tech_logo.png" />
          <hr style={{border:"1px solid white"}}/>
          <div className="row">
          <div className="col-lg-6">
          <p  style={{color:"white",fontSize:"20px"}}>© Boolean Technologies Limited 2022</p>
          </div>
          <div className="col-lg-6 d-flex justify-content-evenly">
            <img style={{height:"30px"}} src="Boolean_Images/facebook-app-symbol.png" />
            <img style={{height:"30px"}} src="Boolean_Images/instagram.png" />
            <img style={{height:"30px"}} src="Boolean_Images/twitter.png" />
            <img style={{height:"30px"}} src="Boolean_Images/linkedin.png" />
          </div>
          </div>
         
        </div>
      </footer>
    );
  }
}

export default Footer;