import React, { Component } from 'react'
//引入store，用于获取redux中保存状态
import store from '../../redux/store'

export default class Count extends Component {

	// 用了redux后，不再需要自己管理被redux管理的状态，我们不需要再写count了
	// 但是，我们不想让redux管理的状态，还是可以写在自己的state中
	state = {carName:'奔驰c63'}

	componentDidMount(){
		//检测redux中状态的变化，只要变化，就调用render
		store.subscribe(()=>{ // subscribe()订阅redux中状态的变化，只要变化，就调用回调函数
			this.setState({}); //this.setState({})，表示什么都不改，只是为了让render重新执行
		})
	}

	// 但是，我们改变redux的这些函数写在当前的组件里，需要render重新调用
	// 那么，难道我们每次都要写这个componentDidMount来订阅redux中状态的变化，然后调用render吗？
	// 如果以后组件特别多，难道每个组件都要写这个componentDidMount吗？
	// 我们有一种简单的处理方式，就是在入口文件index.js中，订阅一次，就可以了

	//加法
	increment = ()=>{
		const {value} = this.selectNumber
		// 通知redux执行加法
		store.dispatch(
			{ 
				type:'increment',
				data:value*1
			}
		)
	}
	//减法
	decrement = ()=>{
		const {value} = this.selectNumber
		// 通知redux执行减法
		store.dispatch(
			{
				type:'decrement',
				data:value*1
			}
		)
	}
	//奇数再加
	incrementIfOdd = ()=>{
		const {value} = this.selectNumber
		const count = store.getState() // getState()获取redux中保存的状态
		if(count % 2 !== 0){
			store.dispatch({type:'increment',data:value*1})
		}
	}
	//异步加
	incrementAsync = ()=>{
		const {value} = this.selectNumber
		setTimeout(()=>{
			store.dispatch({type:'increment',data:value*1})
		},500)
	}

	render() {
		return (
			<div>
				{/* getState()获取redux中保存的状态 */}
				<h1>当前求和为：{store.getState()}</h1>
				<select ref={c => this.selectNumber = c}>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
				</select>&nbsp;
				<button onClick={this.increment}>+</button>&nbsp;
				<button onClick={this.decrement}>-</button>&nbsp;
				<button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;
				<button onClick={this.incrementAsync}>异步加</button>&nbsp;
			</div>
		)
	}
}
