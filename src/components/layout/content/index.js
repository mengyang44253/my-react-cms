import React from "react";

import { Switch,Route } from "react-router-dom";

import PrivateRouter from '@/components/PrivateRouter'

import Tag from '@/views/article/tag'
import Directory from '@/views/article/directory'

import Front from '@/views/home/home'
import User from '@/views/system/user'
import Role from '@/views/system/role'

import Friend from '@/views/friend'


export default function LayoutContent() {
	return (
		<Switch>
			<PrivateRouter exact path="/home" component={Front} />


			<PrivateRouter exact path="/home/article/tag" component={Tag} />
			<PrivateRouter exact path="/home/article/directory" component={Directory} />


			<PrivateRouter exact path="/home/system/user" component={User} />
			<PrivateRouter exact path="/home/system/role" component={Role} />




			<PrivateRouter exact path="/home/friend" component={Friend} />
		</Switch>
	)
}