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
