const counter = (state = 0, action) => {
  switch(action.type) {
    case "INCREMENT":
      return state + action.num
      // throw new Error("error reducer")
    case "DECREMENT":
      return state - action.num
    default:
      return state
  }
}

export default counter