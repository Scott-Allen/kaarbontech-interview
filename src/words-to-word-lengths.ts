/**
 * 1. Let's start simple - write a function which, given an array of words, returns an array containing the length of each word.
 * For example, given ['Hi','how','are','you','today'] it would return [2,3,3,3,5].
*/

const wordsToWordLengths = (words: string[]) : number[] => words.map(word => word && typeof word === 'string' ? word.length : 0);

export default wordsToWordLengths;