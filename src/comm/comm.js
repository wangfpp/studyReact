const commjs = {
    dateForm(num) {
        let date = new Date(num);
        let [year, month, day, hours, min, sec] = [date.getFullYear(), date.getMonth() + 1, date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()]
        let result = `${year}-${commjs.doubleNum(month)}-${commjs.doubleNum(day)} ${commjs.doubleNum(hours)}:${commjs.doubleNum(min)}:${commjs.doubleNum(sec)}`;
        return result;
    },
    doubleNum(num) {
        return num >= 10 ? num : `0${num}`; 
    }
};

export default commjs;