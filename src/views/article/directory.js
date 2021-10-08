//react引入
import React, {memo, useEffect, useState} from 'react'

//组件引入
import AddDirectory from '@/components/article/addDirectory'

//方法引入


//antd引入
import {
	Button,
	Col,
	DatePicker,
	Input, Pagination,
	Row,
	Spin, Table,
} from "antd";

import {
	PlusOutlined
} from "@ant-design/icons";
import {secondFormat} from "../../utils/filters";

const {RangePicker} = DatePicker;

export default memo(function Directory() {
	//搜索数据
	const [name, setName] = useState("");

	const nameChange = (e) => {
		setName(e.target.value)
	};

	const [time, setTime] = useState([])
	const timeChange = (date) => {
		setTime(date)
	}
	const reset = () => {
		setName("")
		setTime([])
	};

	const search = () => {
		setCurrentPage(1)
		getList()
	};

	//表格数据
	const [showAddBtn, setShowAddBtn] = useState(true);


	const [currentPage, setCurrentPage] = useState(1);
	const [count, setCount] = useState(0);
	const [dataSource, setDataSource] = useState([]);
	const columns = [
		{
			title:'目录名',
			dataIndex:'name',
			key:'name'
		},
		{
			title:'标签文章总和',
			dataIndex: "group_count",
			key:'group_count'
		},
		{
			title:'创建时间',
			dataIndex:"create_time",
			key:"create_time",
			render:(text)=>{
				return secondFormat(text)
			}
		},
		{
			
		}
	]
	const currentChange = () => {
	};

	//页面数据
	const [addTagModal, setAddTagModal] = useState(false);
	const openAddTagModal = () => {
		setAddTagModal(true)
	}
	const closeModal = (value) => {
		setAddTagModal(false)
		if (value) {
			getList()
		}
	}
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
							<Input placeholder="请输入角色名" onChange={nameChange}/>
						</div>
					</Col>
					<Col span={5}>
						<div>
							<RangePicker value={time} onChange={timeChange}/>
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
			{
				addTagModal ? <AddDirectory addTagModal={addTagModal} closeModal={closeModal}/> : null
			}
		</div>
	)
})
