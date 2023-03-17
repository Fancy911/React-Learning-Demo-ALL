/* 
	该文件专门为Count组件生成action对象
*/
import {INCREMENT,DECREMENT} from './constant'

export const createIncrementAction = data => ({type:INCREMENT,data}) // 加的action
export const createDecrementAction = data => ({type:DECREMENT,data}) // 减的action

// const createIncrementAction = data => ({type:INCREMENT,data})
// 这种写法等效于
// function createIncrementAction(data){
// 	return {type:INCREMENT,data}
// }