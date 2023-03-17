
## 6_求和案例_react-redux优化
1. 容器组件 和 UI组件 整合一个文件

2. 无需自己再给`App.jsx`父组件中引入`store`, 并给每个容器组件传递`store`（如果组件很多的话，就需要每一个组件都传一个`store={store}`，如下代码所示）
  ```js
  export default class App extends Component {
    render() {
      return (
        <div>
          {/* 通过props，给容器组件传递store， 这样很麻烦 */}
          <Count store={store} />
          <Count1 store={store} />
          <Count2 store={store} />
          <Count3 store={store} />
          ……
          <CountN store={store} />
        </div>
      )
    }
  }
  ```
  我们只需要在入口文件`index.js`里引入`Provider`，引入`store`，给`<App/>`根节点外，包裹一个`<Provider store={store}>`即可。

  ```js
  import React from 'react'
  import ReactDOM from 'react-dom'
  import App from './App'
  import store from './redux/store'
  import {Provider} from 'react-redux'

  ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById('root')
  )
  ```

3. 使用了`react-redux`后也不用再自己检测`redux`中状态的改变了，容器组件可以自动完成这个工作。
  所以，就不再需要给`index.js`入口文件的`<App/>`根节点去使用`store.subscribe()`来监测状态的变化了。

4. `mapStateToProps`和`mapDispatchToProps`都可以简写
  - `mapStateToProps`：直接简写为一个箭头函数，作为第一个参数传递给connect
  - `mapDispatchToProps`：直接也可以简单的写成一个对象，作为第二个参数传递给connect

5. 一个组件要和redux“打交道”要经过哪几步？
  1. 定义好UI组件---不暴露（合成一个组件后，就不要`export`了，直接`class Count extends Component {}` 来定义UI组件 ）
  2. 引入`connect`生成一个容器组件，并暴露，写法如下：
    ```js
    connect(
      state => ({key:value}), //映射状态
      { key:xxxxxAction } //映射操作状态的方法
    )(UI组件名)
    ```
  3. 在UI组件中通过`this.props.xxxxxxx`读取和操作状态