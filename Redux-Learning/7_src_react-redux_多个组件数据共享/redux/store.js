/* 
	该文件专门用于暴露一个store对象，整个应用只有一个store对象
*/

//引入createStore，专门用于创建redux中最为核心的store对象
import {createStore,applyMiddleware,combineReducers} from 'redux'
//引入为Count组件服务的reducer
import countReducer from './reducers/count'
//引入为Count组件服务的reducer
import personReducer from './reducers/person'
//引入redux-thunk，用于支持异步action
import thunk from 'redux-thunk'

// 汇总所有的reducer变为一个总的reducer
// 该函数的返回值是一个新的reducer函数
// 如果不用combineReducers，那么在createStore时，就要把每个组件的reducer都传入，如下：
// const store = createStore(countReducer,personReducer,applyMiddleware(thunk))
// 可是，这种写法是不对的，因为createStore只能接收两个参数，
// 第一个参数是reducer，（所以我们必须将所有的reducer都汇总成一个总的reducers，然后传入createStore）
// 第二个参数是可选的，而且必须是enhancer，即增强器，而applyMiddleware就是一个增强器，

const allReducer = combineReducers({
	he:countReducer, // 和的reducer
	rens:personReducer // 人的reducer
})
// combineReducers里传入的这个对象，就是redux中保存的总状态对象
// 都combine之后，组件之间的数据就可以共享了，因为组件之间的数据都在redux中保存了
// 每一个容器组件中，只需要通过 state.属性名 来获取自己需要的数据

//暴露store
export default createStore(allReducer,applyMiddleware(thunk))