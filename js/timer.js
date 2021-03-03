import moment from './moment'

export default class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.targetDate = new Date(targetDate);
        this.timerId = null;
        
        this.refs = {
            day: document.querySelector(`${selector}[data-value="days"]`),
            hour: document.querySelector(`${selector}[data-value="hours"] `),
            minute: document.querySelector(` ${selector}[data-value="mins"]`),
            second: document.querySelector(`${selector}[data-value="secs"]`),
        }
    }
    start() {
        this.timerId = setInterval(() => { 
           const time = moment(deltaTime)
           const deltaTime = this.targetDate - Date.now()
           this.updateClockface(time)
        }, 1000); 
        
    }
    updateClockface({ day, hours, minute, second }) {
        const { day, hours, minute, second } = this.refs
        day.textContent = day;
        hours.textContent = hours;
        minute.textContent = minute;
        second.textContent = second;
    }

}