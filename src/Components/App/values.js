import React, { Component, useState } from "react";
class ValueTile extends Component {
  render() {
    const customStyle = {
      background: "#191812",
      borderRadius: "10px",
      height: "400px",
      marginTop: "20px",
      paddingTop: "20px",
      color: "white",
      // fontWeight: "bold",
      textAlign: "left"
      // justifyContent: "left",
    };
    const imgStyle = {
      height: "50px",
      paddingBottom: "15px",
      textAlign: "left !important",
      marginTop: "50px"
     
    };
    const { icon, title, summary } = this.props;
    return (
      <div className="col wow animate__fadeIn" data-wow-delay="0.4s">
        <div  style= {customStyle}  className="feature-box-shadow padding-twenty-tb padding-twelve-lr xs-padding-fifteen-tb xs-padding-eight-lr feature-box-light-hover">
          <div className="feature-box-icon">
            <img src={icon} style={imgStyle}/>
          </div>
          <div className="feature-box-content last-paragraph-no-margin">
            <span className="text-extra-medium alt-font text-yellow text-gradient-orange-pink-hover d-block margin-5px-bottom font-weight-500">
              {title}
            </span>
            <p>{summary}</p>
          </div>
          <div className="feature-box-overlay bg-white" />
        </div>
      </div>
    );
  }
}

class Values extends Component {
  render() {
    const menus = [
      // {
      //   icon: "Boolean_Images/Group 83.png  ",
      //   title: "Getting things done",
      //   summary:
      //     "With a strong team of artists and borderline psychologists, we develop group breaking designs which keep users engaged with your product.",
      // },
      {
        icon: "Boolean_Images/Group 83.png ",
        title: "UI/UX DESIGN",
        summary:
        "With a strong team of artists and borderline psychologists, we develop group breaking designs which keep users engaged with your product.",
      },
      {
        icon: "Boolean_Images/Group 84.png ",
        title: "WEB DEVELOPMENT",
        summary:
        "As a reputed Web Development Company, we put our best possible efforts to achieve a huge appreciation and satisfaction from our clients",
      },
      {
        icon: "Boolean_Images/Group 86.png ",
        title: "ANDRIOD DEVELOPMENT",
        summary:
        "We provide high end enhanced Android apps which helps clients enhance their business. Constant research ensures we give our clients the best technology available",
      },
      {
        icon: "Boolean_Images/Group 86.png ",
        title: "IOS DEVELOPMENT",
        summary:
          "The Boolean Tech has a zeal in this sector that makes us one of the most sought after development companies in the region.",
      },
      {
        icon: "Boolean_Images/Group 87.png ",
        title: "DIGITAL MARKETING & SEO",
        summary:
          "At The Boolean Tech we don’t just develop and leave our clients high and dry, we work to ensure your company has the marketing channels to succeed.",
      },
    ];
    return menus.map((item, i) => {
      return <ValueTile key={"item-core-values" + i} {...item} />;
      //  return <TeamTile key={"item"+i} icon={item.icon} title={item.title} />
    });
  }
}

export default Values;
