import React, { Component } from 'react'

export default class Demo extends Component {

	state = {count:0}

	add = ()=>{
		/*
		// setState的第一种写法：对象式的setState
		// 1.获取原来的count值
		const {count} = this.state
		// 2.更新状态
		this.setState({count:count+1})
		// 3. 打印输出
		console.log('15行的输出',this.state.count); // 0
		*/

		// 分析：为什么setState更新完了count的值，但是后一行打印输出的值还是0？
		// 原因：setState确实是一个同步的方法，但是setState的引起后续状态更新的动作是异步的
		// 所以，上述代码，setState更新完了count的值，会直接往后执行打印输出，但是后续的状态更新是异步的，所以后一行打印输出的值还是0
		// 那如果我们想要拿到最新的状态值，该怎么办呢？

		// ===========================================
		// 解决方案1：回调函数
		// 1.获取原来的count值
		const {count} = this.state
		// 2.更新状态
		this.setState({count:count+1},()=>{ // 传入一个回调函数，这个回调函数是在状态更新完毕、界面也更新后才会执行的，所以自然能拿到最新的状态值
			// 3. 打印输出
			console.log('输出',this.state.count);  //
		})

		// ===========================================
		// 解决方案2: 函数式的setState，即setState传入一个函数
		// 这个函数，能接收到两个参数：第一个参数是原来的状态值state，第二个参数是原来的props值
		// 返回值是一个对象，这个对象就是新的状态值
		this.setState( (state,props) => {
			return { count: state.count + 1 }
		})
	}

	render() {
		return (
			<div>
				<h1>当前求和为：{this.state.count}</h1>
				<button onClick={this.add}>点我+1</button>
			</div>
		)
	}
}