import React from 'react'

import {Route,Redirect} from 'react-router-dom'

import localCache from '@/utils/cache'



const PrivateRouter=({component:Component,...rest})=>{

	const authRoute=()=>{
		const token=localCache.getCache('token')
		return !!token;
	}

	return (
			<Route
					{...rest}
					render={(routeProps)=>authRoute()?<Component {...routeProps} />:<Redirect to="/login" />}
			/>
	)
}

export default PrivateRouter