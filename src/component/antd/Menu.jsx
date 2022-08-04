import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import React from 'react'
import { Link } from 'react-router-dom';
import './Menu.css';

function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
}

const items = [
    getItem('User info', 'sub1', <Link to='/user/info'><MailOutlined /></Link>),
    getItem('Order info', 'sub2', <Link to='/user/order'><AppstoreOutlined /></Link>),
    getItem('Show Data', 'sub4', <Link to='/user/show-data'><SettingOutlined /></Link>),
];

let style = {width: 256, height: '100vh'}

function InfoMenu() {
    
    const onClick = (e) => {
        console.log('click ', e);
    };

    return (
        <div>
            <Menu onClick={onClick} style={style} defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} mode="inline" items={items} />
        </div>
    )
}

export default InfoMenu