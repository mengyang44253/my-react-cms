import React, {memo, useState} from "react";

import {
	Form,
	Input,
	Checkbox,
	Button
} from 'antd'
import {UserOutlined, LockOutlined} from '@ant-design/icons';

export default memo(function LoginForm() {


	const onFinish = () => {

	}

	return (
			<Form onFinish={onFinish}
						initialValues={{
							remember: true,
						}}>
				<Form.Item name="account">
					<Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="请输入账号"/>
				</Form.Item>
				<Form.Item>
					<Input placeholder="请输入密码" type="password"/>
				</Form.Item>
				<Form.Item name="remember">
					<Checkbox>记住密码</Checkbox>
				</Form.Item>
				<Form.Item>
					<Button block>
						登录
					</Button>
				</Form.Item>
			</Form>

	)
})