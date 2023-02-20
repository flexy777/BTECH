import React, { Component } from "react";
class TeamTile extends React.Component {
  render() {
      const {name, position, picture} = this.props;
    return (
      <div
        className="col team-style-02 text-center sm-margin-15px-bottom wow animate__fadeIn"
        data-wow-delay="0.2s"
      >
        <figure>
          <div className="team-member-image border-radius-5px overflow-hidden">
            <img alt="" src={picture} />
            <figcaption className="team-member-position text-white" style={{padding:"0px",marginTop:"-85px", textAlign:"left", paddingLeft:"45px", paddingBottom:"50px"}}>
            <div className=" alt-font line-height-18px text-medium text-uppercase font-weight-500">
              {name}
            </div>
            <span className="text-small text-uppercase" style={{color: "#d9b223"}}>
              {position}
            </span>
          </figcaption>
    
          </div>
          
        </figure>
      </div>
    );
  }
}

class Team extends React.Component {
    render() { 
        const menus = [
            {quote:"Chief Executive Officer", name: "ERIK OBIANOZIE", position:"Chief Executive Officer", picture:"Boolean_Images/Group 75.png"},
            {quote:"Chief Operation Officer", name: "UGOCHUKWU RONALD EMERUWA", position:"Chief Operation Officer", picture:"Boolean_Images/Group 76.png"},
            {quote:"Chief Technology Officer", name: "SHOLANKE OLUWATOBI", position:"Chief Technology Officer", picture:"Boolean_Images/Group 77.png"}
            

        ];
        return (
          menus.map((item, i) => {
          return <TeamTile key={"item-team" + i} {...item} />;
          //  return <TeamTile key={"item"+i} icon={item.icon} title={item.title} />
        })
        );
    }
}
 
export default Team;
