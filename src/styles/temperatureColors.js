export const getTemperatureColor = (temp, unit) => {
  if (unit === 'fahrenheit') {
    if (temp < -20) return '#2b276a';
    if (temp < -5) return '#323c9e';
    if (temp < 0) return '#3b4ad1';
    if (temp < 10) return '#4775d4';
    if (temp < 15) return '#5296e4';
    if (temp < 20) return '#66a2e8';
    if (temp < 40) return '#84b63a';
    if (temp < 56) return '#8ec547'; 
    if (temp < 72) return '#94bd50';
    if (temp < 77) return '#b4c92b';
    if (temp < 82) return '#e0a331';
    if (temp < 86) return '#e89331';
    if (temp < 92) return '#e56d25'; 
    return '#8c2e15';
  } else {
    if (temp < -29) return '#2b276a';
    if (temp < -21) return '#323c9e';
    if (temp < -18) return '#3b4ad1';
    if (temp < -12) return '#4775d4';
    if (temp < -9) return '#5296e4';
    if (temp < -7) return '#66a2e8';
    if (temp < 4) return '#84b63a';
    if (temp < 13) return '#8ec547'; 
    if (temp < 22) return '#94bd50';
    if (temp < 25) return '#b4c92b';
    if (temp < 28) return '#e0a331';
    if (temp < 30) return '#e89331';
    if (temp < 33) return '#e56d25'; 
    return '#8c2e15';
  }
};

export const getGradient = (minTemp, maxTemp, unit) => {
  const minColor = getTemperatureColor(minTemp, unit);
  const maxColor = getTemperatureColor(maxTemp, unit);

  return `linear-gradient(to right, ${minColor}, ${maxColor})`;
};
