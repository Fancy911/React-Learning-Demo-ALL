import React, { Component } from 'react'
import './index.css'

//创建Context对象
const MyContext = React.createContext()
// Provider和Consumer都是MyContext对象的属性
const {Provider, Consumer} = MyContext 

export default class A extends Component {

	state = {username:'tom',age:18}

	render() {
		const {username,age} = this.state
		return (
			<div className="parent">
				<h3>我是A组件</h3>
				<h4>我的用户名是:{username}</h4>
				{/* 一般情况下，context中的数据是动态的，所以一般都是在Provider中传入一个动态的值 */}
				<Provider value={{username,age}}>
					<B/>
				</Provider>
			</div>
		)
	}
}

class B extends Component {
	render() {
		return (
			<div className="child">
				<h3>我是B组件</h3>
				{/* B组件并未接收使用这个context，但是B组件的子组件C组件需要使用这个context */}
				<C/>
			</div>
		)
	}
}

/* class C extends Component {
	// 在C组件中国呢，声明接收context
	static contextType = MyContext
	render() {
		const {username,age} = this.context
		return (
			<div className="grand">
				<h3>我是C组件</h3>
				<h4>我从A组件接收到的用户名:{username},年龄是{age}</h4>
			</div>
		)
	}
} */

function C(){
	return (
		<div className="grand">
			<h3>我是C组件</h3>
			<h4>我从A组件接收到的用户名:
			<Consumer>
				{value => `${value.username},年龄是${value.age}`}
			</Consumer>
			</h4>
		</div>
	)
}