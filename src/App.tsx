import { Col, ConfigProvider, theme } from "antd";
import MenuTabs from "./MenuTabs/MenuTabs";
import { useTheme } from "./ThemeSelect/ThemeContext";

const { darkAlgorithm, defaultAlgorithm } = theme;

const App = () => {
  const { darkMode } = useTheme();

  return (
    <ConfigProvider
      theme={{ algorithm: darkMode ? darkAlgorithm : defaultAlgorithm }}
    >
      <Col style={{ background: darkMode ? "black" : "white" }}>
        <MenuTabs />
      </Col>
    </ConfigProvider>
  );
};

export default App;