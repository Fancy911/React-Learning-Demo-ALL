import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from './redux/store'

ReactDOM.render(<App/>,document.getElementById('root'))

// 只要redux中的状态发生了改变，就会调用回调函数，就重新render整个App
// 那会不会导致性能问题？
// 不会，因为react中还有dom的diff算法，只会更新有变化的部分
store.subscribe(()=>{
	ReactDOM.render(<App/>,document.getElementById('root'))
})