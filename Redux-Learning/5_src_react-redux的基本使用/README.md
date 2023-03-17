## 5_求和案例_react-redux基本使用
1. 明确两个概念：
    1. UI组件:不能使用任何`redux`的`api`，只负责页面的呈现、交互等。
    2. 容器组件：负责和`redux`通信，将结果交给UI组件。
2. 如何创建一个容器组件————靠 `react-redux` 的 `connect`函数
    `connect(mapStateToProps,mapDispatchToProps)(UI组件)`
        - `mapStateToProps`:映射状态，返回值是一个对象
        - `mapDispatchToProps`:映射操作状态的方法，返回值是一个对象
3. 备注1：容器组件中的`store`是靠`props`传进去的，而不是在容器组件中直接引入
4. 备注2：`mapDispatchToProps`，也可以是一个对象