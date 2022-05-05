export default (state = [], action) => {
    if (action.type === 'GET_HOMES') {
        return action.payload
    } else {
        return state
    }
}