import React from 'react';
import lh from './lh'


const auth = { auth: 'Test123' }

export const getHomes = (str) => async (dispatch) => {
  let response;
  
  if (str === 'int') {
    response = await lh.post("/ui/listings", auth)
    return dispatch({ type: 'GET_HOMES', payload: response.data })
  } else if (str === 'land') {
    response = await lh.post('/ui/land', auth)
    return dispatch({ type: 'GET_LAND', payload: response.data })
  } else if (str === 'under') {
    response = await lh.post('/ui/under', auth)
    return dispatch({ type: 'GET_UNDER', payload: response.data })
  } else {
    return
  }
  
  
};

export const getProp = (num) => async (dispatch) => {
  const response = await lh.post('/api/prop-details', {
    ...auth,
    id: num
  })

  return dispatch({ type: 'PROP_DETAILS', payload: response.data })
}

export const setLast = (str) => {
  return { type: 'LAST', payload: str }
}