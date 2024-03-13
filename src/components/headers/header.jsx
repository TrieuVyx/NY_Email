import logo from "../../imgs/wilmar-19.jpg"
import { Layout } from "antd";
import Navbar from "../headers/navbar";
const { Header } = Layout;

export default function headers() {
  return (
    <Header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div style={{ width: "20%", padding:"10px"}}>
        <img className="demo-logo" src={logo} style={{ width: "100%", height: "100%" }} alt="" />

      </div>
      <Navbar />
    </Header>
  )
}