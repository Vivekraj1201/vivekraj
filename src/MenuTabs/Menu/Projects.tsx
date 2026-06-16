import { Card, Col } from 'antd'
const Projects = () => {

    return (
        <Col className="flex flex-col md:flex-row gap-6">
            <Card className="flex-1" style={{ backgroundColor: 'grey' }} >
                Content
            </Card >
            <Card className="w-full lg:w-80" style={{ backgroundColor: 'purple' }}>
                Sidebar
            </Card>
        </Col>
    );
}

export default Projects;