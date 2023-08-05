// Funkcje pomocnicze do kalkulacji czasu dnia i ustavienia gradientu zaleznie of godziny

export function calculateGradientPosition(hours) {
  // Kalkulacja pozycji gradientu w zaleznosci od czasu dnia
  const isDaytime = hours >= 6 && hours < 18;
  return isDaytime ? (hours - 6) * (100 / 12) : ((hours - 18) % 12) * (100 / 12);
}

export function calculateStartColor(hours) {
  if (hours >= 0 && hours < 6) {
    return '#000000'; // Noc
  } else if (hours >= 6 && hours < 18) {
    return '#FFCC00'; // Dzien
  } else {
    return '#FF6600'; // Wieczor
  }
}

export function calculateEndColor(hours) {
  if (hours >= 0 && hours < 6) {
    return '#000033'; // Noc
  } else if (hours >= 6 && hours < 18) {
    return '#FFFF99'; // Dzien
  } else {
    return '#FF9933'; // Wieczor
  }
}