export default (state=null, action) => {
    if (action.type === 'LAST') {
        return action.payload
    } else {
        return state
    }
}