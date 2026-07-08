import { Button, Col, Row } from "antd";
import { useTheme } from "../../ThemeSelect/ThemeContext";
import vivekTransp from "../../assets/vivekTransp.png";
import { useNavigate } from "react-router-dom";
import VivekYadavResume from "../../Files/VivekYadavResume.pdf"

const Home = () => {
    const { darkMode } = useTheme();
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/contact")
    }
    return (
        <Col className="w-full min-h-screen flex items-center justify-center overflow-hidden">
            <Row gutter={[32, 32]} className="w-full">
                <Col
                    xs={24}
                    md={12}
                    className="flex flex-col items-center justify-center"
                >
                    <img
                        src={vivekTransp}
                        alt="Vivekraj"
                        className="mb-4 w-3/4 md:w-full max-w-md h-auto transition-transform duration-800 ease-out hover:scale-105"
                    />
                </Col>
                <Col
                    xs={24}
                    md={12}
                    className="flex flex-col items-center md:items-start justify-center"
                >
                    <h1
                        className={`font-kingstone leading-none text-center md:text-left ${darkMode ? "text-white" : "text-black"}`}
                        style={{
                            fontSize: "clamp(40px, 5vw, 80px)",
                            color: darkMode ? "#fff" : "#000",
                        }}
                    >
                        Vivek V. Yadav
                    </h1>

                    <h1 className="text-4xl md:text-6xl lg:text-8xl text-center md:text-left" style={{ color: darkMode ? 'white' : "black" }}>
                        <b>Turning Vision Into</b>
                        <br />
                        <b>Reality With Code</b>
                        <br />
                        <b>And Design.</b>
                    </h1>

                    <p className="text-sm md:text-lg mt-4 font-mono text-center md:text-justify px-4 md:px-0 font-bold" style={{ color: darkMode ? 'white' : 'black' }}>
                        As a skilled Frontend React.js developer,
                        I am dedicated to turning ideas into innovative web
                        applications. Explore my latest projects and articles,
                        showcasing my expertise in React.js and web development.
                    </p>
                    <Row className="w-full mt-4 px-4 md:px-0 gap-4 flex flex-col md:flex-row">
                        <a
                            href={VivekYadavResume}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button style={{ backgroundColor: darkMode ? "white" : "black", color: darkMode ? "black" : "white" }}>
                                View Resume
                            </Button>
                        </a>
                        <a
                            href={VivekYadavResume}
                            download="Vivek_Yadav_Resume.pdf"
                        >
                            <Button
                                style={{
                                    backgroundColor: darkMode ? "white" : "black",
                                    color: darkMode ? "black" : "white",
                                }}
                            >
                                Download Resume
                            </Button>
                        </a>

                        <Button style={{ backgroundColor: darkMode ? "white" : "black", color: darkMode ? "black" : "white" }}
                            onClick={handleClick}
                        >
                            Contact Me
                        </Button>
                    </Row>
                    <Row className="flex mt-6">
                        <h2 style={{ color: 'red', fontWeight: '700' }}>Note : This site is still under coding !</h2>
                    </Row>
                </Col>
            </Row >
        </Col >
    );
};

export default Home;
