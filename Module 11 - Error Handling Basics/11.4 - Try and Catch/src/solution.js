function getCarColor(car) {
  try {
    return car.color;
  } catch (error) {
    return 'Color unknown';
  }
}

//do not remove
module.exports = getCarColor;
