/*
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example:

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
*/

let maxSubArray = (nums: number[]): number => {
  for (let i = 1; i < nums.length; i += 1){
    // replace each element of the array to be the accumulated max sum at each iteration
    nums[i] = Math.max(nums[i], nums[i] + nums[i-1])
  }
  return Math.max(...nums)
}

console.log(maxSubArray([4, -1, -2, -3]))