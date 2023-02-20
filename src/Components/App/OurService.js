import React, { Component, useState } from "react";
class OurServiceTitle extends Component {
    render() {
        // const [showStyle, setShowStyle] = useState(false);
        const { number, title, summary, icon } = this.props;

        // const customStyle = {
        //   background: "#191812",
        //   borderRadius: "10px",
        // //   height: "400px",
        //   marginTop: "20px",
        //   paddingTop: "20px",
        // };
        const imgStyle = {
            height: "50px",
            textAlign: "left",
            paddingLeft: "20px" ,
            paddingBottom: "10px" 
        };

        return (

            <div style={{ padding: "10px", textAlign: "left"}}>

                <div style={{ borderBottom: "1px solid #d9b223", height: "220px", display: "flex", textAlign: "left" }}>
                   
                    <div style={{ borderRight: "1px solid #d9b223", height: "200px", width: "10%", textAlign: "center", paddingTop: "50px" }}>
                        <h5 style={{ color: "#F2EACC", fontWeight: "500" }}>
                            {number}
                        </h5></div>
                    <div style={{ height: "max-content", width: "90%" }}>
                    <div className="feature-box-icon">
                        <img src={icon} style={imgStyle} />
                    </div>
                        <span
                            style={{ color: "#D9B223", fontWeight: "bold", fontSize: "20px", paddingLeft: "20px" }}
                        >
                            {title}
                        </span>
                        <p
                            style={{ fontWeight: "bold", paddingLeft: "20px", fontSize:"12px" }}
                        >
                            {summary}
                        </p>
                    </div>
                </div>

            </div>


        );
    }
}

class OurService extends Component {
    render() {
        const menus = [
            {
                number: "01",
                icon: "Boolean_Images/Group 83.png ",
                title: "UI/UX DESIGN",
                summary:
                    "Our web development experts at The Boolean Tech have accomplished a wide range of commercial projects on varying website development platforms. These include WordPress, PHP, SharePoint, ASP.NET, CakePHP, Joomla and Drupal. As a reputed Web Development Company, we put our best possible efforts to achieve a huge appreciation and satisfaction from our clients",
            },
            {
                number: "02",
                icon: "Boolean_Images/Group 84.png ",
                title: "WEB DEVELOPMENT",
                summary:
                    "The Boolean Tech is well known company for its iOS development. We have created a presence in Nigeria with our experience and clients who we have had the privilege to work with in last couple years. We have developed numerous applications on iPad, and iPhone. The Boolean Tech has a zeal in this sector that makes us one of the most sought after development companies in the region. Our iOS Developers are experts in their trade and provide best solution in development",

            },
            {
                number: "03",
                icon: "Boolean_Images/Group 86.png ",
                title: "ANDRIOD DEVELOPMENT",
                summary:
                    "The Boolean Tech is a leading mobile app development company in Nigeria, with around 15+ apps in our portfolio working on all OS versions. We have an expert team in developing Android apps. We provide high end enhanced Android apps which helps clients enhance their business. Constant research ensures we give our clients the best technology available",
            },
            {
                number: "04",
                icon: "Boolean_Images/Group 86.png ",
                title: "IOS DEVELOPMENT",
                summary:
                    "With a strong team of artists and borderline psychologists, we develop group breaking designs which keep users engaged with your product.",
            },
            {
                number: "05",
                icon: "Boolean_Images/Group 87.png ",
                title: "DIGITAL MARKETING & SEO",
                summary:
                    "At The Boolean Tech we don’t just develop and leave our clients high and dry, we work to ensure your company has the marketing channels to succeed. We do this by providing digital marketing and market research support. Digital marketing services are the best medium to not only connect with clients and partners but also generate trust and revenue.",
            }
        ];
        return menus.map((item, i) => {
            return <OurServiceTitle key={"item-core-values" + i} {...item} />;
            //  return <TeamTile key={"item"+i} icon={item.icon} title={item.title} />
        });
    }
}

export default OurService;