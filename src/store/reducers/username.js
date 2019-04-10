const currUse = (state = {username: 'wang'}, action) => {
    switch (action.type) {
        case 'CHANGE_USR':
            console.log(state, action);
            return {
                ...state,
                username: state.username
            }
        default:
            return state;
    }
};

export default currUse;