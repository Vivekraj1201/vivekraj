import vivAboutTranss from "../../assets/vivAboutTranss.png";
import { Row, Col, Typography, Space } from "antd";
import { useTheme } from "../../ThemeSelect/ThemeContext";
import SkillSet from "../../MenuTabs/Menu/SkillSet";

const { Paragraph, Text } = Typography;

const About = () => {
    const { darkMode } = useTheme();

    return (
        <Row
            className="min-h-screen flex items-center px-5 py-10"
            style={{
                background: darkMode ? "#000" : "linear-gradient(135deg, #dbeafe, #f8fafc)",
            }}
        >
            <Row
                gutter={[40, 40]}
                align="middle"
                className="w-full"
            >
                <Col
                    xs={24} sm={24} md={10} lg={10} xl={10}
                    className="flex justify-center items-center"
                >
                    <img
                        src={vivAboutTranss}
                        alt="Vivek Raj"
                        className=" w-full max-w-[550px] h-[90vh] object-contain transition-transform  duration-500 hover:scale-105"
                    />
                </Col>

                <Col xs={24} sm={24} md={14} lg={14} xl={14} >
                    <Row
                        className="rounded-3xl p-8 backdrop-blur-xl border shadow-2xl"
                        style={{
                            background: darkMode ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.25)", border: "1px solid rgba(255,255,255,0.25)",
                        }}
                    >
                        <Paragraph
                            style={{
                                color: darkMode ? "#fff" : "#111",
                                fontSize: "18px",
                                lineHeight: "34px",
                                textAlign: "justify",
                                textIndent: "2em",
                                marginBottom: "20px",
                                fontWeight: 500,
                            }}
                        >
                            I'm a React.js Frontend Developer passionate about building
                            scalable, responsive, and user-centric web applications. With
                            experience in React, TypeScript, Redux Toolkit, TanStack React
                            Query, and modern UI frameworks, I enjoy creating clean,
                            maintainable code and delivering seamless user experiences.
                        </Paragraph>

                        <Paragraph
                            style={{
                                color: darkMode ? "#fff" : "#111",
                                fontSize: "18px",
                                lineHeight: "34px",
                                textAlign: "justify",
                                textIndent: "2em",
                                marginBottom: "20px",
                                fontWeight: 500,
                            }}
                        >
                            I have worked on enterprise applications, dashboard systems,
                            and mobile applications with a strong focus on performance,
                            API integration, reusable component architecture, and
                            responsive UI design.
                        </Paragraph>

                        <Paragraph
                            style={{
                                color: darkMode ? "#fff" : "#111",
                                fontSize: "18px",
                                lineHeight: "34px",
                                textAlign: "justify",
                                textIndent: "2em",
                                marginBottom: 0,
                                fontWeight: 500,
                            }}
                        >
                            I'm always eager to learn new technologies, solve challenging
                            problems, and contribute to impactful software projects. My goal
                            is to create elegant, scalable applications that provide
                            exceptional user experiences.
                        </Paragraph>
                    </Row>
                    <SkillSet />
                </Col>
            </Row>
        </Row>
    );
};

export default About;