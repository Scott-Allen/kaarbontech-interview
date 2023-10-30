
import wordsToWordLengths from "../src/words-to-word-lengths";

describe('src/words-to-word-lengths', () => {
  describe("GIVEN an array with multiple words", () => {
    const testInput: string[] =  ['Hi','how','are','you','today'];

    describe("WHEN ran through wordsToWordLengths function", () => {
      const result = wordsToWordLengths(testInput)
      test('It should return word lengths', () => {
        expect(result).toEqual([2,3,3,3,5])
      });
    });
  });

  describe("GIVEN an empty array", () => {
    const testInput: string[] = [];

    describe("WHEN ran through wordsToWordLengths function", () => {
      const result = wordsToWordLengths(testInput)
      test('It should return an emopty array', () => {
        expect(result).toEqual([])
      });
    });
  });
  
  describe("GIVEN array containing undefined value", () => {
    const testInput: any[] = ["bob", "steven", undefined, "sarah"];

    describe("WHEN ran through wordsToWordLengths function", () => {
      const result = wordsToWordLengths(testInput)
      /**
      * This would be my default approach given current information, rather than throwing an error.
      */
      test('It should return 0 for undefined value', () => {
        expect(result).toEqual([3,6,0,5])
      });
    });
  });
});

