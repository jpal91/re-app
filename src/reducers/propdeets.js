let obj = {}

export default (state={}, action) => {
    if (action.type === 'PROP_DETAILS') {
        return action.payload
    } else {
        return state
    }
}