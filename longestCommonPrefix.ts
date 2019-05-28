/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
Note:

All given inputs are in lowercase letters a-z.
*/

let longestCommonPrefix = (strs: Array<string>): string => {
  if (strs.length !== 0) {
    let length: number[] = strs.map(item => item.length)
    let shortestWord: string = strs[length.indexOf(Math.min(...length))]
    // max length of common prefix is limited to shortest word
    let shortLength: number = shortestWord.length
    while (shortLength !== 0){
      // start with all the letters in the shortest word
      let prefix = shortestWord.slice(0, shortLength)
      // check every word in the input array, and if each word contains 'prefix' will return 0. if once, index = -1, answer = false
      let answer = strs.every(item => item.indexOf(prefix) === 0)
      // the shortest word will continue to be sliced 1 less letter at the end until answer = true 
      shortLength -= 1
      if (answer) {
        return prefix
      }
    }
  }
  return "" 
} 

console.log(longestCommonPrefix(["flower","flow","flight"]))