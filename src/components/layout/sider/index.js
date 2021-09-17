import React,{memo,useState,Fragment,useEffect} from "react";

import Router from '@/router'



import {Menu,Image } from "antd";

const {SubMenu} = Menu;



export default memo(function LayoutSider(props){
	const [selectedKeys, setSelectedKeys] = useState(["/home"]);


	const [openKeys, setOpenKeys] = useState([]);


	const openMenu = (openKeys) => {
		setOpenKeys([openKeys[openKeys.length - 1]])
	}



	return (
			<Fragment>
				<div className={props.collapsed?"menuLogo hide":"menuLogo"}>
					<div className="logo">
						<Image
								width={200}
								src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
						/>
						<div>
							{this.props.collapsed?null:<div>React-Admin</div>}
						</div>
					</div>
				</div>
				{/*<Menu theme="dark" mode="inline" selectedKeys={selectedKeys} openKeys={openKeys} onOpenChange={openMenu} onClick={selectMenu}>*/}
				{/*	{*/}
				{/*		Router&&Router.map((firstItem)=>{*/}
				{/*			return firstItem.children&&firstItem.children.length>0?renderSubMenu(fristItem):renderMenu(firstItem)*/}
				{/*		})*/}
				{/*	}*/}
				{/*</Menu>*/}
			</Fragment>
	)

})