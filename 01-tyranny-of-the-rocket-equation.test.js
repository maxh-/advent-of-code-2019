const { 
  calculateFuel, 
  calculateFuelRecursive, 
  calculateTotalFuel 
} = require('./01-tyranny-of-the-rocket-equation');

describe('01 - the tyranny of the rocket equation', () => {

  describe('part one', () => {

    it('can calculate fuel from mass', () => {
      const fuel = calculateFuel(1969);
      expect(fuel).toBe(654);
    });
  
    it('can calculate total fuel requirements', () => {
      const fuel = calculateTotalFuel([12, 14, 1969, 100756], calculateFuel);
      expect(fuel).toBe(2 + 2 + 654 + 33583);
    });  

  });

  describe('part two', () => {

    it('counts negative fuel requirement as zero', () => {
      const fuel = calculateFuel(1);
      expect(fuel).toBe(0);
    });

    it('can calculate fuel from mass recursively', () => {
      const fuel = calculateFuelRecursive(14);
      expect(fuel).toBe(2);
    });

    it('can calculate total fuel requirements recursively', () => {
      const masses = [14, 1969, 100756];
      const fuel = calculateTotalFuel(masses, calculateFuelRecursive);
      expect(fuel).toBe(2 + 966 + 50346);
    });

  });

});