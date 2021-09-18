import React from "react";

import {
	HomeOutlined,
	BarChartOutlined,
	CommentOutlined,
	UserSwitchOutlined,
	RobotOutlined,
	BookOutlined,
	WhatsAppOutlined,
	UsergroupAddOutlined,
	BoxPlotOutlined,
	UpSquareOutlined
} from "@ant-design/icons";

const Router = [
	{
		title: "首页",
		icon: <HomeOutlined/>,
		path: "/home",
	},
	{
		title: "系统管理",
		icon: <RobotOutlined/>,
		path: "/home/system",
		children: [
			{
				title: "账号管理",
				icon: "",
				path: "/home/system/user",
			},
			{
				title: "角色管理",
				icon: "",
				path: "/home/system/role",
			},
		],
	},

]


export default Router