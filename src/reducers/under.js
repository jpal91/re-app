export default (state=[], action) => {
    if (action.type === 'GET_UNDER') {
        return action.payload
    } else {
        return state
    }
}