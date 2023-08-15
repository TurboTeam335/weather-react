export const getTemperatureColor = (temp, unit) => {
  if (unit === 'fahrenheit') {
    if (temp < -5) return '#e5eeff';
    if (temp < 10) return '#99b1d7';
    if (temp < 40) return '#294d7f'
    if (temp < 60) return '#759387'
    if (temp < 75) return '#bfa96d'
    if (temp < 80) return '#b7925e';
    if (temp < 90) return '#b37953'
    if (temp < 100) return '#a64c4c';
    if (temp < 110) return '#9e214c';
    return '#460f26';
  } else {
    if (temp < -20) return '#e5eeff';
    if (temp < -12) return '#99b1d7';
    if (temp < 4) return '#294d7f'
    if (temp < 15) return '#759387'
    if (temp < 23) return '#bfa96d'
    if (temp < 26) return '#b7925e';
    if (temp < 32) return '#b37953'
    if (temp < 38) return '#a64c4c';
    if (temp < 43) return '#9e214c';
    return '#460f26';
  }
};

export const getGradient = (minTemp, maxTemp, unit) => {
  const minColor = getTemperatureColor(minTemp, unit);
  const maxColor = getTemperatureColor(maxTemp, unit);

  return `linear-gradient(to right, ${minColor}, ${maxColor})`;
};
