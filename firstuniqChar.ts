/*
Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode",
return 2.
Note: You may assume the string contain only lowercase letters.
*/

let firstUniqChar = (s: string): number => {
  let tracker: object = {};
  let sLength = s.length
  let i: number;

  for (i = 0; i < sLength; i += 1){
    (tracker[s[i]])? tracker[s[i]] += 1 : tracker[s[i]] = 1
  }

  for (i = 0; i < sLength; i += 1){
    if (tracker[s[i]] === 1) return i;
  }
  return -1
}

console.log(firstUniqChar("leetcode"))