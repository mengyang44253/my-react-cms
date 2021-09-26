//react引入
import React, {memo, useEffect, useState} from 'react'

//组件引入
import AddFriend from '@/components/friend/addFriend'

//方法引入


//antd引入
import {
	Button,
	Spin,
	Row,
	Col,
	Input,
	DatePicker,
	Table,
	Pagination
} from "antd";

import {
	PlusOutlined
} from "@ant-design/icons";

const {RangePicker} = DatePicker


export default memo(function Friend() {
	//搜索数据
	const [name, setName] = useState("");

	const nameChange = (e) => {
		setName(e.target.value)
	};
	const reset = () => {
	};

	const search = () => {
		getList()
	};

	//表格数据
	const [showAddBtn, setShowAddBtn] = useState(true);
	const openAddModal = () => {
		setAddFriend(true)
	}
	const [currentPage, setCurrentPage] = useState(1);
	const [count, setCount] = useState(0);
	const [dataSource, setDataSource] = useState([]);
	const [addFriend,setAddFriend]=useState(false)

	const closeAddFriend=()=>{
		setAddFriend(false)
	}

	const columns =  [
		{
			title: "网站名",
			dataIndex: "",
			key: "",
			width: 100,
			ellipsis: true
		},
		{
			title: "网站图标",
			dataIndex: "",
			key: "",
			width: 100,
			ellipsis: true
		},
		{
			title: "网站网址",
			dataIndex: "",
			key: "",
			width: 100,
			ellipsis: true
		},
	]
	const currentChange = () => {
	};

	//页面数据
	const [addTagModal, setAddTagModal] = useState(false);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		getList()
	}, [])
	const getList = () => {
	}


	return (
		<div>
			<div className="filter-content">
				<Row gutter={16}>
					<Col span={5}>
						<div>
							<Input/>
						</div>
					</Col>
					<Col span={5}>
						<div>
							<RangePicker/>
						</div>
					</Col>
					<Col span={4}>
						<div>
							<Button className="fr resetBtn" onClick={reset}>重置</Button>
							<Button className="fr" type="primary" onClick={search}>搜索</Button>
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
							onClick={openAddModal}
						>
							添加
						</Button>
					) : null}
				</div>
				<div className="table-wrap">
					<Table scorll={{x: 1500, scrollToFirstRowOnChange: true, y: 300}} bordered dataSource={dataSource}
								 columns={columns} pagination={false}/>
				</div>
			</div>
			<div className="footer-content">
				<Pagination
					size="small"
					current={currentPage}
					total={count}
					onChange={currentChange}
				/>
			</div>
			<Spin className="loading" size="large" spinning={loading}/>
			{
				addFriend?<AddFriend addFriend={addFriend} closeAddFriend={closeAddFriend} />:null
			}
		</div>
	)
})
