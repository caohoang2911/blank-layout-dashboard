import { LaptopOutlined, NotificationOutlined, UserOutlined, LogoutOutlined } from '@ant-design/icons';
import { Avatar, Button, Divider, Layout, Menu, MenuProps, Space } from 'antd';
import classNames from 'classnames/bind';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '~/app/hooks';
import { LogoIcon } from '~/components/Icons';
import { logout } from '~/features/auth/authSlice';

import styles from './Sidebar.module.scss';
const cx = classNames.bind(styles)


const { Sider } = Layout;
const items2: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
    (icon, index) => {
        const key = String(index + 1);
        return {
            key: `sub${key}`,
            icon: React.createElement(icon),
            label: `subnav ${key}`,

            children: new Array(20).fill(null).map((_, j) => {
                const subKey = index * 4 + j + 1;
                return {
                    key: subKey,
                    label: `option${subKey}`,
                };
            }),
        };
    },
);


export default function Sidebar() {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    return (
        <>
            <Sider className={cx('hidden-scroll', 'sidebar')} width={250} style={{
                backgroundColor: '#ffffff',
                height: '100vh',
                overflow: 'auto',
                position: 'sticky',
                left: '0',
                top: '0',
                borderRight: '1px solid rgba(0,0,0,.06)'
            }} >
                {/* <Space direction="vertical" size="small" style={{ display: 'flex' }}> */}
                    <div style={{
                        background: "rgba(8, 19, 88, 0.9)",
                        textAlign: 'center',
                        height: '38px',
                        width: '128px',
                        margin: '0 auto',
                        borderRadius: '20px',
                        marginTop: '20px'
                    }}>
                    <LogoIcon width='100px' /></div>
                    <Divider plain style={{ marginTop: 20, marginBottom: 10 }} />
                    <div className={cx("avatar-block")}>
                        <Avatar style={{ textAlign: 'center' }} icon={<UserOutlined />} />
                        <span className={cx('user-name')}>Cao Xuân Hoàng</span>
                        <Button onClick={() => dispatch(logout(navigate))} type="link" danger icon={<LogoutOutlined />}>
                            Logout
                        </Button>
                        <Divider plain style={{ marginTop: 20, marginBottom: 0 }} />
                    </div>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}
                        items={items2}
                    />
                {/* </Space> */}
            </Sider>
        </>
    )
}
