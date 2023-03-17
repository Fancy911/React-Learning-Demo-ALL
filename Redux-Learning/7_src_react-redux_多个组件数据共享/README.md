## 7_求和案例_react-redux数据共享版

1. 定义一个`Pserson`组件，和`Count`组件通过`redux`共享数据。
2. 为`Person`组件编写：`reducer`、`action`，配置`constant`常量。
3. ※ 重点：`Person`的`reducer` 和 `Count`的`Reducer`要使用 `combineReducers` 进行合并，
      合并后的总状态是一个对象！！！
4. 交给`store`的是总`reducer`，最后注意在组件中取出状态的时候，记得“取到位”（即，注意总的reducer里面取的key名）。
  