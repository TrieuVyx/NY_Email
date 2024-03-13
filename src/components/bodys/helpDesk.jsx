import React from "react";
import "./slider.scss"
import ContentHelpDesk from "./contentHelpDesk"
import Slider from "./slider"

import { LaptopOutlined, NotificationOutlined, UserOutlined } from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
const {  Sider } = Layout;
const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
    const key = String(index + 1);
    return {
        key: `sub${key}`,
        icon: React.createElement(icon),
        label: `subnav ${key}`,
        children: new Array(4).fill(null).map((_, j) => {
            const subKey = index * 4 + j + 1;
            return {
                key: subKey,
                label: `option${subKey}`,
            };
        }),
    };
});

export default function helpDesk() {
    const {
        token: { colorBgContainer},
    } = theme.useToken();
    return (
        <div className="sliderBar">
            <Layout>

                
               
            </Layout>
        </div>

    )
}