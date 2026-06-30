import { Row, Space, Typography } from "antd";
import antd from "../../assets/icons/antd.png";
import css3 from "../../assets/icons/css3.png";
import git from "../../assets/icons/git.png";
import html5 from "../../assets/icons/html5.png";
import js from "../../assets/icons/js.png";
import materialui from "../../assets/icons/materialui.png";
import postman from "../../assets/icons/postman.png";
import python from "../../assets/icons/python.png";
import react from "../../assets/icons/react.png";
import rechart from "../../assets/icons/rechart.png";
import redux from "../../assets/icons/redux.png";
import sql from "../../assets/icons/sql.png";
import tailwind from "../../assets/icons/tailwind.png";
import tanstack from "../../assets/icons/tanstack.png";
import typescript from "../../assets/icons/typescript.png";
import bootstrap from "../../assets/icons/bootstrap.png";
import mongodb from "../../assets/icons/mongodb.png";
import chatgpt from "../../assets/icons/chatgpt.png";
import perplexity from "../../assets/icons/perplexity.png";
import gemini from "../../assets/icons/gemini.png";
import claude from "../../assets/icons/claude.png"
import debugging from "../../assets/icons/debugging.png"

const { Text } = Typography;
const SkillStyle = "border-2 border-amber-500 rounded-full px-4 py-2 shadow-lg duration-300 hover:scale-105";

const SkillSet = () => {
    return (
        <>
            <Row className="justify-center items-center m-4 flex"><h2>Professional Skillset</h2></Row>
            <Row justify="center" className="m-4">
                <Space
                    wrap
                    size={[16, 16]}
                    className="justify-center"
                >
                    <Space className={SkillStyle}>
                        <img src={react} alt="React" width={20} />
                        <Text className="text-xs sm:text-sm md:text-base">React JS</Text>
                    </Space>
                    <Space className={SkillStyle}>
                        <img src={js} alt="JavaScript" width={20} />
                        <Text className="text-xs sm:text-sm md:text-base">JavaScript</Text>
                    </Space>
                    <Space className={SkillStyle}>
                        <img src={typescript} alt="TypeScript" width={20} />
                        <Text className="text-xs sm:text-sm md:text-base">TypeScript</Text>
                    </Space>
                    <Space className={SkillStyle}>
                        <img src={html5} alt="HTML5" width={20} />
                        <Text className="text-xs sm:text-sm md:text-base">HTML5</Text>
                    </Space>
                    <Space className={SkillStyle}>
                        <img src={css3} alt="CSS3" width={20} />
                        <Text className="text-xs sm:text-sm md:text-base">CSS3</Text>
                    </Space>
                    <Space className={SkillStyle}>
                        <img src={git} alt="CSS3" width={20} />
                        <Text className="text-xs sm:text-sm md:text-base">Git</Text>
                    </Space>
                    <Space className={SkillStyle}>
                        <img src={tailwind} alt="CSS3" width={20} />
                        <Text className="text-xs sm:text-sm md:text-base">Tailwind CSS</Text>
                    </Space>
                    <Space className={SkillStyle}>
                        <img src={redux} alt="CSS3" width={20} />
                        <Text className="text-xs sm:text-sm md:text-base">Redux</Text>
                    </Space>
                    <Space className={SkillStyle}>
                        <img src={tanstack} alt="CSS3" width={20} />
                        <Text className="text-xs sm:text-sm md:text-base">Tanstack</Text>
                    </Space>
                    <Space className={SkillStyle}>
                        <img src={bootstrap} alt="CSS3" width={20} />
                        <Text className="text-xs sm:text-sm md:text-base">Bootstrap</Text>
                    </Space>
                    <Space className={SkillStyle}>
                        <img src={materialui} alt="CSS3" width={20} />
                        <Text className="text-xs sm:text-sm md:text-base">Material UI</Text>
                    </Space>
                    <Space className={SkillStyle}>
                        <img src={antd} alt="CSS3" width={20} />
                        <Text className="text-xs sm:text-sm md:text-base">Ant Design</Text>
                    </Space>
                    <Space className={SkillStyle}>
                        <img src={rechart} alt="CSS3" width={20} />
                        <Text className="text-xs sm:text-sm md:text-base">Recharts</Text>
                    </Space>
                    <Space className={SkillStyle}>
                        <img src={debugging} alt="CSS3" width={20} />
                        <Text className="text-xs sm:text-sm md:text-base">Debugging</Text>
                    </Space>

                </Space>
            </Row >
            <Row className="justify-center items-center m-4 flex"><h2>Other Skills</h2></Row>
            <Row justify="center" className="m-4">
                <Space
                    wrap
                    size={[16, 16]}
                    className="justify-center"
                >
                    <Space className={SkillStyle}>
                        <img src={python} alt="CSS3" width={20} />
                        <Text className="text-xs sm:text-sm md:text-base">Python</Text>
                    </Space>
                    <Space className={SkillStyle}>
                        <img src={postman} alt="CSS3" width={20} />
                        <Text className="text-xs sm:text-sm md:text-base">Postman</Text>
                    </Space>
                    <Space className={SkillStyle}>
                        <img src={sql} alt="CSS3" width={20} />
                        <Text className="text-xs sm:text-sm md:text-base">SQL</Text>
                    </Space>
                    <Space className={SkillStyle}>
                        <img src={mongodb} alt="CSS3" width={20} />
                        <Text className="text-xs sm:text-sm md:text-base">MongoDB</Text>
                    </Space>
                </Space>
            </Row>
            <Row className="justify-center items-center m-4 flex"><h2>AI Tools used</h2></Row>
            <Row justify="center" className="m-4">
                <Space
                    wrap
                    size={[16, 16]}
                    className="justify-center"
                >
                    <Space className={SkillStyle}>
                        <img src={claude} alt="CSS3" width={20} />
                        <Text className="text-xs sm:text-sm md:text-base">Claude</Text>
                    </Space>
                    <Space className={SkillStyle}>
                        <img src={chatgpt} alt="CSS3" width={20} />
                        <Text className="text-xs sm:text-sm md:text-base">Chatgpt</Text>
                    </Space>
                    <Space className={SkillStyle}>
                        <img src={gemini} alt="CSS3" width={20} />
                        <Text className="text-xs sm:text-sm md:text-base">Gemini</Text>
                    </Space>
                    <Space className={SkillStyle}>
                        <img src={perplexity} alt="CSS3" width={20} />
                        <Text className="text-xs sm:text-sm md:text-base">Perplexity</Text>
                    </Space>
                </Space>
            </Row>
        </>
    )
}

export default SkillSet;