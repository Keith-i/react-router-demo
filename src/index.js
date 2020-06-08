import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import counter from './reducers/counter'

// // 创建store仓库
const store = createStore(counter)
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
