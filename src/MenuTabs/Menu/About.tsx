import vivAboutTranss from "../../assets/vivAboutTranss.png";
import { Col } from 'antd';
import { useTheme } from "../../ThemeSelect/ThemeContext";

const About = () => {
    const { darkMode } = useTheme();
    return (
        <Col className="m-4 rounded-2xl flex justify-center shadow-xl/30 shadow-cyan-500 border-2 border-green-200"
            style={{ backgroundColor: darkMode ? 'black' : 'white' }}>
            <img
                src={vivAboutTranss}
                alt="Sticker"
                className="w-72 h-auto object-contain transition-transform duration-800 ease-out hover:scale-110"
            />
        </Col>
    );
}

export default About;
