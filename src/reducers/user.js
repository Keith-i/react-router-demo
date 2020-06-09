const initialState = {
  user: {}
}
const user = ( state = initialState, action ) => {
  switch(action.type) {
    case 'ADD_USER':
      return {
        user: action.user
      }
    default:
      return state
  }
}

export default user