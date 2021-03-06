const initialState = {
  isFetching: false,
  error: null,
  user: {}
}
const user = ( state = initialState, action ) => {
  switch(action.type) {
    case 'ADD_USER_SUCCESS':
      return {
        isFetching: false,
        error: null,
        user: action.user
      }
    case 'FETCH_USER_REQUEST':
      return {
        isFetching: true,
        error: null,
        user: {}
      }
    case 'FETCH_USER_FAILURE':
      return {
        isFetching: false,
        error: action.error,
        user: {}
      }
    default:
      return state
  }
}

export default user