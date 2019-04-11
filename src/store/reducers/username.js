const currUse = (state = {username: 'wang'}, action) => {
    switch (action.type) {
        case 'CHANGE_USR':
            return {
                username: action.username
            }
            
        default:
            return state;
    }
};

export default currUse;