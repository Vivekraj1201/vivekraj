import {
    GithubOutlined,
    InstagramOutlined,
    LinkedinFilled,
    WhatsAppOutlined,
    MoonOutlined,
    SunOutlined,
} from "@ant-design/icons";
import { Switch, Grid } from "antd";
import { useTheme } from "../ThemeSelect/ThemeContext";

const { useBreakpoint } = Grid;

const SocialContact = () => {
    const { darkMode, toggleTheme } = useTheme();
    const screens = useBreakpoint();

    const isMobile = !screens.md;

    return (
        <div
            style={{
                position: "absolute",
                top: isMobile ? 8 : 12,
                right: isMobile ? 8 : 24,
                display: "flex",
                alignItems: "center",
                gap: isMobile ? 10 : 20,
                fontSize: isMobile ? 18 : 22,
                zIndex: 1000,
                flexWrap: "wrap",
                justifyContent: "flex-end",
                maxWidth: isMobile ? "90vw" : "auto",
            }}
        >
            <a
                href="https://wa.me/918308120194"
                target="_blank"
                rel="noopener noreferrer"
            >
                <WhatsAppOutlined style={{ color: "#0fc765" }} />
            </a>

            <a
                href="https://instagram.com/vivekraj_1201"
                target="_blank"
                rel="noopener noreferrer"
            >
                <InstagramOutlined style={{ color: "#E72D88" }} />
            </a>

            <a
                href="https://linkedin.com/in/vivekraj1201"
                target="_blank"
                rel="noopener noreferrer"
            >
                <LinkedinFilled style={{ color: "#2433fb" }} />
            </a>

            <a
                href="https://github.com/vivekraj1201"
                target="_blank"
                rel="noopener noreferrer"
            >
                <GithubOutlined
                    style={{
                        color: darkMode ? "#fff" : "#000",
                    }}
                />
            </a>

            <Switch
                checked={darkMode}
                onChange={toggleTheme}
                checkedChildren={<MoonOutlined />}
                unCheckedChildren={<SunOutlined />}
                size={isMobile ? "small" : "default"}
            />
        </div>
    );
};

export default SocialContact;