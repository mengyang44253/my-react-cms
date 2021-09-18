import React,{memo} from "react";

import {Upload,message} from "antd";

import oss from 'ali-oss'

export default memo(function FileUpload (props) {
	return (
			<Upload name="avatar" >
				{props.children}
			</Upload>
	)
})