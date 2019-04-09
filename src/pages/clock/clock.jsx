import React, { Component } from 'react';
class Clock extends Component{
    constructor(props) {
        super(props)
        this.state = {
            date: props.date,
            showDate: this.dateForm(props.date)
        };
        this.timer = '';
    }
    dateForm(num) {
        let date = new Date(num);
        let [year, month, day, hours, min, sec] = [date.getFullYear(), date.getMonth() + 1, date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()]
        let result = `${year}-${this.doubleNum(month)}-${this.doubleNum(day)} ${this.doubleNum(hours)}:${this.doubleNum(min)}:${sec}`;
        return result;
    }
    doubleNum(num) {
        return num >= 10 ? num : `0${num}`; 
    }
    componentWillUnmount() {
        if (this.timer !== '') { 
            clearInterval(this.timer)
        }
    }
    componentDidMount() {
        let self = this;
        this.timer = setInterval(function() {
            if (self.state.date === 0) {
                clearInterval(self.timer);
            } else {
                self.setState({
                    date: self.state.date + 1000
                })
            }
            // console.log(self.state.date, self.dateForm(self.state.date))
            self.setState({
                showDate: self.dateForm(self.state.date)
            })
            self.props.change(self.state.date);
        }, 1000);
    }
    componentWillUpdate(a, b){
        // console.log(b);
    }
    render() {
        return <div>
            {this.state.showDate}
        </div>
    }
};
export default Clock;