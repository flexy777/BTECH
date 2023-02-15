import React, { Component } from "react";
class Header extends Component {
  render() {
    const { navbarClass} = this.props;
    return (
      <header>
        <nav className={navbarClass || "navbar navbar-expand-lg navbar-light bg-transparent header-light fixed-top navbar-boxed header-reverse-scroll"}>
          <div className="container-fluid nav-header-container">
            <div className="col-5 col-lg-2 ps-lg-0 me-auto me-lg-0">
              <a className="navbar-brand" href="/">
                <img
                  src="Boolean_Images/Tech_logo.png"
                  data-at2x="Boolean_Images/Tech_logo.png"
                  alt=""
                  className="default-logo"
                />
                <img
                  src="Boolean_Images/Tech_logo.png"
                  data-at2x="Boolean_Images/Tech_logo.png"
                  alt=""
                  className="alt-logo"
                />
                <img
                  src="Boolean_Images/Tech_logo.png"
                  data-at2x="Boolean_Images/Tech_logo.png"
                  className="mobile-logo"
                  alt=""
                />
              </a>
            </div>
            <div className="col-auto col-lg-8 md-position-initial md-no-padding">
              <button
                className="navbar-toggler float-end"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-line" />
                <span className="navbar-toggler-line" />
                <span className="navbar-toggler-line" />
                <span className="navbar-toggler-line" />
              </button>
              <div
                className="collapse navbar-collapse justify-content-center"
                id="navbarNav"
              >
                <ul className="navbar-nav alt-font">
                  <li className="nav-item dropdown megamenu top">
                    <a href="/" className="nav-link">
                      Home</a>
                    </li>
                  <li className="nav-item dropdown simple-dropdown top">
                    <a href="/about-us" className="nav-link">
                      About Us</a>
                  </li>
                  
                  <li className="nav-item dropdown simple-dropdown top">
                    
                    <a href="/services" className="nav-link">
                      Services </a>
                    </li>

                  <li className="nav-item dropdown simple-dropdown top">
                    
                    <a href="#" className="nav-link">
                      Products </a>
                    <i
                      className="fa fa-angle-down dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-hidden="true"
                    />
                    <ul className="dropdown-menu" role="menu">
                      <li className="nav-item dropdown simple-dropdown">
                        <a href="/krypton-pay" >
                          Krypton Pay
                        </a>
                        
                      </li>
                      {/* <li className="dropdown">
                        <a data-bs-toggle="dropdown" href="javascript:void(0);">
                          Face Analyzer - Skin Care Assistant
                        
                        </a>

                      </li> */}
                    </ul>
                  </li>
                  

                  {/* <li className="nav-item dropdown simple-dropdown">
                    <a href="#" className="nav-link">
                      Blog
                    </a>
                    
                  </li> */}
                      
                  <li className="nav-item dropdown megamenu top">
                    <a href="/contact-us" className="nav-link">
                      Contact Us
                    </a>
                 
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-auto col-lg-2 text-end hidden-xs px-lg-0">
              <div className="header-social-icon d-inline-block">
              <a
                    href="contact-us.html"
                    className="btn btn-medium btn-yellow btn-round-edge"
                  >
                    GET A QUOTE
                    <span className="m-2"><i className="fas fa-arrow-circle-right"></i></span>
                  </a>
              </div>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
