import { Breadcrumb, Layout } from 'antd';
import React from 'react';
import IHeader from '../IHeader';
import Sidebar from '../Sidebar/Sidebar';

const { Content } = Layout;
const DefaultLayout: React.FC = ({ children }: { children?: React.ReactNode }): React.ReactElement => {
  return (
    <Layout>
      <Layout>
        <Sidebar />
        <Layout>
          {/* <IHeader /> */}
          <Content
            style={{
              padding: '5px 20px 20px 20px',
              margin: 0,
              minHeight: 280,
              backgroundColor: 'rgb(238 238 238)',
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default DefaultLayout;