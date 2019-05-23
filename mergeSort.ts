// init arr version
let merge = (left: number[],  right: number[]):number[] => {
  let result: number[] = []
  let leftPoint: number = 0
  let rightPoint: number = 0
  let leftLength = left.length
  let rightLength = right.length

  while (leftPoint < leftLength && rightPoint < rightLength){
    if (left[leftPoint]  < right[rightPoint]){
      result.push(left[leftPoint])
      leftPoint += 1
    } else {
      result.push(right[rightPoint])
      rightPoint += 1
    }
  }
  // rest of code takes care of the leftovers if input arrays have different arr length 
  while (leftPoint < leftLength){
    result.push(left[leftPoint])
    leftPoint += 1
  }

  while (rightPoint < rightLength){
    result.push(right[rightLength])
    rightPoint += 1
  }

  return result;
}

let mergeSort = (arr: number[]): number[] => {
  // base case
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length/2)
  // keep splitting up the array input on the left until each element is an array with length of 1
  let left = mergeSort(arr.slice(0, mid))
  // keep splitting up the array input on the right until each element is an array with length of 1  
  let right = mergeSort(arr.slice(mid))
  // helper function to sort the array of numbers
  return merge(left, right);
}

console.log(mergeSort([6,5,4,3,2,1]))
