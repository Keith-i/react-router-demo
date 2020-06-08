export const increment = (num) => {
  return {
    type: 'INCREMENT',
    num
  }
}

export const decrement = (num) => {
  return {
    type: 'DECREMENT',
    num
  }
}