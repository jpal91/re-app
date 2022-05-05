import lh from './lh'

export const getHomes = (str) => async (dispatch) => {
  let response;

  if (str === 'int') {
    response = await lh.get("/ui/listings")
    return dispatch({ type: 'GET_HOMES', payload: response.data })
  } else if (str === 'land') {
    response = await lh.get('/ui/land')
    return dispatch({ type: 'GET_LAND', payload: response.data })
  } else if (str === 'under') {
    response = await lh.get('/ui/under')
    return dispatch({ type: 'GET_UNDER', payload: response.data })
  } else {
    return
  }
  
  
};
