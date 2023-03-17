## 8_求和案例_react-redux开发者工具的使用

1. yarn add redux-devtools-extension
2. store中进行配置
    ```js
    import {composeWithDevTools} from 'redux-devtools-extension'
    const store = createStore(allReducer,composeWithDevTools(applyMiddleware(thunk))
    ```