import { Col, Tabs } from 'antd';
import Home from './Menu/Home';
import SocialContact from './SocialContact';
import Projects from './Menu/Projects';
const MenuTabs = () => {
    const items = [
        { key: "1", label: <b>Home</b>, children: <Home /> },
        { key: "2", label: <b>Projects</b>, children: <Projects /> },
        { key: "3", label: <b>Contact</b>, children: 'contact' },
        { key: "4", label: <b>About</b>, children: 'about' },

    ];

    return (
        <Col style={{ position: "relative", margin: "12px" }}>
            <Tabs items={items} />
            <SocialContact />
        </Col>
    );
};

export default MenuTabs;
