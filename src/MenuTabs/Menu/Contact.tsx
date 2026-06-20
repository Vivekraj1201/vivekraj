import { Button, Col, Form, Input, Row, Typography } from 'antd';
import { PhoneOutlined, UserSwitchOutlined, WechatOutlined } from '@ant-design/icons';
import OnSubmit from './OnSubmit';
const { Text } = Typography;

const Contact = () => {
    const { TextArea } = Input;

    return (
        <>
            <Row className='flex flex-Row' justify='center'>
                <Col xs={24} md={12} lg={11}
                    className="m-4 p-4 shadow-xl/30 shadow-cyan-500 border rounded-3xl
                    bg-linear-to-r from-green-300 to-blue-400 flex flex-col"
                >

                    <Row className="flex justify-center items-center">
                        <h1 className="text-3xl font-bold tracking-wide" style={{ color: 'black' }}>
                            Rich out to me !
                        </h1>
                    </Row>
                    <Col className="d-flex flex-column">
                        <Row className="w-full flex flex-row gap-12">
                            <Col><WechatOutlined style={{ fontSize: '60px', color: 'black' }} /></Col>
                            <Col>
                                <Row><h2 style={{ color: 'black' }}>Our Friendly team is there to</h2></Row>
                                <Row><Text style={{ color: 'black' }}>vivekyadav7875.vy@gmail.com</Text></Row>
                            </Col>
                        </Row>

                        <Row className="w-full flex flex-row gap-12">
                            <Col><UserSwitchOutlined style={{ fontSize: '60px', color: 'black' }} /></Col>
                            <Col>
                                <Row><h2 style={{ color: 'black' }}>Visit us</h2></Row>
                                <Row><Text style={{ color: 'black' }}>Juna Budhwar Peth, Kolhapur - 416002</Text>
                                </Row>
                            </Col>
                        </Row>
                        <Row className="w-full flex flex-row gap-12">
                            <Col><PhoneOutlined style={{ fontSize: '60px', color: 'black' }} /></Col>
                            <Col>
                                <Row><h2 style={{ color: 'black' }}>Call us</h2></Row>
                                <Row><Text style={{ color: 'black' }}>vivekyadav7875.vy@gmail.com</Text></Row>
                            </Col>
                        </Row>
                    </Col>
                </Col >

                <Col xs={24} md={12} lg={11}
                    className=" m-4 p-4 shadow-xl/30 shadow-cyan-500 border rounded-3xl
                bg-linear-to-r from-green-300 to-blue-400 flex flex-col"
                >
                    <h2 style={{ color: 'black' }}>Got Ideas? We have got the skills.Lets Team up.</h2>
                    <Text style={{ color: 'black' }}>tell us more about yourself and what you are got in mind.</Text>
                    <Col>
                        <Form
                            onFinish={OnSubmit}
                            layout="horizontal"
                            labelCol={{ span: 4 }}
                            wrapperCol={{ span: 18 }}>
                            <Form.Item
                                name="email"
                                label={<span style={{ color: 'black', fontWeight: '600' }}>Email</span>}
                                rules={[
                                    { required: true, message: "Please enter your email" },
                                    { type: "email", message: "Please enter a valid email" }
                                ]}
                            >
                                <Input className="!bg-transparent !text-black"
                                    placeholder="Please input your email" />
                            </Form.Item>
                            <Form.Item
                                name="firstName"
                                label={<span style={{ color: 'black', fontWeight: '600' }}>First Name</span>}
                                rules={[{ required: true, message: 'Please input your first name' }]}
                            >
                                <Input
                                    className="!bg-transparent !text-black"
                                    placeholder="Please input your name" />
                            </Form.Item>
                            <Form.Item
                                name="lastName"
                                label={<span style={{ color: 'black', fontWeight: '600' }}>Last Name</span>}
                                rules={[{ required: true, message: 'Please input your last name' }]}
                            >
                                <Input
                                    className="!bg-transparent !text-black"
                                    placeholder="Please input your last name" />
                            </Form.Item>
                            <Form.Item
                                name="subject"
                                label={<span style={{ color: 'black', fontWeight: '600' }}>Subject</span>}
                                rules={[{ required: true, message: 'Subject*' }]}
                            >
                                <Input className="!bg-transparent !text-black" />
                            </Form.Item>
                            <Form.Item
                                name="message"
                                label={<span className="text-black font-semibold">Message</span>}
                            >
                                <TextArea
                                    rows={4}
                                    className="!bg-transparent !text-black"
                                />
                            </Form.Item>
                            <Form.Item>
                                <Button
                                    htmlType="submit"
                                    style={{
                                        backgroundColor: 'transparent', color: 'black', fontWeight: 'bold'
                                    }}>Submit</Button>
                            </Form.Item>
                        </Form>
                    </Col>
                </Col >
            </Row >
        </>
    );
}

export default Contact;
