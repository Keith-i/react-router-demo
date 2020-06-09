import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import logger from 'redux-logger'  // 提供的中间件
import thunk from 'redux-thunk'
// import counter from './reducers/counter'

// 异步和同步


// 自行手写的中间件
// const logger = store => next => action => {
//   console.log("dispatch->", action)
//   let result = next(action) // 加载下一个中间件
//   console.log("next state->", store.getState())
//   return result
// }

// const error = store => next => action => {
//   try {
//     next(action)
//   } catch(e) {
//     console.log("error->", e)
//   }
// }

// // 创建store仓库
// const store = createStore(rootReducer, {}, applyMiddleware(logger, error))
const store = createStore(rootReducer, {}, applyMiddleware(logger, thunk))
// store.subscribe(() => {
//   console.log('state:', store.getState())
// })

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
