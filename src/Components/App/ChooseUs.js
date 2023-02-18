import React, { Component, useState } from "react";
class ChooseUsTile extends Component {
  render() {
    // const [showStyle, setShowStyle] = useState(false);
    const { number, title, text } = this.props;

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
    };

    return (
      <div className="d-flex">
        <div style={{ paddingTop: "15px" }}>
          <h1
            style={{ width: "140px", color: "#F2EACC", fontWeight: "bolder" }}
          >
            {number}
          </h1>
        </div>
        <div style={{ textAlign: "left" }}>
          <span
            style={{ color: "#D9B223", fontWeight: "bold", fontSize: "25px" }}
          >
            {title}
          </span>
          <p
            style={{ fontWeight: "bold", color: "black" }}
          >
            {text}
          </p>
        </div>
        {/* <div className="feature-box-overlay bg-white" /> */}
      </div>
    );
  }
}

class ChooseUs extends Component {
  render() {
    const menus = [
      {
        number: "01",
        title: "Integrity",
        text: "We maintain transparency all through our development process. Giving our clients utmost certainty we can betrusted with whatever is thrown our way.",
      },
      {
        number: "02",
        title: "Quality at work",
        text: "At Boolean Technologies we do not compromise in any category of our process.",
      },
      {
        number: "03",
        title: "Customer satisfaction",
        text: "Excellent customer service is mandatory in any company. A field that seems to be lost in our region of the world.",
      },
      {
        number: "04",
        title: "Accountability",
        text: "We take great pride in every project we execute as we believe this is the change our company can make in the world. We are answerable to our clients with every decision we make.",
      },
      {
        number: "05",
        title: "Innovation",
        text: "We take your idea and with our team of experienced researchers and developers transform that into a product far beyond your expectations.",
      },
      {
        number: "06",
        title: "Getting things done",
        text: "Getting things done is our bread and butter. With a group of dedicated engineers you can be assured efficiency.",
      },
    ];
    return menus.map((item, i) => {
      return <ChooseUsTile key={"item-core-values" + i} {...item} />;
      //  return <TeamTile key={"item"+i} icon={item.icon} title={item.title} />
    });
  }
}

export default ChooseUs;