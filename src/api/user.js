import Http from '@/utils/axios'

//注册用户
export function registerUser(params) {
	return Http({
		method:'post',
		params,
		url:'/admin/user/register'
	})
}

//登录
export function login(params){
	return Http({
		method:'post',
		params,
		url:'/admin/user/login'
	})
}

//用户名是否重复
export function userCheckName(params) {
	return Http({
		method:'post',
		params,
		url:"/admin/user/checkName"
	})
}

//获取用户信息
export function getUserInfoByUserId(params){
	return Http({
		method:'get',
		params,
		url:'/admin/user/getUserInfoById'
	})
}

//更新用户信息
export function updateUserInfo(params){
	return Http({
		method:'post',
		params,
		url:'/admin/user/updateUserInfo'
	})
}

//密码是否正确
