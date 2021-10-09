//react引入
import React, {memo, useEffect, useState} from 'react'

//组件引入


//方法引入
import {
	fullTextFormat,
	articleStatusFormat,
	articleIsComment,
	secondFormat
} from '@/utils/filters'

//antd引入
import {
	Button,
	Col,
	DatePicker,
	Input,
	Row,
	Spin,
	Popconfirm,
	Tooltip,
	Divider
} from "antd";

import {
	PlusOutlined,
	DiffOutlined,
	FundViewOutlined
} from "@ant-design/icons";

const {RangePicker} = DatePicker;


export default memo(function $END$() {
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
			title: "文章标题",
			dataIndex: "title",
			key: "title",
			width: 200,
			ellipsis: true
		},
		{
			title: "文章内容",
			dataIndex: "content",
			key: "content",
			width: "300",
			ellipsis: true,
			render: (text) => {
				return fullTextFormat(text)
			}
		},
		{
			title: "分类目录",
			dataIndex: "label_data",
			key: "label_data",
			width: 150,
			render: (text, record) => {
				return text
			}
		},
		{
			title: "标签",
			dataIndex: "label_data",
			key: "label_data",
			width: 150,
			render: (text) => {
				return text
			}
		},
		{
			title: "状态",
			dataIndex: "status",
			key: "status",
			width: 100,
			render: (text) => {
				return articleStatusFormat(text)
			}
		},
		{
			title: "文章是否可以被评论",
			dataIndex: "comment_status",
			key: "comment_status",
			width: 150,
			render: (text) => {
				return articleIsComment(text)
			}
		},
		{
			title: "作者",
			dataIndex: "author",
			key: "author",
			width: 80,
			render: (text) => {
				return "-"
			}
		},
		{
			title: "阅读量",
			dataIndex: "read",
			key: "read",
			width: 100
		},
		{
			title: "获取的赞",
			dataIndex: "praise",
			key: "praise",
			width: 100
		},
		{
			title: "创建时间",
			dataIndex: "create_time",
			key: "create_time",
			width: 150,
			render: (text) => {
				return secondFormat(text)
			}
		},
		{
			title: "操作",
			dataIndex: "handle",
			key: "handle",
			width: 180,
			fixed: "right",
			render: (text, record) => {
				return (
					<div>
						{
							record.status === 1 ? (
								<>
									<Popconfirm title="确定要发布吗？" onConfirm={() => publish(record)}>
										<Tooltip placement="top" title="发布">
											<DiffOutlined twoToneColor="#279acc"/>
										</Tooltip>
									</Popconfirm>
									<Divider type="vertical"/>
								</>
							) : null
						}
						<span>
							<Tooltip placement="top" title="查看">
								<FundViewOutlined twoToneColor="#00a854"/>
							</Tooltip>
						</span>
					</div>
				)
			}
		}
	]

	const publish = (record) => {

	}

	const currentChange = () => {
	};

	//页面数据
	const [addModal, setAddModal] = useState(false);
	const openAddModal = () => {
		setAddModal(true)
	}
	const closeModal = (value) => {
		setAddModal(false)
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
							onClick={openAddModal}
						>
							添加
						</Button>
					) : null}
				</div>

			</div>
			<div className="footer-content">

			</div>
			<Spin className="loading" size="large" spinning={loading}/>
		</div>
	)
})
