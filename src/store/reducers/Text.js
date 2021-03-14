const text = {
    value: 'Texto Inicial'
}

export const TextReducer = (state = text, action) => {

    switch (action.type) {
        case 'SET_NEW_VALUE':
            return {
                ...state,
                value: action.message
            }
        default:
            return state
    }

}