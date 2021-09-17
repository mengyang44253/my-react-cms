//react引入
import React,{memo,useState} from 'react'


//组件引入


//方法引入


//antd引入
import {
	Button,
	Modal
} from "antd";

import {

} from "@ant-design/icons";


export default memo(function (props) {

	const {} =props


	//页面数据
	const [BtnLoading,setBtnLoading]=useState(false)


	const handleCancel=()=>{

	}

	const handleOk=()=>{

	}

	return (
			<Modal title="添加Tag" visible={} onOk={handleOk} onCancel={handleCancel} footer={[
				<Button key="back" onClick={handleCancel}>
					取消
				</Button>,
				<Button key="submit" type="primary" loading={BtnLoading} onClick={handleOk}>
					保存
				</Button>
			]}>

			</Modal>
	)
})
