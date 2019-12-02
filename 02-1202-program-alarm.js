const fs = require('fs');

const input = fs.readFileSync('./02-input', "utf8")
  .split(',')
  .map(val => parseInt(val));

const compute = (input) => {
  const result = input.slice();
  let index = 0;
  while (index < result.length) {
    const [opCode, arg1, arg2, arg3] = result.slice(index);
    if (opCode == 99) {
      return result;
    } else if (opCode == 1) {
      result[arg3] = result[arg1] + result[arg2];
    } else if (opCode == 2) {
      result[arg3] = result[arg1] * result[arg2];
    }
    index += 4; 
  }
  return result;
};

const withParameters = (verb, noun, input) => 
  [input[0], verb, noun, ...input.slice(3)];

console.log("Part 1: " + compute(withParameters(12, 2, input))[0]);

const findParameters = (input, desiredResult) => {
  for (let noun = 0; noun <= 99; noun++) {
    for (let verb = 0; verb <= 99; verb++) {
      const result = compute(withParameters(noun, verb, input))[0];
      if (result === desiredResult) return [noun, verb];
    }
  }
};

const [verb, noun] = findParameters(input, 19690720);
console.log(`Part 2: verb - ${verb}, noun - ${noun}, answer - ${100 * verb + noun}`);

module.exports = {
  input: input,
  compute: compute,
  withParameters: withParameters,
  findParameters: findParameters
};