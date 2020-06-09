export const fetch_user = (user) => {
  console.log('ccc')
  return {
    type: 'ADD_USER_SUCCESS',
    user
  }
}

export const fetch_user_failure = (error) => {
  return {
    type: 'FETCH_USER_FAILURE',
    error
  }
}

export const fetch_user_request = () => {
  return {
    type: 'FETCH_USER_REQUEST'
  }
}

export const get_user = () => {
  return dispatch => {
    dispatch(fetch_user_request())
    fetch("http://iwenwiki.com/api/blueberrypai/getChengpinDetails.php")
    .then(res => res.json())
    .then(data => {
      dispatch(fetch_user(data.chengpinDetails[0]))
    })
    .catch(error => {
      console.log(error)
      dispatch(fetch_user_failure())
    })
  }
}