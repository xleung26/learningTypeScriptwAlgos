/*
Given an array of strings, group anagrams together.

Example:

Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
Note:

All inputs will be in lowercase.
The order of your output does not matter.
*/

let groupAnagrams = (strs: Array<string>): Array<Array<string>> => {
  let map: object = {}
  let i: number
  let strsLength = strs.length;
  for (i = 0; i < strs.length; i += 1){
    let sortedStr = strs[i].split("").sort().join("")
    if (!map[sortedStr]){
      map[sortedStr] = []
    }
    if (map[sortedStr]) {
      map[sortedStr].push(strs[i])
    }
  }
  return Object.values(map)
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))