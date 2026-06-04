import { Row } from "antd";
// import { LinkedinOutlined } from "@ant-design/icons";
import MenuTabs from "./MenuTabs/MenuTabs";

export default function App() {
  return (
    <Row className="h-screen m-2 overflow-hidden">
      <MenuTabs />
    </Row>
  );
}