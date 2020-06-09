const initialState = {
  isFetching: false,
  error: null,
  user: {}
}
const user = ( state = initialState, action ) => {
  switch(action.type) {
    case 'ADD_USER_SUCCESS':
      return {
        ifFetching: true,
        error: null,
        user: action.user
      }
    case 'FETCH_USER_REQUEST':
      return {
        ifFetching: true,
        error: null,
        user: action.user
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