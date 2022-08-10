import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import axios from '../../configs/axios';
import { useNavigate } from 'react-router-dom';

function SignIn() {
    const nav = useNavigate();
    const onFinish = async (values) => {
        try {
            let res = await axios.post('/auth/login', values);
            window.localStorage.setItem('testUser', res.data.token);
            nav('/profile');
        } catch (error) {
            console.log(14, error);
        }
    };

    const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    };

  return (
    <div>
        <h1>signIn</h1>
        <Form name="basic" labelCol={{span: 8}} wrapperCol={{span: 16}} onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off" >

            <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please input your email'}]}>
                <Input />
            </Form.Item>
            <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your password'}]}>
                <Input />
            </Form.Item>

            <Form.Item wrapperCol={{offset: 8,span: 16}}>
                <Button type="primary" htmlType="submit"> Submit </Button>
            </Form.Item>
        </Form>
    </div>
  )
}

export default SignIn