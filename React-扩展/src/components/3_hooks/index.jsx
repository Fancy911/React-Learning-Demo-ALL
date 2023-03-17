import React from 'react'
import ReactDOM from 'react-dom'

//类式组件
/* class Demo extends React.Component {

	state = {count:0}

	myRef = React.createRef()

	add = ()=>{
		this.setState(state => ({count:state.count+1}))
	}

	unmount = ()=>{
		ReactDOM.unmountComponentAtNode(document.getElementById('root'))
	}

	show = ()=>{
		alert(this.myRef.current.value)
	}

	componentDidMount(){
		this.timer = setInterval(()=>{
			this.setState( state => ({count:state.count+1}))
		},1000)
	}

	componentWillUnmount(){
		clearInterval(this.timer)
	}

	render() {
		return (
			<div>
				<input type="text" ref={this.myRef}/>
				<h2>当前求和为{this.state.count}</h2>
				<button onClick={this.add}>点我+1</button>
				<button onClick={this.unmount}>卸载组件</button>
				<button onClick={this.show}>点击提示数据</button>
			</div>
		)
	}
} */

function Demo(){
	console.log('Demo'); // Demo函数会调用 1 + n次，n是状态值的变化次数

	// React.useState()返回的是一个数组
	// 数组的第一个元素是状态值,第二个元素是更新状态值的函数
	// React.useState()传入的参数是初始状态值
	const [count, setCount] = React.useState(0); // count是状态值，setCount是更新状态值的函数
	// console.log(count,setCount); // 0 ƒ (state) { [native code] }
	
	const myRef = React.useRef(); // myRef是一个容器，可以用来存储任何值

	React.useEffect(()=>{
		let timer = setInterval(()=>{
			setCount(count => count+1 )
		},1000)
		// 这里的return是一个函数，这个函数会在组件卸载前执行
		// 类似于componentWillUnmount
		return ()=>{
			clearInterval(timer)
		}
	},[])

	//加的回调
	function add(){
		// setCount(count+1) //第一种写法，直接传入一个新的状态值
		setCount(count => count+1) // 第二种写法，传入一个函数，函数的返回值是新的状态值
		// 这里有点像setState，但是不完全一样
	}

	//提示输入的回调
	function show(){
		alert(myRef.current.value)
	}

	//卸载组件的回调
	function unmount(){
		ReactDOM.unmountComponentAtNode(document.getElementById('root'))
	}

	return (
		<div>
			<input type="text" ref={myRef}/> {/* input框绑定ref */}
			<h2>当前求和为：{count}</h2>
			<button onClick={add}>点我+1</button>
			<button onClick={unmount}>卸载组件</button>
			<button onClick={show}>点我提示数据</button>
		</div>
	)
}

export default Demo