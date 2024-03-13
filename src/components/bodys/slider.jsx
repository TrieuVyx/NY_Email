import React from "react";
import "./slider.scss"
import { LaptopOutlined, NotificationOutlined, UserOutlined } from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
const { Sider } = Layout;


export default function slider() {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <div className="sliderBar">
            <Layout>

                <Sider
                    width={200}
                    style={{
                        background: colorBgContainer
                    }}
                >
                    <div className="sliderBarTitle">
                        <span>HelpDesk</span>
                    </div>

                    
                    <div id="accordion">
                        <div className="card rounded-0">
                            <div className="card-header p-0" id="headingOne" >
                                <h5 className="mb-0 mt-0 d-flex">
                                    <button className="btn border-0 text-left " style={{ outline: "none" }} type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true">
                                        <i className="fa-solid fa-circle-right"></i> Group Item #1
                                    </button>
                                </h5>
                            </div>

                            <div id="collapseOne" className="collapse" >
                                <div className="card-body p-0" id="sub_heading_One">
                                    <h5 className="mb-0 mt-0 d-flex  justify-content-between" style={{ alignItem: "center" }}>
                                        <button className="btn border-0 text-left " style={{ outline: "none", width: "50%", textAlign: "left", padding: "0 0 0 30px" }} type="button" data-toggle="collapse" data-target="#collapse_subOne" aria-expanded="true">
                                            <i className="fa-solid fa-circle-right"></i> Item
                                        </button>
                                        <span style={{ padding: "6px 12px" }}>01</span>

                                    </h5>
                                </div>

                            </div>
                            <div className="card-header p-0" id="headingTwo" >
                                <h5 className="mb-0 mt-0 d-flex">
                                    <button className="btn border-0 text-left " style={{ outline: "none" }} type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true">
                                        <i className="fa-solid fa-circle-right"></i> Group Item #2
                                    </button>
                                </h5>

                                <div id="collapseTwo" className="collapse" >
                                    <div className="card-body p-0" id="sub_heading_One">
                                        <h5 className="mb-0 mt-0 d-flex  justify-content-between" style={{ alignItem: "center" }}>
                                            <button className="btn border-0 text-left " style={{ outline: "none", width: "50%", textAlign: "left", padding: "0 0 0 30px" }} type="button" data-toggle="collapse" data-target="#collapse_subOne" aria-expanded="true">
                                                <i className="fa-solid fa-circle-right"></i> Item
                                            </button>
                                            <span style={{ padding: "6px 12px" }}>01</span>
                                        </h5>

                                        <h5 className="mb-0 mt-0 d-flex  justify-content-between" style={{ alignItem: "center" }}>
                                            <button className="btn border-0 text-left " style={{ outline: "none", width: "50%", textAlign: "left", padding: "0 0 0 30px" }} type="button" data-toggle="collapse" data-target="#collapse_subTwo" aria-expanded="true">
                                                <i className="fa-solid fa-circle-right"></i> Item
                                            </button>
                                            <span style={{ padding: "6px 12px" }}>02</span>

                                        </h5>
                                    </div>


                                </div>

                            </div>
                        </div>

                    </div>

                </Sider>
            </Layout>
        </div>

    )
}