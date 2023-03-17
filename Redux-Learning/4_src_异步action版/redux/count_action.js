/* 
	该文件专门为Count组件生成action对象
*/
import {INCREMENT,DECREMENT} from './constant'
import store from './store'

// 同步action，就是指action的值为Object类型的一般对象
export const createIncrementAction = data => ({type:INCREMENT,data})
export const createDecrementAction = data => ({type:DECREMENT,data})

// 异步action，就是指action的值为函数,异步action中一般都会调用同步action，异步action不是必须要用的。
// 要用异步action，必须要用到redux-thunk中间件，否则会报错
// 我们要在store.js中引入redux-thunk中间件，然后在createStore中使用
export const createIncrementAsyncAction = (data,time) => {
	// 为什么这里能接收到dispatch？
	// 因为redux-thunk中间件会在store.dispatch()的时候，自动传入dispatch
	// 所以，当我们在组件中调用store.dispatch(createIncrementAsyncAction(5,1000))的时候，就会自动传入dispatch
	return (dispatch)=>{
		setTimeout(()=>{
			dispatch(createIncrementAction(data))
		},time)
	}
}