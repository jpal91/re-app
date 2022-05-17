export default (state = [], action) => {
    if (action.type === 'GET_MULTI') {
        return action.payload
    } else {
        return state
    }
}