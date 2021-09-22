import React,{memo,useState,useEffect} from 'react'
import { useHistory } from "react-router-dom";
import {useSelector} from 'react-redux'
import {Modal, Form, Input,message} from "antd";

export default memo(function EditPassword(props) {
	const layout = {
		labelCol: {span: 5},
		wrapperCol: {span: 19},
	};

	const [form] = Form.useForm();
	const history =useHistory()
	const userInfo = useSelector(state => state.userInfo)

	const handleCancel=()=>{
		props.clearEditPassword()
	}

	const handleOk=()=>{

	}


	const [btnLoading,setBtnLoading]=useState(false)


	return (
		<Modal title="修改密码" centered visible={props.passwordModal} onCancel={handleCancel} onOk={handleOk} width={400} confirmLoading={btnLoading}>
			<Form {...layout} form={form}>
				<Form.Item required label="旧密码" name='oldPassword' rules={[
					{
						validator:async (rule,value)=>{
							if (!value) {
								return Promise.reject('请输入旧密码')
							}else{

							}
						}
					}
				]}>
					<Input placeholder="请输入旧密码"/>
				</Form.Item>
				<Form.Item>
					<Input placeholder="请输入新密码"/>
				</Form.Item>
				<Form.Item>
					<Input placeholder="请再次输入新密码" />
				</Form.Item>
			</Form>
		</Modal>
	)
})