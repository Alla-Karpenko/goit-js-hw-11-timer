import CountdownTimer from './timer'


function initTimer(selector, targetData) {
    const time = new CountdownTimer({ selector, targetDate })
    time.start()
}

export default initTimer