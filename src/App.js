import React from 'react'

import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom'

// import PrivateRouter from '@/components/PrivateRouter'

import zhCN from 'antd/lib/locale/zh_CN';
import { ConfigProvider } from 'antd';

import Login from '@/views/login'
// import Home from '@/pages/Home'

function App() {
	return (
			<ConfigProvider locale={zhCN}>
				<BrowserRouter>
					<Switch>
						<Route exact path='/login' render={()=><Login />} />
						{/*<PrivateRouter path="/home" component={Home} />*/}
						<Redirect from='/' to='/login' />
					</Switch>
				</BrowserRouter>
			</ConfigProvider>
	);
}

export default App;
