/*
Count the number of prime numbers less than a non-negative number, n.

Example:

Input: 10
Output: 4
Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
*/

let countPrimes = (n: number): number => {
  let tracker: number[] = []
  let count:number = 0
  for (let i = 2; i < n; i += 1){
    if (!tracker[i]){
      tracker[i] = 1
      count += 1
    } 
    let j:number = i
    while (j * i <= n) {
      tracker[i*j] = 1
      j += 1
    }
  }
  return count;
}

console.log(countPrimes(10))