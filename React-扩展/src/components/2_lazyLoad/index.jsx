import React, { Component, lazy, Suspense} from 'react'
// lazy函数接收一个函数，这个函数返回一个Promise对象，这个Promise对象的结果是一个默认导出的组件
// Suspense用于包裹懒加载的组件，fallback用于指定在组件加载之前显示的内容
import {NavLink,Route} from 'react-router-dom'

// import Home from './Home'
// import About from './About'

import Loading from './Loading'; // Loading组件, 不能使用懒加载

// lazy函数接收一个函数，这个函数返回一个Promise对象，这个Promise对象的结果是一个默认导出的组件
const Home = lazy(() => import('./Home'))
const About = lazy(() => import('./About'))

export default class Demo extends Component {
	render() {
		return (
			<div>
				<div className="row">
					<div className="col-xs-offset-2 col-xs-8">
						<div className="page-header"><h2>React Router Demo</h2></div>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-2 col-xs-offset-2">
						<div className="list-group">
							{/* 在React中靠路由链接实现切换组件--编写路由链接 */}
							<NavLink className="list-group-item" to="/about">About</NavLink>
							<NavLink className="list-group-item" to="/home">Home</NavLink>
						</div>
					</div>
					<div className="col-xs-6">
						<div className="panel">
							<div className="panel-body">
								{/* Suspense fallback={<Loading/>}：当组件被Suspense包裹时，如果组件还没有加载完毕，就会显示fallback中的内容 */}
								<Suspense fallback={<Loading/>}>
									{/* 注册路由 */}
									<Route path="/about" component={About}/>
									<Route path="/home" component={Home}/>
								</Suspense>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}