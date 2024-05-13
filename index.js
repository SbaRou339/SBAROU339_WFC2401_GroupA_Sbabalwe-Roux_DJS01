/**
 * debugging Guidelines
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const initialVelocity = 10000; // initialVelocity (km/h)
let acceleration = 3; // acceleration (m/s^2)
const time = 3600; // seconds (1 hour)
const initialDistance = 0; // initialDistance (km)
const fuel = 5000; // remaining fuel (kg)
const fuelBurnRate = 0.5; // fuel burn rate (kg/s)

acceleration *= 3.6;

// Calculate remaining fuel
const calcRemainingFuel = (fuel, fuelBurnRate, time) => {
  let usedFuel = 0;
  if (
    typeof fuel !== "number" ||
    typeof fuelBurnRate !== "number" ||
    typeof time !== "number"
  ) {
    throw new Error(
      "Invalid input. Please provide numeric values for fuel, fuel burn rate, and time."
    );
  } else {
    usedFuel = fuelBurnRate * time;
    return fuel - usedFuel;
  }
};

// Pick up an error with how the function below is called and make it robust to such errors
const calcNewVelocity = (acceleration, initialVelocity, time) => {
  let v = 0;
  if (
    typeof initialVelocity !== "number" ||
    typeof acceleration !== "number" ||
    typeof time !== "number"
  ) {
    throw new Error(
      "Invalid input. Please provide numeric values for velocity, acceleration, and time."
    );
  }
  if (acceleration === 3) {
    throw new Error("You still have to convert acceleration!!");
  } else {
    v = acceleration * time;
    return initialVelocity + v;
  }
};

const calcNewDistance = (initialVelocity, time) => {
  return initialVelocity * (time / 3600);
};

const newDistance = initialDistance + calcNewDistance(initialVelocity, time); //calculates new distance
const remainingFuel = calcRemainingFuel(fuel, fuelBurnRate, time); //calculates remaining fuel
const newVelocity = calcNewVelocity(acceleration, initialVelocity, time); //calculates new Velocity based on acceleration

console.log(`Corrected New velocity: ${newVelocity} km/h`);
console.log(`Corrected New Distance: ${newDistance} km`);
console.log(`Corrected Remaining Fuel: ${remainingFuel} kg`);
