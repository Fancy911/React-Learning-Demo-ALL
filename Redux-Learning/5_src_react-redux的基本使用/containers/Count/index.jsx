// 容器组件：负责和redux通信，给UI组件传递特定的属性和方法
// 容器组件的编写：需要使用react-redux的connect()()创建并暴露一个容器组件
// 而不再是以往的rcc

//引入Count的UI组件
import CountUI from '../../components/Count'

//引入action
import {
	createIncrementAction,
	createDecrementAction,
	createIncrementAsyncAction
} from '../../redux/count_action'

//引入connect用于连接UI组件与redux
import {connect} from 'react-redux'

/* 
	1. mapStateToProps函数返回的是一个对象；
		返回的对象中的key，就作为传递给UI组件props的key, value就作为传递给UI组件props的value
	2.mapStateToProps用于传递状态state，我们可以在UI组件中通过props接收到
*/
function mapStateToProps(state){
	return { count: state } 
	// App根组件已经给Count的容器组件传递了store
	// 并且，这个mapStateToProps函数被react-redux调用时，直接就帮你把store中的state传递进来了
	// 你只需要直接在这个地方接收state参数即可。
}

/* 
	1.mapDispatchToProps函数返回的是一个对象{}；
		返回对象中的key就作为传递给UI组件props的key,value就作为传递给UI组件props的value
	2.mapDispatchToProps用于传递操作状态的方法dispatch，我们可以在UI组件中通过props接收到
*/
function mapDispatchToProps(dispatch){
  // 返回一个对象
  // key是jia，value是一个函数
  // 这个函数的返回值是一个action对象
	return {
    // 通知redux执行加法，传入dispatch的参数是action对象
    // jia: 这个属性名是自定义的，可以随便写，但是要和UI组件中的调用方法一致
		jia: number => dispatch(createIncrementAction(number)),
    // 通知redux执行减法
		jian: number => dispatch(createDecrementAction(number)),
    // 通知redux执行异步加法，多传一个参数time，表示延迟的时间
		jiaAsync: (number,time) => dispatch(createIncrementAsyncAction(number,time)),
	}
}

//使用connect()()创建并暴露一个Count的容器组件
export default connect(mapStateToProps, mapDispatchToProps)(CountUI)
// 将mapStateToProps和mapDispatchToProps传递给connect()()，返回一个函数，再调用该函数，传入CountUI，返回一个容器组件