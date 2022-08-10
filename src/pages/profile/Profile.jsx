import React, { useEffect, useState } from 'react'
import { Card } from 'antd';
import axios from '../../configs/axios';
import { Button, Modal } from 'antd';
import { Checkbox, Form, Input } from 'antd';
const { Meta } = Card;

function Profile() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [user, setUser] = useState({});
    const [count, setCount] = useState(0);
    
    const token = window.localStorage.getItem('testUser')
    console.log(user);
    const showModal = () => {
        setIsModalVisible(true);
      };
    
      const handleOk = () => {
        setIsModalVisible(false);
      };
    
      const handleCancel = () => {
        setIsModalVisible(false);
      };
      
    const onFinish = async (values) => {
        try {
            const res = await axios.patch('/user/update-user-info/'+user._id, values, {headers: {Authorization: token}});
            setCount(count+1);
            handleCancel();
        } catch (error) {
            console.log(error);
        }
    };

    const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    };
    async function getUser (){
        try {
            const res = await axios.get('/auth/me', {headers: {Authorization: token}})
            setUser(res.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getUser()
    }, [count])

    return (
        <div>
            <h1>Profile</h1>
            <Card hoverable style={{ width: 240, margin: 'auto'}}
                cover={<img alt="example" src={user.avatar} />}
            >
                <Meta title={user.username} description={user.email} />
            </Card>

            <Button type="primary" onClick={showModal}> Update Info </Button>
            <Modal footer={null} title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <Form name="basic" labelCol={{span: 8}} wrapperCol={{span: 16}} onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off" >
                <Form.Item label="Username" name="username" rules={[{ required: true, message: 'Please input your username!'}]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Phone" name="phone" rules={[{ required: true, message: 'Please input your phone!'}]}>
                    <Input />
                </Form.Item>
                
                <Form.Item wrapperCol={{offset: 8,span: 16}}>
                    <Button type="primary" htmlType="submit"> Submit </Button>
                </Form.Item>
            </Form>
            </Modal>
        </div>
    )
}

export default Profile