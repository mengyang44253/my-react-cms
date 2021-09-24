import Http from '@/utils/axios'

//角色列表
export function roleList(params) {
	return Http({
		method:'post',
		params,
		url:'/admin/sys/role/list'
	})
}

//添加角色
export function addRole(params) {
	return Http({
		method:'post',
		params,
		url:'/admin/sys/role/addRole'
	})
}

//删除某一个角色
export function deletedSomeRole(params) {
	return Http({
		method:"get",
		params,
		url:'/admin/sys/role/deleteRole'
	})
}

//编辑角色
export function editRole(params) {
	return Http({
		method:'post',
		params,
		url:'/admin/sys/role/editRole'
	})
}

//角色修改权限
export function roleEditAuth(params) {
	return Http({
		method:'post',
		params,
		url:'/admin/sys/role/editAuth'
	})
}

//根据role_id获取权限
export function getAuthByRoleId(params) {
	return Http({
		method:'get',
		params,
		url:'/admin/sys/role/getAuth'
	})
}
