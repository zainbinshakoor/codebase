export const themeReducer = (state, action) => {
    switch (action.type) {
        case 'TOGGLE':
            return state === 'light' ? 'dark' : 'light'
        default:
            return state;
    }
}

