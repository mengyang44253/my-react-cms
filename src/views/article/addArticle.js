//react引入
import React,{memo,useState,useEffect} from "react";


import {useHistory} from "react-router-dom";
import {useSelector} from "react-redux";


//组件引入
import {AddArticleWrap } from './style.js'

import MdEditor from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";
import MarkdownIt from "markdown-it";

//方法引入


//antd引入
import {
	Select,
	Input,
	Button, Tree
} from 'antd'

import {

} from '@ant-design/icons'

const {Option}=Select

const mdParser = new MarkdownIt()



export default  memo(function AddArticle() {


	//页面数据
	const [inputValue,setInputValue]=useState(null)
	const titleChange=(e)=>{
		setInputValue(e.target.value)
	}
	const [mdValue, setMdValue] = useState("");
	const handleEditorChange=({html,text})=>{
		setMdValue(text)
	}
	const [btnLoading,setBtnLoading]=useState(false)

	const publish=(value)=>{

	}

	const [directoryData, setDirectoryData] = useState([]);
	const [selectDirectory, setSelectDirectory] = useState([]);
	const selectSomeDirectory = (checkedKeysValue) => {
		setSelectDirectory(checkedKeysValue)
	}
	const [tagData, setTagData] = useState([]);
	const [selectTag, setSelectTag] = useState([]);
	const tagSelectSome = (value) => {
		setSelectTag(value)
	}


	return (
		<AddArticleWrap>
			<div className="name">添加文章</div>
			<div className="content-wrap">
				<div className="left">
					<div className="title-wrap">
						<div className="title">标题</div>
						<div className="input-wrap">
							<Input placeholder="请输入标题" value={inputValue} onChange={titleChange} />
						</div>
					</div>
					<div className="md">
						<MdEditor
							style={{height: "600px", width: "100%"}}
							renderHTML={(text) => mdParser.render(text)}
							onChange={handleEditorChange}
						/>
					</div>
				</div>
				<div className="right">
					<div className="btn mb5 tc">
						<Button className="mr20" loading={btnLoading} onClick={()=>publish(1)}>
							存为草稿
						</Button>
						<Button loading={btnLoading} type="primary" onClick={()=>publish(2)}>
							发布
						</Button>
					</div>
					<div className="directory mt50">
						<div className="directory-title">目录</div>
						<div>
							{
								directoryData.length&&(
									<Tree checkable defaultExpandAll={true} onCheck={selectSomeDirectory} treeData={directoryData} />
								)
							}
						</div>
					</div>
					<div className="tag mb50">
						<div className="tag-title">标签</div>
						<div>
							<Select style={{width:"200px"}} mode="tags" placeholder="标签" onChange={tagSelectSome}>
								{
									tagData.length && tagData.map(item=>{
										return (
											<Option key={item.id} value={item.id}>
												{item.name}
											</Option>
										)
									})
								}
							</Select>
						</div>
					</div>
				</div>
			</div>
		</AddArticleWrap>
	)
})