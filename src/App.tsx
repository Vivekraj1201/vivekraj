import { Button, Col, ConfigProvider, theme } from "antd";
import MenuTabs from "./MenuTabs/MenuTabs";
import { useTheme } from "./ThemeSelect/ThemeContext";

const { darkAlgorithm, defaultAlgorithm } = theme;

const App = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <ConfigProvider
      theme={{ algorithm: darkMode ? darkAlgorithm : defaultAlgorithm }}
    >
      <Col style={{ background: darkMode ? "#0000" : "#faf7f7" }}>
        <MenuTabs />
        <Button onClick={toggleTheme} color={darkMode ? "green" : "red"}>
          Theme Button
        </Button>
      </Col>
    </ConfigProvider>
  );
};

export default App;