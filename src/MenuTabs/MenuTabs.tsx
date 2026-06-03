import { Tabs } from 'antd';
const onChange = (key: any) => {
    console.log(key);
};
const items = [
    {
        key: '1',
        label: 'Home',
        children: 'Content of Home',
    },
    {
        key: '2',
        label: 'About',
        children: 'Content of About',
    },
    {
        key: '3',
        label: 'Projects',
        children: 'Content of Projects',
    },
    {
        key: '4',
        label: 'Articles',
        children: 'Content of Articles',
    },
];

const MenuTabs = () =>
    <Tabs className="w-full border-2" defaultActiveKey="1" items={items} onChange={onChange} />;
export default MenuTabs;