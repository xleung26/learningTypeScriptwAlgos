/*
Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

Example:

Input:  [1,2,3,4]
Output: [24,12,8,6]
Note: Please solve it without division and in O(n).

Follow up:
Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)
*/

let productExceptSelf = (arr: number[]): number[] => {
  let results: number[] = []
  let productLeft: number = 1
  let arrLength = arr.length

  for (let i = 0; i < arrLength; i += 1){
    results[i] = productLeft
    productLeft *= arr[i]
  }

  let productRight: number = 1
  for (let i = arrLength - 1; i >= 0; i -= 1){
    results[i] *= productRight
    productRight *= arr[i]
  }
  return results;
}

console.log(productExceptSelf([1,2,3,4]))