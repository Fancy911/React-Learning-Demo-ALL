/* 
	1.该文件是用于创建一个为Count组件服务的reducer，reducer的本质就是一个函数
	2.reducer函数会接到两个参数，分别为：之前的状态(preState)，动作对象(action)
*/

const initState = 0 //初始化状态

// 用于加工Count的状态的reducer函数
export default function countReducer(preState=initState, action){ // preState=initState，意思就是：如果preState为undefined，就使用initState的值
	// console.log(preState, action);
	//从action对象中获取：type、data
	const {type, data} = action
	//根据type决定如何加工数据
	switch (type) {
		case 'increment': //如果是加
			return preState + data
		case 'decrement': //若果是减
			return preState - data
		default:
			return preState // 如果是第一次调用，preState为undefined，返回初始化状态
	}
}