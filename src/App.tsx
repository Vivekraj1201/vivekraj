import { Button, Col, ConfigProvider, theme } from "antd";
import MenuTabs from "./MenuTabs/MenuTabs";
import { useTheme } from "./ThemeSelect/ThemeContext";

const { darkAlgorithm, defaultAlgorithm } = theme;

const App = () => {
  const { darkMode } = useTheme();

  return (
    <ConfigProvider
      theme={{ algorithm: darkMode ? darkAlgorithm : defaultAlgorithm }}
    >
      <Col style={{ background: darkMode ? "rgba(0, 0, 0, 1)" : "rgba(255, 255, 255, 1)" }}>
        <MenuTabs />
      </Col>
    </ConfigProvider>
  );
};

export default App;