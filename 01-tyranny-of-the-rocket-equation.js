const fs = require('fs');

const calculateFuel = (mass) => {
  const requiredFuel = Math.floor(mass / 3) - 2;
  return requiredFuel > 0 ? requiredFuel : 0;
};

const calculateFuelRecursive = (mass, acc = 0) => {
  if (mass === 0) return acc;
  const fuel = calculateFuel(mass);
  return calculateFuelRecursive(fuel, acc + fuel);
};

const calculateTotalFuel = (masses, fuelCalcFun) => {
  const fuelRequirements = masses.map(val => fuelCalcFun(val));
  const totalFuel = fuelRequirements.reduce((a, b) => a + b);
  return totalFuel;
};

const solve = (inputFile, fuelCalcFun) => {
  const inputFileContents = fs.readFileSync(inputFile, "utf8");
  const masses = inputFileContents.split('\n').map(val => parseInt(val));
  const result = calculateTotalFuel(masses, fuelCalcFun);
  return result;
};

console.log("Part one: " + solve('./01-input', calculateFuel));
console.log("Part two: " + solve('./01-input', calculateFuelRecursive));

module.exports = {
  calculateFuel: calculateFuel,
  calculateTotalFuel: calculateTotalFuel,
  calculateFuelRecursive: calculateFuelRecursive
};