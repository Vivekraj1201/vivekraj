import { Button, Col, Row } from "antd";
import ThemeSelect from "../ThemeSelect/ThemeSelect";
const Home = () => {
    return <Col className="w-full h-screen flex items-center justify-center overflow-hidden">
        <Row className={'w-full'}>
            <Col className={'w-1/2 flex flex-col items-center justify-center'}>
                <img src="/../src/assets/vivek.png" alt="Vivekraj" className="mb-4 h-3/5" />
            </Col>
            <Col className={'w-1/2 flex flex-col items-center justify-center'}>
                <h1 className="text-8xl font-black">
                    <b>Turning Vision Into</b><br />
                    <b>Reality With Code</b><br />
                    <b> And Design.</b>
                </h1>
                <p className="text-lg mt-4 font-mono text-justify px-10 font-bold">
                    As a skilled Frontend React js developer, <br />
                    I am dedicated to turning ideas
                    into innovative web applications. Explore my lateset projects and articles,
                    showcasing my expertise in React js and web development.
                </p>
                <Row className={"w-full mt-4 px-10 gap-4"}>
                    <Button style={{ backgroundColor: "black", color: "white" }}>Resume</Button>
                    <Button className={'border-0'}>Contact Me</Button>
                </Row>
                <Row>
                    <ThemeSelect />
                </Row>
            </Col>
        </Row >
    </Col >
}

export default Home;