import { useState } from "react";
import { Tabs, Drawer, Menu, Button, Grid } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { useNavigate, useLocation } from "react-router-dom";

import { NavigationPages } from "./NavigationPages";

const { useBreakpoint } = Grid;

const MenuTabNavigation = () => {
  const screens = useBreakpoint();

  const navigate = useNavigate();
  const location = useLocation();

  const [drawerOpen, setDrawerOpen] = useState(false);

  const activeKey = location.pathname;

  return (
    <>
      {!screens.md && (
        <>
          <Button
            icon={<MenuOutlined />}
            onClick={() => setDrawerOpen(true)}
          />

          <Drawer
            placement="left"
            open={drawerOpen}
            onClose={() => setDrawerOpen(false)}
          >
            <Menu
              mode="inline"
              selectedKeys={[activeKey]}
              onClick={({ key }) => {
                navigate(key);
                setDrawerOpen(false);
              }}
              items={NavigationPages.map((item) => ({
                key: item.key,
                label: item.label,
              }))}
            />
          </Drawer>
        </>
      )}

      {screens.md && (
        <Tabs
          activeKey={activeKey}
          onChange={(key) => navigate(key)}
          items={NavigationPages.map((item) => ({
            key: item.key,
            label: item.label,
          }))}
        />
      )}
    </>
  );
};

export default MenuTabNavigation;