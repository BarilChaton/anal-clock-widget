// Gradient position calculations based on time of day helper functions

export function calculateGradientPosition(hours) {
  const isDaytime = hours >= 6 && hours < 18;
  return isDaytime ? (hours - 6) * (100 / 12) : ((hours - 18) % 12) * (100 / 12);
}

export function calculateStartColor(hours) {
  if (hours >= 0 && hours < 6) {
    return '#000000'; // Night
  } else if (hours >= 6 && hours < 18) {
    return '#FFCC00'; // Day
  } else {
    return '#FF6600'; // Dawn/Dusk
  }
}

export function calculateEndColor(hours) {
  if (hours >= 0 && hours < 6) {
    return '#000033'; // Night
  } else if (hours >= 6 && hours < 18) {
    return '#FFFF99'; // Day
  } else {
    return '#FF9933'; // Dawn/Dusk
  }
}