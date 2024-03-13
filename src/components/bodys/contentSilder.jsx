import React from "react";
import { Layout, theme } from "antd";

const { Content } = Layout;

export default function contentSlider() {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
        <Layout
            style={{
                padding: '0 24px 24px',
            }}
        >

            <Content
                style={{
                    padding: 24,
                    margin: 0,
                    minHeight: 400,
                    background: colorBgContainer,
                    borderRadius: borderRadiusLG,
                    height:80
                }}
            >
                Content
            </Content>
        </Layout>
    )
}