/*
Given a string, find the length of the longest substring without repeating characters.

Example 1:

Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3. 
Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3. 
             Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/


let longestSubstringWORepeat = (s: string): number => {
  let start: number = 0;
  let longest: number = 0;
  let tracker = {}
  let sLength: number = s.length
  for (let i = 0; i < sLength; i += 1){
    let seen: string = s[i]
    // first check if char seen. if yes then start count will be equal to where the last char was seen
    if (tracker[seen]) start = Math.max(start, tracker[seen])
    // value for key is the arr index plus one to contribute to the count for longest count
    tracker[seen] = i + 1
    // longest is current position - start
    longest = Math.max(longest, tracker[seen] - start)
  }
  return longest;
}

console.log(longestSubstringWORepeat('abcabcgh'))