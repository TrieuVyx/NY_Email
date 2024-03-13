import React from "react";

import HeaderBar from "../headers/header"
import IntroBar from "../headers/intro"
import Slider from "../bodys/slider"
import ContentHelpDesk from "../bodys/contentHelpDesk";
export default function helpdesk() {
    return (
        <div>
            <HeaderBar />

            <div className="container">
            <IntroBar />
                <div className="d-flex">
                    <Slider />
                    <ContentHelpDesk />
                </div>
            </div>
        </div>



    )
}