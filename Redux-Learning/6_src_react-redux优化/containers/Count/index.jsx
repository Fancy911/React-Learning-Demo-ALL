import React, { Component } from 'react'
//引入action
import {
	createIncrementAction,
	createDecrementAction,
	createIncrementAsyncAction
} from '../../redux/count_action'
//引入connect用于连接UI组件与redux
import {connect} from 'react-redux'

//定义UI组件
class Count extends Component {

	state = {carName:'奔驰c63'}

	//加法
	increment = () => {
		const {value} = this.selectNumber
		this.props.jia(value*1)
	}
	//减法
	decrement = () => {
		const {value} = this.selectNumber
		this.props.jian(value*1)
	}
	//奇数再加
	incrementIfOdd = () => {
		const {value} = this.selectNumber
		if(this.props.count % 2 !== 0){
			this.props.jia(value*1)
		}
	}
	//异步加
	incrementAsync = () => {
		const {value} = this.selectNumber
		this.props.jiaAsync(value*1,500)
	}

	render() {
		//console.log('UI组件接收到的props是',this.props);
		return (
			<div>
				<h1>当前求和为：{this.props.count}</h1>
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

//使用connect()()创建并暴露一个Count的容器组件
export default connect(
  // mapStateToProps函数的精简写法
  // 直接作为第一个参数传入
	state => ({count:state}), // 映射状态

	//mapDispatchToProps的一般写法
	/* dispatch => ({
		jia:number => dispatch(createIncrementAction(number)),
		jian:number => dispatch(createDecrementAction(number)),
		jiaAsync:(number,time) => dispatch(createIncrementAsyncAction(number,time)),
	}) */

	// mapDispatchToProps的精简写法
  // 直接作为第二个参数传入
	{                         // 映射操作状态的方法
    // 为什么此处可以不用dispatch去分发createIncrementAction这些action? 
    // 因为react-redux内部会自动帮我们分发
    // 所以，当jia被调用时，本质是调用了action里写的createIncrementAction = data => ({type:INCREMENT,data})
    // 同理，当UI组件调用了jiaAsync时，本质是调用了action里写的createIncrementAsyncAction = (data,time) => { ... }
		jia: createIncrementAction, 
		jian: createDecrementAction,
		jiaAsync: createIncrementAsyncAction,
	}
)(Count) // 传入Count这一UI组件, 返回一个容器组件

