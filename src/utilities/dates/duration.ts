const SECONDS_PER_MINUTE = 60;
const MINUTES_PER_HOUR = 60;
const SECONDS_PER_HOUR = SECONDS_PER_MINUTE * MINUTES_PER_HOUR;
const HOURS_PER_DAY = 24;
const SECONDS_PER_DAY = SECONDS_PER_HOUR * HOURS_PER_DAY;

export function formatDuration(durationSeconds: number): string {
  let days = 0;
  let hours = 0;
  let minutes = 0;
  let seconds = 0;

  let remainder = durationSeconds;

  while (remainder >= SECONDS_PER_DAY) {
    days += 1;
    remainder -= SECONDS_PER_DAY;
  }

  while (remainder >= SECONDS_PER_HOUR) {
    hours += 1;
    remainder -= SECONDS_PER_HOUR;
  }

  while (remainder >= SECONDS_PER_MINUTE) {
    minutes += 1;
    remainder -= SECONDS_PER_MINUTE;
  }

  seconds = remainder;

  if (days > 0) {
    // if duration >= 24 hours: return as number of days, number of hours
    return `${days} ${pluralize('day',days)}${hours > 0 ? `, ${hours} ${pluralize('hour', hours)}` : ""}`;
  } else if (hours > 0) {
    // if duration < 24hr: return as number of hours, number of minutes
    return `${hours} ${pluralize('hour', hours)}${minutes > 0 ? `, ${minutes} ${pluralize('minute', minutes)}` : ""}`;
  } else if (minutes > 0) {
    // if duration < 60m, return as number of minutes
    return `${minutes} ${pluralize('minute', minutes)}`;
  } else {
    // if duration < 60s, return as <1m
    return `${seconds} ${pluralize('second', seconds)}`;
  }
}

function pluralize(singular: string, count: number): string {
    if ([0, 1].includes(count)) {
        return singular;
    }

    return {
        day: 'days',
        hour: 'hours',
        minute: 'minutes',
        second: 'seconds',
    }[singular] || '';
}
