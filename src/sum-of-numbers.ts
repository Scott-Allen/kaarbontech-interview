/**
 * 2. Also nice and simple - write a function which, given an array of numbers, returns the sum of all the numbers.
 * For example, given [1,2,3] it would return 6.
 */

const sumOfNumbers = (numbers: number[]) : number => numbers.reduce((acc, curr) => (curr && typeof curr === 'number')  ? acc+curr : acc,0);

export default sumOfNumbers;