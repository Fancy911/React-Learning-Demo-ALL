import React, { Component } from 'react'
import {nanoid} from 'nanoid' // 用于生成唯一的id
import {connect} from 'react-redux'
import {createAddPersonAction} from '../../redux/actions/person'

class Person extends Component {

	addPerson = ()=>{
		// 获取用户输入，非受控组件，直接通过ref获取到节点，然后获取到节点的value值
		const name = this.nameNode.value
		const age = this.ageNode.value
		const personObj = { 
			id:nanoid(), 
			name, 
			age
		}
		this.props.jiaYiRen(personObj)
		this.nameNode.value = ''
		this.ageNode.value = ''
	}

	render() {
		return (
			<div>
				<h2>我是Person组件,上方组件求和为{this.props.he}</h2>
				{/* 这里用的就是非受控组件的写法，直接通过ref获取到节点，然后获取到节点的value值 */}
				<input ref={ c => this.nameNode = c } type="text" placeholder="输入名字"/>
				<input ref={ c => this.ageNode = c } type="text" placeholder="输入年龄"/>
				<button onClick={this.addPerson}>添加</button>
				<ul>
					{
						this.props.yiduiren.map((p)=>{
							return <li key={p.id}>{p.name}--{p.age}</li>
						})
					}
				</ul>
			</div>
		)
	}
}

export default connect(
	state => ({
		yiduiren:state.rens,
		he:state.he
	}), //映射状态
	{
		jiaYiRen:createAddPersonAction
	} //映射操作状态的方法
)(Person)