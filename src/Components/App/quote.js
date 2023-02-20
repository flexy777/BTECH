import React, { Component } from "react";
import AppLayer from "./AppLayer";

class Quote extends Component {
    render() {
        return (
            <AppLayer navbarClass={"navbar navbar-expand-lg navbar-dark bg-transparent header-light fixed-top header-reverse-scroll"}>
                <section
                    className="parallax bg-extra-dark-gray position-absolute"
                    data-parallax-background-ratio="0.5"
                    style={{ backgroundImage: 'url("Boolean_Images/Group 103.png")', height: "780px" }}
                >
                    <div className="opacity-extra-medium bg-extra-dark " />
                    <div className="container ">
                        <div className="row align-items-stretch justify-content-center small-screen" style={{ marginTop: "-10px" }}>
                            <div className="col-12 col-xl-6 col-lg-7 col-md-8 position-relative page-title-extra-small text-center d-flex justify-content-center flex-column" >
                                <h1 className="alt-font opacity-6 margin-20px-bottom" style={{ marginTop: "-150px", color: "#d9b223" }}>
                                    CONTACT
                                </h1>
                                <h3 className="text-white alt-font  font-weight-600 letter-spacing-minus-1px line-height-50 sm-line-height-45 xs-line-height-30 no-margin-bottom"
                                >
                                    GET A <span style={{ color: "#d9b223" }}>QUOTE</span>
                                </h3>
                                <h6 className="text-white alt-font font-weight-300 letter-spacing-minus-1px line-height-50 sm-line-height-45 xs-line-height-30 no-margin-bottom"
                                    style={{ fontSize: "23px" }}
                                >Let’s Start something great together today. Get A Quotation for your project today</h6>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="position-relative overflow-visible" style={{ backgroundColor: "black" }}>
                    <div className="container" style={{ marginTop: "-500px" }}>
                        <div style={{
                            background: "#0F0E0E", padding: "30px",
                            borderRadius: "20px",
                            // borderTopLeftRadius: "80px",
                            // borderTopRightRadius: "20px",
                            // borderBottomLeftRadius: "20px",
                            // borderBottomRightRadius: "80px",
                            border: "2px solid #d9b223"
                        }}>
                            <form>

                                <div style={{ justifyContent: "space-between" }} className="d-flex">
                                    <div style={{ width: "45%" }}><label style={{ color: "#d9b223" }} for="full_name">Full Name</label>
                                        <p><input style={{ borderRadius: "5px", background: "black", border: "2px solid #d9b223" }}
                                            type="text"
                                            name="full_name"
                                        /></p> </div>

                                    <div style={{ width: "45%" }}><label style={{ color: "#d9b223" }} for="email">E-mail Address</label>
                                        <p><input style={{ borderRadius: "5px", background: "black", border: "2px solid #d9b223" }}
                                            type="email"
                                            name="email"
                                        /></p> </div>
                                </div>


                                <div style={{ justifyContent: "space-between" }} className="d-flex">
                                    <div style={{ width: "45%" }}><label style={{ color: "#d9b223" }} for="phone_no">Phone Number</label>
                                        <p><input style={{ borderRadius: "5px", background: "black", border: "2px solid #d9b223" }}
                                            type="number"
                                            name="phone_no"
                                        /></p> </div>

                                    <div style={{ width: "45%" }}><label style={{ color: "#d9b223" }} for="country">Country</label>
                                        <p><input style={{ borderRadius: "5px", background: "black", border: "2px solid #d9b223" }}
                                            type="text"
                                            name="country"
                                        /></p> </div>
                                </div>

                                <div style={{ justifyContent: "space-between" }} className="d-flex">
                                    <div style={{ width: "45%" }}><label style={{ color: "#d9b223" }} for="project_type">Project Type</label>
                                        <p><input style={{ borderRadius: "5px", background: "black", border: "2px solid #d9b223" }}
                                            type="text"
                                            name="project_type"
                                        /></p> </div>

                                    <div style={{ width: "45%" }}><label style={{ color: "#d9b223" }} for="estimated_budget">Estimated Budget</label>
                                        <p><input style={{ borderRadius: "5px", background: "black", border: "2px solid #d9b223" }}
                                            type="text"
                                            name="estimated_budget"
                                        /></p> </div>
                                </div>

                                <div style={{ justifyContent: "space-between" }} className="d-flex">
                                    <div style={{ width: "45%" }}><label style={{ color: "#d9b223" }} for="maximum_time">Maximum Time for the Project</label>
                                        <p><input style={{ borderRadius: "5px", background: "black", border: "2px solid #d9b223" }}
                                            type="text"
                                            name="maximum_time"
                                        /></p> </div>

                                    <div style={{ width: "45%" }}><label style={{ color: "#d9b223" }} for="company_name">Company Name</label>
                                        <p><input style={{ borderRadius: "5px", background: "black", border: "2px solid #d9b223" }}
                                            type="text"
                                            name="company_name"
                                        /></p> </div>
                                </div>


                                <label style={{ color: "#d9b223" }} for="skills">Required Skill(s) For Project (Use a comma to separate more than one skill)</label>
                                <p><input style={{ borderRadius: "5px", background: "black", border: "2px solid #d9b223" }}
                                    type="text"
                                    name="skills"
                                /></p>


                                <label style={{ color: "#d9b223" }} for="file">Upload File</label>
                                <div style={{ borderRadius: "5px", background: "black", border: "2px solid #d9b223", textAlign: "center", height: "180px" }}>
                                    <div style={{ marginTop: "50px" }}><i style={{ color: "#d9b223", fontSize: "12px" }}> Drag File here or Click the button Below </i>
                                        <div type="file" style={{ margin: "auto", height: "50px", width: "60px", backgroundColor: " #d9b223", borderRadius: "10px", padding: "8px" }}><img src="Boolean_Images/Iconly-Bulk-Upload.png" alt="" style={{ width: "30px", height: "30px" }} /></div></div>
                                </div>
                                {/* <input
                                        type="file"
                                        name="file"
                                    /> */}

                                <label style={{ color: "#d9b223" }} for="message">Message</label>
                                <p>
                                    <textarea style={{ borderRadius: "10px", height: "200px", background: "black", border: "2px solid #d9b223" }}></textarea>
                                </p>

                                <a href="#">
                                    <button className="btn btn-medium btn-yellow " style={{ margin: "auto", alignItems: "center", display: "Flex" }}>
                                        SEND MESSAGE
                                        <span className="m-2">
                                            <img style={{ height: "15px" }} src="Boolean_Images/Iconly-Bulk-Send.png" />
                                        </span>
                                    </button>
                                </a>

                            </form>
                        </div>
                    </div>
                </section>

                <section style={{ backgroundImage: 'url("Boolean_Images/Group 94.png")', backgroundSize: "100%", color: "white", fontWeight: "bold" }}>
                    <div className="container" >
                        <div className="row " >
                            <div className="col-9">
                                <h6><span style={{ color: "#d9b223" }}>Creative developers</span>, clever thinkers and marketing superheroes apply for work with us.</h6>
                            </div>
                            <div className="col-3">
                                <a href="#">
                                    <button className="btn btn-medium btn-yellow " style={{ width: "200px", height: "50px" }}>
                                        JOIN THE TEAM
                                        <span className="m-2">
                                            <i className="fas fa-arrow-circle-right"></i>
                                        </span>
                                    </button>
                                </a>
                            </div>
                        </div>

                    </div>
                </section>


            </AppLayer >

        )
    }
}


export default Quote;