const user = ( state = 0, action ) => {
  switch(action.type) {
    case 'ADD_USER':
      state = state.concat(state.push('keith'))
      return state
    default:
      return state
  }
}

export default user