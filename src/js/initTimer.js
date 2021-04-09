
import CountdownTimer from "./timer";

const initTimer = (selector, targetDate) => {
  const newTimer = new CountdownTimer({ selector, targetDate });
  newTimer.start();
};

export default initTimer;