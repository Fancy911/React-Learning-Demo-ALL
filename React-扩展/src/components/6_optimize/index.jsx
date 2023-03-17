import React, { PureComponent } from 'react'
import './index.css'

export default class Parent extends PureComponent {

	state = {
		carName:"奔驰c36",
		stus:['小张','小李','小王']
	}

	addStu = ()=>{
		/* const {stus} = this.state
		stus.unshift('小刘')
		this.setState({stus}) */

		const { stus } = this.state
		this.setState({ stus:['小刘',...stus] }); // 这种写法是正确的，因为这种写法不是改变原来的状态值，而是返回了一个新的状态值
	}

	changeCar = ()=>{
		this.setState({carName:'迈巴赫'}) // 这种写法就是传入的新对象，所以是正确的

		// const obj = this.state
		// obj.carName = '迈巴赫'
		// console.log(obj === this.state); // true
		// this.setState(obj); // 而这种写法就是obj里面的属性值改变了，但是obj的引用地址没有改变，所以是错误的
	}

	/* shouldComponentUpdate(nextProps,nextState){
		// console.log(this.props,this.state); //目前的props和state
		// console.log(nextProps,nextState); //接下要变化的目标props，目标state
		return !this.state.carName === nextState.carName
	} */

	render() {
		console.log('Parent---render');
		const {carName, stus} = this.state
		return (
			<div className="parent">
				<h3>我是Parent组件</h3>
				{stus}&nbsp;
				<span>我的车名字是：{carName}</span><br/>
				<button onClick={this.changeCar}>点我换车</button>
				<button onClick={this.addStu}>添加一个小刘</button>
				<Child carName="奥拓" perName={stus}/>
			</div>
		)
	}
}

class Child extends PureComponent {

	/* shouldComponentUpdate(nextProps,nextState){
		console.log(this.props,this.state); //目前的props和state
		console.log(nextProps,nextState); //接下要变化的目标props，目标state
		return !this.props.carName === nextProps.carName
	} */

	render() {
		// 如果子组件不是PureComponent
		// 只要它在父组件里面写着，子组件的render就会被调用
		// 父组件状态更新了，子组件的render仍旧会被调用，哪怕子组件根本没有接收到任何的props
		console.log('Child---render');
		return (
			<div className="child">
				<h3>我是Child组件</h3>
				<span>我接到的车是：{this.props.carName}</span>
				<br/>
				<span>我接到的人是：{this.props.perName}</span>
			</div>
		)
	}
}
