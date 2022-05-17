export default (state = [], action) => {
    if (action.type === 'GET_KEYWORDS') {
        return action.payload
    } else {
        return state
    }
}