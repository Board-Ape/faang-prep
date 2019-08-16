/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/

// Brute force attempt

const twoSumBruteForce = function (nums, target) {
    if (typeof nums !== 'object') {
        return 'Invalid array'
    }
    // Numbers could also be negative and valid
    // Do we want to handle decimal values
    if (typeof target !== 'number') {
        return 'Target must be a valid number'
    }

    let result = [];

    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                result.push(i);
                result.push(j);
                return result
            }
        }
    }

    return result
};

export default twoSumBruteForce;