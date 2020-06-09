// export const increment = (num) => {
//   return {
//     type: 'INCREMENT',
//     num
//   }
// }

// 异步
export const increment = (num) => {
  return dispatch => {
    setTimeout(() => {
      dispatch({
        type: 'INCREMENT',
        num
      })
    }, 1000)
  }
}

export const decrement = (num) => {
  return {
    type: 'DECREMENT',
    num
  }
}