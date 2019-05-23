// sorting where values at and left of starting index of each iteration is sorted  first
let insertionSort = (arr: number []): number[] => {
  // need to at least init j outside of for loop because 'let' doesnt allow hoisting and the for loop with i will not have access to variable j
  let i: number, j:number, currentVal: number;
  let arrLength = arr.length
  for (i = 1; i < arrLength; i += 1){
    // store the current value we are on and use to compare
    currentVal = arr[i]
    // j is one behind i. continue to compare value at j with currentVal, and keep shifting the value at j one over to right if its greater. When the value at j is no longer greater than current val, for loop stops
    for (j = i - 1; j >= 0 && arr[j] > currentVal; j -= 1){
      arr[j+1] = arr[j] 
    }
    // j is decremented to index where currentVal should be inserted right or one after
    arr[j+1] = currentVal;
  }
  return arr;
}

[5, 6, 4, 3, 2, 1]