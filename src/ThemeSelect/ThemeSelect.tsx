import { Button, ConfigProvider, Divider, Switch, theme } from 'antd';
import React, { useState } from 'react';

const ThemeSelect: React.FC = () => {
    const { darkAlgorithm, defaultAlgorithm } = theme;
    const [darkMode, setDarkMode] = useState(false);

    return (
        <>
            {/* <ColorPicker showText value={primary} onChange={(color) => setPrimary(color.toHexString())} /> */}
            <Divider />
            <ConfigProvider
                theme={{
                    algorithm: darkMode ? darkAlgorithm : defaultAlgorithm,
                    token: {
                        colorPrimary: darkMode ? '#fa541c' : '#1677ff',
                    },
                    components: {
                        Button: {
                            colorTextLightSolid: darkMode ? '#ffff' : '#0a060f',
                        },
                    },
                }}
            >
                <div style={{ padding: 20 }}>
                    <Switch
                        checked={darkMode}
                        onChange={setDarkMode}
                        checkedChildren="Dark"
                        unCheckedChildren="Light"
                    />

                    <br />
                    <br />
                    <Button type="primary">Test Button</Button>
                </div>
            </ConfigProvider>
        </>
    );
};


ThemeSelect.propTypes = {
};
export default ThemeSelect;