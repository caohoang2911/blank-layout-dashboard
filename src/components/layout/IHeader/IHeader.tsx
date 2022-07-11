
import { Button, Layout } from 'antd';
import classNames from 'classnames/bind';
import React from 'react';
import { LogoIcon } from '~/components/Icons';

import styles from './IHeader.module.scss';

const { Header } = Layout;
const cx = classNames.bind(styles)

const IHeader: React.FC = () => {
    return (
        <Header style={{backgroundColor: 'var(--bg-white)'}}>
            {/* <div className={cx("logo")} /> */}
          
        </Header>
    )
}

export default IHeader;