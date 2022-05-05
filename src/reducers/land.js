export default (state = [], action) => {
    if (action.type === 'GET_LAND') {
        return action.payload
    } else {
        return state
    }
}