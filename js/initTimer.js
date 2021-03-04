import CountdownTimer from '.timer'


function initTimer(selector, targetDate) {
    const time = new CountdownTimer({ selector, targetDate })
    time.start()
}

export default initTimer