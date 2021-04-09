
const pad = (value) => String(value).padStart(2, "0");

const format = (time) => {
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = pad( Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  return { days, hours, mins, secs };
};

const moment = (time) => {
  return format(time);
};

export default moment;