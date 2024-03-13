import React from "react";
import { Layout, theme } from "antd";

const { Content } = Layout;
export default function helpDesk() {
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
                    margin: 0,
                    minHeight: 400,
                    background: colorBgContainer,
                    borderRadius: borderRadiusLG,
                }}
            >
                <div><h1
                    style={{
                        margin: "5px 10px 5px 10px",
                        textAlign: "left"
                    }}
                >Leave Date Info</h1></div>
                <div className="buttonHelpDesk"
                    style={{
                        textAlign: "left",
                        margin: "5px 10px 5px 10px",
                        border: "solid gray 1px"
                    }}
                >
                    <button style={{
                        margin: "0 10px 0 0",
                        padding: "5px",
                        borderRadius: "5px",
                        border: "none",
                        background: "none",
                        cursor: "pointer"
                    }}><i className="fa-solid fa-plus"></i>Create leave form</button>
                    <button
                        style={{
                            padding: "5px",
                            borderRadius: "5px",
                            border: "none",
                            background: "none",
                            cursor: "pointer"
                        }}
                    ><i className="fa-solid fa-plus"

                    ></i>List form</button>
                </div>

                <div className="tableHelpDesk"
                    style={{
                        margin: "5px 10px 5px 10px"
                    }}>

                    <table className="table" style={{
                        width: "100%"
                    }}>
                        <thead>
                            <tr style={{
                                background: "#001529",
                                color: "white"
                            }}>
                                <th style={{
                                    padding: "5px",
                                    textAlign:"center"
                                }}>#</th>
                                <th style={{
                                    padding: "5px",
                                    textAlign:"center"
                                }}>Reason list</th>
                                <th style={{
                                    padding: "5px",
                                    textAlign:"center"
                                }}>Old year</th>
                                <th style={{
                                    padding: "5px",
                                    textAlign:"center"
                                }}>Advance leave</th>
                                <th style={{
                                    padding: "5px",
                                    textAlign:"center"
                                }}>Leave day</th>
                                <th style={{
                                    padding: "5px",
                                    textAlign:"center"
                                }}>Total</th>
                                <th style={{
                                    padding: "5px",
                                    textAlign:"center"
                                }}>Used</th>
                                <th style={{
                                    padding: "5px",
                                    textAlign:"center"
                                }}>Balance</th>


                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">5</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">6</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">7</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">8</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
                <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                        <li className="page-item disabled">
                            <a className="page-link" href={'#'} tabindex="-1">Previous</a>
                        </li>
                        <li className="page-item"><a className="page-link" href={'#'}>1</a></li>
                        <li className="page-item"><a className="page-link" href={'#'}>2</a></li>
                        <li className="page-item"><a className="page-link" href={'#'}>3</a></li>
                        <li className="page-item">
                            <a className="page-link" href={'#'}>Next</a>
                        </li>
                    </ul>
                </nav>
            </Content>
        </Layout>
    )
}