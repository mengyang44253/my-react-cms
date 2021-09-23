import React, {memo, useState} from "react";

import {
	addRole
} from '@/api/system'

import {
	Modal,
	Form,
	Input,
	message
} from 'antd'
const { TextArea } = Input;

export default memo(function AddRole(props) {
	console.log(props)
	const [form] = Form.useForm();
	const layout={
		labelCol: {span: 5},
		wrapperCol: {span: 19},
	}

	const [btnLoading,setBtnLoading]=useState(false)




	const handleOk=()=>{
		form.validateFields().then(async (values)=>{
			console.log(values)
			setBtnLoading(true)
			let params={}
			params.name=values.roleName
			if (values.desc) {
				params.desc=values.desc
			}
			let res=await addRole(params)
			if(res.success){
				message.success('添加成功')
				setBtnLoading(false)
				props.closeRoleModal(1)
			}else{
				message.error(res.data)
				setBtnLoading(false)
			}

		})
	}

	const handleCancel=()=>{
		props.closeRoleModal()
	}

	return (
		<Modal title="添加角色" visible={props.addRoleModal} onCancel={handleCancel} onOk={handleOk} width={500} confirmLoading={btnLoading}>
			<Form {...layout} form={form}>
				<Form.Item name='roleName' label='角色名' rules={[
					{
						required:true,
						message:'请输入角色名'
					}
				]}>
					<Input placeholder="请输入角色名" />
				</Form.Item>
				<Form.Item name="desc" label="描述">
					<TextArea placeholder="请输入描述" rows={5} maxLength={300} />
				</Form.Item>
			</Form>
		</Modal>
	)
})