//react引入
import React, {memo, useState,useEffect} from 'react'

//组件引入
import AddRole from '@/components/system/addRole'

//方法引入
import {
	roleList
} from '@/api/system'

//antd引入
import {
	Button,
	Spin,
	Row,
	Col,
	Input,
	Table,
	Pagination,
} from "antd";

import {
	PlusOutlined
} from "@ant-design/icons";


export default memo(function Role() {
	//搜索数据
	const [roleName, setRoleName] = useState("")
	const nameChange = (e) => {
		setRoleName(e.target.value)
	};

	//表格数据
	const [showAddBtn, setShowAddBtn] = useState(true);

	const openAddRoleModal = () => {
		setAddRoleModal(true)
	}
	const closeRoleModal=(e)=>{
		console.log(e)
		setAddRoleModal(false)
		if (e) {
			getList()
		}
	}


	const [current, setCurrent] = useState(1);
	const [count, setCount] = useState(0);
	const [dataSource, setDataSource] = useState([]);
	const columns = [
		{
			title:"角色名",
			dataIndex:"title",
			key:"title",
			width:100,
			ellipsis:true
		},
		{
			title:"创建时间",
			dataIndex:"create_time",
			key:"create_time",
			width:200,
			ellipsis:true
		},
		{
			title:"更新时间",
			dataIndex:"update_time",
			key:"update_time",
			width:200,
			ellipsis:true
		},
		{
			title: "操作",
			dataIndex: "handle",
			key:"handle",
			width:200,
			render:()=>{

			}
		}
	]

	//页面数据
	const [addRoleModal, setAddRoleModal] = useState(false);
	const [loading, setLoading] = useState(false);


	//搜索方法
	const reset = () => {
	};

	const search = () => {
		setCurrent(1)
		getList()
	};


	//表格方法
	const getList = async () => {
		setLoading(true)
		let params={}
		params.pagination=0
		params.limit=10
		params.start=current-1
		if (roleName) {
			params.name=roleName
		}
		let res=await roleList(params)
		if(res.success){
			setDataSource(res.data)
			setCount(res.count)
		}
	}
	const currentChange = () => {
	};

	useEffect(()=>{
		getList()
	},[])


	return (
		<div>
			<div className="filter-content">
				<Row gutter={16}>
					<Col span={5}>
						<div>
							<Input placeholder="请输入角色名"/>
						</div>
					</Col>
					<Col span={4} offset={15}>
						<div>
							<Button className="fr resetBtn">重置</Button>
							<Button className="fr" type="primary">搜索</Button>
						</div>
					</Col>
				</Row>
			</div>
			<div className="table-content">
				<div className="add">
					{showAddBtn ? (
						<Button
							type="dashed"
							icon={<PlusOutlined/>}
							onClick={openAddRoleModal}
						>
							添加
						</Button>
					) : null}
				</div>
				<div className="table-wrap">
					<Table scorll={{x: 1500, scrollToFirstRowOnChange: true, y: 300}} bordered dataSource={dataSource} columns={columns} pagination={false}/>
				</div>
			</div>
			<div className="footer-content">
				<Pagination
					size="small"
					current={current}
					total={count}
					onChange={currentChange}
				/>
			</div>
			<Spin className="loading" size="large" spinning={loading}/>
			{
				addRoleModal?<AddRole addRoleModal={addRoleModal} closeRoleModal={closeRoleModal} />:null
			}
		</div>
	)
})
