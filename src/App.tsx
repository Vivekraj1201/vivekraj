import { ConfigProvider, theme, Col } from "antd";
import { useTheme } from "./ThemeSelect/ThemeContext";
import NavigationRoute from "./Navigation/NavigationRoute";
const { darkAlgorithm, defaultAlgorithm } = theme;

const App = () => {
  const { darkMode } = useTheme();

  return (
    <ConfigProvider
      theme={{ algorithm: darkMode ? darkAlgorithm : defaultAlgorithm }}
    >
      <Col style={{ background: darkMode ? "black" : "white" }}>
        <NavigationRoute />
      </Col>
    </ConfigProvider>
  );
};

export default App;