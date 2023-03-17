import {ADD_PERSON} from '../constant'

// 初始化人的列表，数组中放的是对象，每个对象是一个人的信息对象
const initState = [
	{ id:'001', name:'tom', age:18 }
]

export default function personReducer(preState=initState, action){
	// console.log('personReducer@#@#@#');
	const {type, data} = action
	switch (type) {
		case ADD_PERSON: //若是添加一个人
			// preState.unshift(data) //此处不可以这样写，这样会导致preState被改写了，personReducer就不是纯函数了。
			// return preState;
			return [data, ...preState] // data是一个人的信息对象，preState是原来的人的列表
		default:
			return preState
	}
}