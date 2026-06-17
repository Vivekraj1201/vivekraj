import { Button, Col, Row } from "antd";
import { useTheme } from "../../ThemeSelect/ThemeContext";
import vivDark from "../../assets/vivDark.png";
import vivek from "../../assets/vivek.png";

const Home = () => {
    const { darkMode } = useTheme();

    return (
        <Col className="w-full min-h-screen flex items-center justify-center overflow-hidden">
            <Row gutter={[32, 32]} className="w-full">
                <Col
                    xs={24}
                    md={12}
                    className="flex flex-col items-center justify-center"
                >
                    <img
                        src={darkMode ? vivDark : vivek}
                        alt="Vivekraj"
                        className="mb-4 w-3/4 md:w-full max-w-md h-auto"
                    />
                </Col>
                <Col
                    xs={24}
                    md={12}
                    className="flex flex-col items-center md:items-start justify-center"
                >
                    <h1
                        className="font-kingstone leading-none text-center md:text-left"
                        style={{
                            fontSize: "clamp(40px, 5vw, 80px)",
                            color: darkMode ? "#fff" : "#000",
                        }}
                    >
                        Vivek V. Yadav
                    </h1>

                    <h1 className="text-4xl md:text-6xl lg:text-8xl font-black text-center md:text-left">
                        <b>Turning Vision Into</b>
                        <br />
                        <b>Reality With Code</b>
                        <br />
                        <b>And Design.</b>
                    </h1>

                    <p className="text-sm md:text-lg mt-4 font-mono text-center md:text-justify px-4 md:px-0 font-bold">
                        As a skilled Frontend React.js developer,
                        I am dedicated to turning ideas into innovative web
                        applications. Explore my latest projects and articles,
                        showcasing my expertise in React.js and web development.
                    </p>

                    <Row className="w-full mt-4 px-4 md:px-0 gap-4 flex flex-col md:flex-row">
                        <Button style={{ backgroundColor: darkMode ? "white" : "black", color: darkMode ? "black" : "white" }}>
                            Resume
                        </Button>
                        <Button style={{ backgroundColor: darkMode ? "white" : "black", color: darkMode ? "black" : "white" }}>
                            Contact Me
                        </Button>
                    </Row>
                </Col>
            </Row>
        </Col>
    );
};

export default Home;