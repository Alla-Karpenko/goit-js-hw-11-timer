class CountdownTimer {
    constructor ( selector, targetDate ) {
        this.selector = selector;
        this.targetDate = new Date( targetDate );
        this.timer = this.timer.bind( this );
    };
    timer () {
        const day = document.querySelector( "[data-value='days']" );
        const hour = document.querySelector( "[data-value='hours']" );
        const minute = document.querySelector( "[data-value='mins']" );
        const second = document.querySelector("[data-value='secs']");
        
        const currentDate = Date.now();
        this.time = this.targetDate - currentDate;

        const days = Math.floor( this.time / ( 1000 * 60 * 60 * 24 ) );
        const hours = Math.floor( ( this.time % ( 1000 * 60 * 60 * 24 ) ) / ( 1000 * 60 * 60 ) );
        const mins = Math.floor( ( this.time % ( 1000 * 60 * 60 ) ) / ( 1000 * 60 ) );
        const secs = Math.floor( ( this.time % ( 1000 * 60 ) ) / 1000 );
        
        day.textContent = pad(days);
        hour.textContent = pad(hours);
        minute.textContent = pad(mins);
        second.textContent = pad(secs);

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


