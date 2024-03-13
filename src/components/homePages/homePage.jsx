import React from "react";
import { Layout } from "antd";

import HeaderBar from "../headers/header"
import IntroBar from "../headers/intro"

import Slider from "../bodys/slider"
import ContentSlider from "../bodys/contentSilder"
export default function HomePage() {

  return (
    <div>
      <HeaderBar />
      <div className="container ">
      <IntroBar />

        <div  className="d-flex">
          <Slider  />
          <ContentSlider />

        </div>
        
      </div>
    </div>


  )
}
