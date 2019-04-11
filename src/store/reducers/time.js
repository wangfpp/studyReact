// import commjs from '../../comm/comm';
const time = (state, action) => {
    switch(action.type) {
        case 'CHANGE_TIME':
            return action.num;
        default:
            let num = new Date().getTime();
            return num;
    }
};

export default time;