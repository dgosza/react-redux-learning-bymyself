const valueCounter = {
    value: 0
}

export const counterReducer = (state = valueCounter, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                value: state.value + 1
            }
        case 'DECREMENT':
            return {
                ...state,
                value: state.value - 1
            }
        default:
            return state
    }

}