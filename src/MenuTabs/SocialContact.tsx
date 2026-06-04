import { WhatsAppOutlined, InstagramOutlined, LinkedinFilled, GithubOutlined } from "@ant-design/icons";
import { Col } from "antd";

const SocialContact = () => {
    return (
        <Col
            style={{
                position: "absolute",
                top: 12,
                right: 24,
                display: "flex",
                gap: 20,
                fontSize: 22,
            }}
        >
            <a href="https://wa.me/918308120194" target="_blank">
                <WhatsAppOutlined style={{ color: '#0fc765' }} />
            </a>

            <a href="https://instagram.com/vivekraj_1201" >
                <InstagramOutlined style={{ color: '#E72D88' }} />
            </a>
            <a href="https://linkedin.com/in/vivekraj1201">
                <LinkedinFilled style={{ color: '#2433fb' }} />
            </a>
            <a href="https://github.com/vivekraj1201">
                <GithubOutlined style={{ color: '#000000' }} />
            </a>
        </Col>
    );
}

export default SocialContact;
