import React,{memo,useState} from "react";
import {Form,Input} from "antd";




export default memo(function RegisterForm(){




	const onFinish=()=>{

	}


	return (
			<Form onFinish={onFinish} validateTrigger="onBlur">
				<Form.Item name="account" rules={{

				}}>
					<Input placeholder="请输入账号" />
				</Form.Item>
				<Form.Item name="password">
					<Input.Password placeholder="请输入密码" />
				</Form.Item>
			</Form>
	)
})