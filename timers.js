class CountdownTimer {
    constructor({ selector, targetDate }) {
        
        this.targetDate = new Date(targetDate);
        this.timer = this.timer.bind(this);
        
        this.refs = {
            days: document.querySelector(`${selector}[data-value="days"]`),
            hours: document.querySelector(`${selector}[data-value="hours"] `),
            mins: document.querySelector(` ${selector}[data-value="mins"]`),
            secs: document.querySelector(`${selector}[data-value="secs"]`),
          
        }
    
    };
    timer() {
       const currentTime = Date.now();
       this.time = this.targetDate - currentTime;
     
      const days = pad(Math.floor( this.time / ( 1000 * 60 * 60 * 24 ) ));
      const hours = pad(Math.floor( (this.time % ( 1000 * 60 * 60 * 24 ) ) / ( 1000 * 60 * 60 ) ));
      const mins = pad(Math.floor( (this.time % ( 1000 * 60 * 60 ) ) / ( 1000 * 60 ) ));
      const secs = pad(Math.floor( (this.time % ( 1000 * 60 ) ) / 1000 ));
        
    
        days.textContent = days
        hours.textContent = hours
        mins.textContent = mins
        secs.textContent = secs
        

        function pad(value) {
            return String(value).padStart(2, '0');
        }
 
    }
  
    start() {
       
        setInterval(this.timer, 1000);
    
    }
      

}
const countdownTimer = new CountdownTimer( "#timer-1", "2021 december 31 23:59" );
countdownTimer.start();