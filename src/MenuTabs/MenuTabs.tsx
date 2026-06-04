import { Tabs } from 'antd';
import Home from './Home';
const onChange = (key: any) => {
    console.log(key);
};
const items = [
    {
        key: '1',
        label: <b>Home</b>,
        children: <Home />,
    },
    {
        key: '2',
        label: <b>About</b>,
        children: 'Content of About',
    },
    {
        key: '3',
        label: <b>Projects</b>,
        children: 'Content of Projects',
    },
    {
        key: '4',
        label: <b>Articles</b>,
        children: 'Content of Articles',
    },
];

const MenuTabs = () =>
    <Tabs className="w-full" defaultActiveKey="1" items={items} onChange={onChange} />;
export default MenuTabs;