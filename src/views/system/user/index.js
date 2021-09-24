//react引入
import React, {memo, useEffect, useState} from "react";

//组件引入

//方法引入

//antd引入
import {
	Button,
	Pagination,
	Spin,
	Row,
	Col,
	Input,
	DatePicker, Table
} from "antd";

import {
	PlusOutlined
} from "@ant-design/icons";

const {RangePicker} = DatePicker;

export default memo(function User() {
	//搜索数据
	const [name, setName] = useState("");

	const nameChange = (e) => {
		setName(e.target.value);
	};
	const [time, setTime] = useState([])
	const timeChange = (date) => {
		setTime(date)
	}
	const reset = () => {
	};

	const search = () => {
		getList();
	};

	//表格数据
	const [showAddBtn, setShowAddBtn] = useState(true);

	const openAddTagModal = () => {
	};
	const [currentPage, setCurrentPage] = useState(1);
	const [count, setCount] = useState(0);
	const [dataSource, setDataSource] = useState([]);
	const columns = [
		{
			title:'用户名',
			dataIndex:'name',
			key:"name",
			width:100,
			ellipsis:true
		},
		{
			title:'所属角色',
			dataIndex:'role_id',
			key:"",
			width:100,
			ellipsis:true
		},
		{
			title:'创建时间',
			dataIndex:'',
			key:"",
			width:100,
			ellipsis:true
		},
		{
			title:'操作',
			dataIndex:'',
			key:"",
			width:100,
			ellipsis:true
		},
	];
	const currentChange = () => {
		getList()
	};

	//页面数据
	const [addTagModal, setAddTagModal] = useState(false);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		getList();
	}, []);
	const getList = () => {
	};

	return (
		<div>
			<div className="filter-content">
				<Row gutter={16}>
					<Col span={5}>
						<div>
							<Input placeholder="请输入用户名"/>
						</div>
					</Col>
					<Col span={5}>
						<div>
							<RangePicker placeholder={['最后登录时间', '最后登录时间']} value={time} onChange={timeChange}/>
						</div>
					</Col>
					<Col span={4} offset={10}>
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
							onClick={openAddTagModal}
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
		</div>
	);
});
