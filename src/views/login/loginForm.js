import React, {memo, useState,useEffect} from "react";
import { useHistory } from "react-router-dom";
import {useDispatch} from 'react-redux'

import {
	Form,
	Input,
	Checkbox,
	Button,
		message
} from 'antd'
import {UserOutlined, LockOutlined} from '@ant-design/icons';

import {encrypt,decrypt} from "@/utils";
import {
	login
} from '@/api/user'

import localCache from '@/utils/cache'


export default memo(function LoginForm() {

	useEffect(()=>{
		let loginData=localCache.getCache('login')
		console.log(loginData)
		if(loginData){
			form.setFieldsValue({
				account:loginData.name,
				password:decrypt(loginData.password)
			})
		}
	})


	const [form] = Form.useForm();
	const dispatch=useDispatch()
	const history=useHistory()
	const [loading,setLoading]=useState(false)

	const onFinish = (e) => {
		console.log(e)
		setLoading(true)
		let params={}
		params.name=e.account
		params.password = encrypt(e.password);
		if (e.remember) {
			localCache.setCache('login',params)
		}else{
			localCache.deleteCache('login')
		}
		login(params).then(res=>{
			console.log(res)
			if(res.success){
				message.success('登录成功')
				localCache.setCache('token',res.token)
				history.push('/home')
			}else{
				message.error(res.data)
			}
			setLoading(false)
		})
	}

	return (
			<Form onFinish={onFinish}
						initialValues={{
							remember: true,
						}}
						form={form}
			>
				<Form.Item name="account" rules={[
					{
						required: true,
						message: "请输入账号"
					}
				]}>
					<Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="请输入账号"/>
				</Form.Item>
				<Form.Item name="password" rules={[
					{
						required: true,
						message: "请输入密码"
					}
				]}>
					<Input.Password prefix={<LockOutlined className="site-form-item-icon"/>} placeholder="请输入密码"/>
				</Form.Item>
				<Form.Item name="remember" valuePropName="checked">
					<Checkbox>记住密码</Checkbox>
				</Form.Item>
				<Form.Item>
					<Button block type="primary" htmlType="submit" className="login-form-button" loading={loading}>
						登录
					</Button>
				</Form.Item>
			</Form>

	)
})