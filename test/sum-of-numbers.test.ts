
import sumOfNumbers from "../src/sum-of-numbers";

describe('src/sum-of-numbers', () => {
  describe("GIVEN an array with multiple numbers", () => {
    const testInput: number[] =  [1,2,3];

    describe("WHEN ran through sumOfNumbers function", () => {
      const result = sumOfNumbers(testInput)
      test('It should return the sum of the numbers', () => {
        expect(result).toEqual(6)
      });
    });
  });

  describe("GIVEN an empty array", () => {
    const testInput: number[] = [];

    describe("WHEN ran through sumOfNumbers function", () => {
      const result = sumOfNumbers(testInput)
      test('It should return 0', () => {
        expect(result).toEqual(0)
      });
    });
  });
  
  describe("GIVEN array containing undefined value", () => {
    const testInput: any[] = [5, 8, undefined, 2];

    describe("WHEN ran through sumOfNumbers function", () => {
      const result = sumOfNumbers(testInput)
      /**https://www.digitalocean.com/community/tutorials/setting-up-a-node-project-with-typescript
       * This would be my default approach given current information, rather than throwing an error.
       */
      test('It should ignore undefined value', () => {
        expect(result).toEqual(15)
      });
    });
  });
});

