/*
  Convert the following volume calculating functions into arrow functions. Do not change the names of the functions.
*/

const calculateCubeVolume = (length) => length ** 3;

const calculateSphereVolume = (radius) => (4 / 3) * Math.PI * radius ** 3;

const calculateConeVolume = (radius, height) =>
  (1 / 3) * Math.PI * radius ** 2 * height;

const calculateCylinderVolume = (radius, height) =>
  Math.PI * radius ** 2 * height;

/////////////////////////////////////
// Do not edit anything below!
/////////////////////////////////////
module.exports = {
  calculateCubeVolume,
  calculateSphereVolume,
  calculateConeVolume,
  calculateCylinderVolume,
};
