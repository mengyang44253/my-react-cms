//react引入
import React, {memo, useEffect, useState} from 'react'

//组件引入



//方法引入



//antd引入
import {
  Button,
  Spin
} from "antd";

import {
  PlusOutlined
} from "@ant-design/icons";


export default memo(function Friend (){
  //搜索数据
  const [name, setName] = useState("");

  const nameChange = (e) => {
    setName(e.target.value)
  };
  const reset = () => {};

  const search = () => {
    getList()
  };

  //表格数据
  const [showAddBtn, setShowAddBtn] = useState(true);
  const openAddTagModal=()=>{}
  const [currentPage, setCurrentPage] = useState(1);
  const [count, setCount] = useState(0);
  const [dataSource, setDataSource] = useState([]);
  const columns=[
    {
      title:"网站名",
      dataIndex:"",
      key:"",
      width:100,
      ellipsis:true
    },
    {
      title:"网站图标",
      dataIndex:"",
      key:"",
      width:100,
      ellipsis:true
    },
    {
      title:"网站网址",
      dataIndex:"",
      key:"",
      width:100,
      ellipsis:true
    },
  ]
  const currentChange = () => {};

  //页面数据
  const [addTagModal, setAddTagModal] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    getList()
  },[])
  const getList=()=>{}







  return (
    <div>
      <div className="filter-content">

      </div>
      <div className="table-content">
        <div className="add">
          {showAddBtn ? (
            <Button
              type="dashed"
              icon={<PlusOutlined />}
              onClick={openAddTagModal}
            >
              添加
            </Button>
          ) : null}
        </div>

      </div>
      <div className="footer-content">

      </div>
      <Spin className="loading" size="large" spinning={loading} />
    </div>
  )
})
