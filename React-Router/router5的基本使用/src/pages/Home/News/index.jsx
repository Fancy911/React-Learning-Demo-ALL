import React, { Component } from 'react'

export default class News extends Component {
	/* componentDidMount(){
		// 编程式路由导航: 实现2s后跳转到message路由
		setTimeout(()=>{
			this.props.history.push('/home/message')
		},2000)
	} */
	render() {
		return (
			<ul>
				<li>news001</li>
				<li>news002</li>
				<li>news003</li>
			</ul>
		)
	}
}
