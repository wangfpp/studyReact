import axios from 'axios';
const server = {
    sysHelp: () => {
        return new Promise((resolve, reject) => {
            axios.get('/sys/help').then(res => {
                resolve(res.data);
            }).catch(err => {
                reject(err);
            });
        });
    }
};
export { server };