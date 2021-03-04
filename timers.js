class CountdownTimer {
    constructor ( selector, targetDate ) {
        this.selector = selector;
        this.targetDate = new Date( targetDate );
        this.timer = this.timer.bind(this);
        
        this.refs = {
            day: document.querySelector(`${this.selector}[data-value="days"]`),
            hour: document.querySelector(`${this.selector}[data-value="hours"] `),
            minute: document.querySelector(` ${this.selector}[data-value="mins"]`),
            second: document.querySelector(`${this.selector}[data-value="secs"]`),
        }
    
    };
    timer () {
        const currentDate = Date.now();
        this.time = this.targetDate - currentDate;

        
        const days = pad(Math.floor( time / ( 1000 * 60 * 60 * 24 ) ))
        const hours = pad(Math.floor( (time % ( 1000 * 60 * 60 * 24 ) ) / ( 1000 * 60 * 60 ) ))
        const mins = pad(Math.floor( (time % ( 1000 * 60 * 60 ) ) / ( 1000 * 60 ) ))
        const secs = pad(Math.floor( (time % ( 1000 * 60 ) ) / 1000 ))
      
        day.textContent = days;
        hour.textContent = hours;
        minute.textContent = mins;
        second.textContent = secs;

        function pad(value) {
        return String(value).padStart(2, '0');
        }

    }
  
    start () {
        setInterval( this.timer, 1000 );
    }

}
const countdownTimer = new CountdownTimer( "#timer-1", "2021 december 31 23:59" );
countdownTimer.start();