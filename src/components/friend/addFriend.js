//react引入
import React,{memo,useState} from 'react'


//组件引入
import FileUpload from '@/components/fileUpload'

//方法引入


//antd引入
import {
	Button,
	Form,
	Modal,
	Input,
	Image,
	message
} from "antd";

import {
	LoadingOutlined,
	PlusOutlined

} from "@ant-design/icons";


export default memo(function AddFriend (props) {

	const {addFriend,closeAddFriend} =props

	const layout = {
		labelCol: {span: 5},
		wrapperCol: {span: 19}
	};
	const [form] = Form.useForm();

	//页面数据
	const [btnLoading,setBtnLoading]=useState(false)
	const [avatar,setAvatar]=useState('')
	const [AvatarLoading,setAvatarLoading]=useState(false)
	const avatarChange=(value)=>{
		setAvatar(value)
	}
	const startUploadImage=()=>{
		setAvatarLoading(true)
	}
	const endUploadImage=()=>{
		setAvatarLoading(false)
	}

	const handleCancel=()=>{
		closeAddFriend()
	}
	const handleOk=()=>{
		form.validateFields().then(async (values)=>{
			if (!avatar){
				message.error('请上传头像')
			}
			setBtnLoading(true)
			console.log(values)
			let params={}
			params.name=values.name
			params.img=avatar
			params.website=values.website

		})
	}

	return (
		<Modal title="添加Tag" visible={addFriend} onOk={handleOk} onCancel={handleCancel} width={500} confirmLoading={btnLoading}>
			<Form form={form} {...layout}>
				<Form.Item label="网站名" name="name" rules={[
					{
						required:true,
						message:'请输入网站名'
					}
				]}>
					<Input placeholder="请输入网站名" />
				</Form.Item>
				<Form.Item label="网站图标" name="img">
					<FileUpload avatarChange={(value)=>avatarChange(value)} startUploadImage={startUploadImage} endUploadImage={endUploadImage}>
						{
							avatar?(
								<Image />
							):(
								<div>
									{
										AvatarLoading? <LoadingOutlined /> : <PlusOutlined />
									}
								</div>
							)
						}
					</FileUpload>
				</Form.Item>
				<Form.Item label="网址" name="website" rules={[
					{
						required:true,
						message:'请输入网址'
					}
				]}>
					<Input placeholder="请输入网址" />
				</Form.Item>
			</Form>
		</Modal>
	)
})

