import { useState } from "react";
import { Col, Tabs, Drawer, Button, Menu, Grid } from "antd";
import { MenuOutlined } from "@ant-design/icons";

import Home from "./Menu/Home";
import Projects from "./Menu/Projects";
import SocialContact from "./SocialContact";
import About from "./Menu/About"
import Contact from "./Menu/Contact"
const { useBreakpoint } = Grid;

const MenuTabs = () => {
    const screens = useBreakpoint();
    const [activeKey, setActiveKey] = useState("1");
    const [drawerOpen, setDrawerOpen] = useState(false);

    const items = [
        { key: "1", label: <b>Home</b>, children: <Home /> },
        { key: "2", label: <b>Projects</b>, children: <Projects /> },
        { key: "3", label: <b>Contact</b>, children: <><Contact /></> },
        { key: "4", label: <b>About</b>, children: <><About /></> },
    ];

    const activeContent = items.find((item) => item.key === activeKey)?.children;

    return (
        <Col style={{ position: "relative", margin: "12px" }} >
            {!screens.md && (
                <>
                    <Button
                        icon={<MenuOutlined />}
                        onClick={() => setDrawerOpen(true)}
                        style={{ marginBottom: 16 }}
                    ></Button>
                    <Drawer
                        title="Menu"
                        placement="left"
                        open={drawerOpen}
                        onClose={() => setDrawerOpen(false)}
                    >
                        <Menu
                            mode="inline"
                            selectedKeys={[activeKey]}
                            onClick={({ key }) => {
                                setActiveKey(key);
                                setDrawerOpen(false);
                            }}
                            items={items.map((item) => ({
                                key: item.key,
                                label: item.label,
                            }))}
                        />
                    </Drawer>
                    <>{activeContent}</>
                </>
            )}
            {screens.md && (
                <Tabs
                    activeKey={activeKey}
                    onChange={setActiveKey}
                    items={items}
                />
            )}
            <SocialContact />
        </Col>
    );
};

export default MenuTabs;
