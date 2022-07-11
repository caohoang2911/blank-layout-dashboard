
import { GiftOutlined, ScheduleOutlined, SortAscendingOutlined } from '@ant-design/icons';
import { Affix, Button, Card, Input, PageHeader, Table } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import classNames from 'classnames/bind';
import React, { useEffect, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '~/app/hooks';
import { uploadFile } from '~/services/postSerivce';
import { columns, dataSource } from './helper/postHelper';
import styles from './Post.module.scss';
import { fetchPostsRequest } from './saga/postAction';
import { pendingSelector, postsSelector } from './saga/selector';
import { Post } from './types/postTypes';

const { Search } = Input;


var cx = classNames.bind(styles);

const Posts: React.FC<any> = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const posts = useAppSelector(postsSelector)
    const pendding = useAppSelector(pendingSelector);
    const renderPosts = useMemo(() => posts.map((post: Post) => <li className={cx('post-item')} key={post.id}>{post.title} </li>), [posts])
    useEffect(() => {
        dispatch(fetchPostsRequest())
        const formData = new FormData();
        formData.append('file', 'myfile')
        uploadFile(formData)
    }, [])
    return (
        <>
            {/* <Breadcrumb style={{ padding: '10px 0px', position: 'sticky', zIndex: 999, top: 0, backgroundColor: '#ffffff' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb> */}
            {/* <Affix offsetTop={0}> */}
                <PageHeader
                    style={{ padding: "10px 0px 30px 0px" }}
                    ghost={true}
                    // onBack={() => window.history.back()}
                    title={<span style={{ fontWeight: 'bold' }}>&nbsp;&nbsp;Gift Management</span>}
                // subTitle="This is a subtitle"
                extra={[
                    <Button key="3">Operation</Button>,
                    <Button key="2">Operation</Button>,
                    <Button key="1" type="primary">
                        Primary
                    </Button>,
                ]}
                >
                </PageHeader>
            {/* </Affix> */}
            {/* {renderPosts} */}
            <div style={{border: '1px solid #dfdfdf',backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px'}}>
                {/* <Card title={<Search allowClear style={{ maxWidth: '25rem' }} placeholder="Input search text" onSearch={() => { }} enterButton />}
                    extra={
                        <Content style={{ display: 'flex', gap: 10 }} >
                            <Button type="primary" icon={<ScheduleOutlined />}>Select Dates</Button>
                            <Button type="primary" icon={<SortAscendingOutlined />}>Sort</Button>
                        </Content>
                    }> */}
                    <Table dataSource={dataSource} columns={columns} />
                {/* </Card> */}
            </div>
        </>
    )
}

export default Posts;


