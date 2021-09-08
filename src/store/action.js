import {CHANGE_USERINFO,CHANGE_USER_ID,CLEAR_USERINFO} from './actionTypes'


import {
	getUserInfo
} from '@/api/user'


//设置userId
export const ChangeUserId=(id)=>({
	type:CHANGE_USER_ID,
	id:id
})

//设置用户信息
export const ChangeUserInfo=(userInfo) => ({
	type:CHANGE_USERINFO,
	userInfo
})


export const ClearUserInfo=()=>({
	type:CLEAR_USERINFO
})

//根据id获取用户信息
export function getUserInfoById(id){
	return async dispatch=>{
		let res=await getUserInfo({
			user_id:id
		})
		if(res.success){
			dispatch(ChangeUserInfo(res.data))
		}
	}
}

