const { compute, withParameters, findParameters } = require('./02-1202-program-alarm');

describe('02 - 1202 program alarm', () => {

  describe('part one', () => {

    it('can add', () => {
      const input = [1,0,0,0,99];
      const result = [2,0,0,0,99];
      expect(compute(input)).toStrictEqual(result);
    });

    it('can multiply', () => {
      const input = [2,3,0,3,99];
      const result = [2,3,0,6,99];
      expect(compute(input)).toStrictEqual(result);
    });

    it('can add beyond position 4', () => {
      const input = [2,4,4,5,99,0];
      const result = [2,4,4,5,99,9801];
      expect(compute(input)).toStrictEqual(result);
    });

    it('can handle two operations', () => {
      const input = [1,1,1,4,99,5,6,0,99];
      const result = [30,1,1,4,2,5,6,0,99];
      expect(compute(input)).toStrictEqual(result);
    });

  });

});