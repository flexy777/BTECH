import React, { Component } from "react";
import EightSection from "../../Components2/eight_section";
import FifthSection from "../../Components2/fifth_section";
import FirstSection from "../../Components2/first_section";

import FourthSection from "../../Components2/fourth_section";

import SecondSection from "../../Components2/second_section";

import SixthSection from "../../Components2/sixth_section";

import Stats from "../../Components2/stat";


import NinthSection from "../../Components2/ninth_section";

import AppLayer from "./AppLayer";
import TeamSlider from "../../Components2/TeamSlider";
class HomeApp extends Component {
  render() {
    return (
      <AppLayer>
          
          <FirstSection />

          <SixthSection />

          <FourthSection />

          <SecondSection />

          <FifthSection />

          <Stats />
          
          <TeamSlider />

          <EightSection />

          {/* <NinthSection /> */}

      </AppLayer>
     
    );
  }
}

export default HomeApp;
