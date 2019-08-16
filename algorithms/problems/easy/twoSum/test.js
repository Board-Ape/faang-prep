import twoSumBruteForce from './solution';

describe('twoSumBruteForce', () => {

    it("should return invalid array", () => {
        expect(twoSumBruteForce('Hello', 26)).toEqual('Invalid array');
    });

    it("should return target must be a valid number'", () => {
        expect(twoSumBruteForce([], {})).toEqual('Target must be a valid number');
    });

    it("should return an empty array if the array is empty", () => {
        expect(twoSumBruteForce([], 26)).toEqual([]);
    });

    it("should produce the correct result if...", () => {
        expect(twoSumBruteForce([2, 7, 11, 15], 9)).toEqual([0,1]);
    });

    it("should produce the correct result if...", () => {
        expect(twoSumBruteForce([3, 2, 4], 6)).toEqual([1, 2]);
    });

    it("should produce the correct result if...", () => {
        expect(twoSumBruteForce([1, 2, 5, 5, 11], 10)).toEqual([2, 3]);
    });
    
})