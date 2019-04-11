const currUse = (state = {username: 'wangfpp'}, action) => {
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