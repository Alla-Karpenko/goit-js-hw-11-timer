import moment from './moment'

export default class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.targetDate = new Date(targetDate);
        this.timerId = null;
        
        this.refs = {
            days: document.querySelector(`${selector}[data-value="days"]`),
            hours: document.querySelector(`${selector}[data-value="hours"] `),
            mins: document.querySelector(` ${selector}[data-value="mins"]`),
            secs: document.querySelector(`${selector}[data-value="secs"]`),
        }
    }
    start() {
        this.timerId = setInterval(() => { 
           const time = moment(deltaTime)
           const deltaTime = this.targetDate - Date.now()
           this.updateClockface(time)
        }, 1000); 
        
    }
    updateClockface({ days, hours, mins, secs }) {
        const { days, hours, mins, secs } = this.refs
        days.textContent = days
        hours.textContent = hours
        mins.textContent = mins
        secs.textContent = secs
    }

}