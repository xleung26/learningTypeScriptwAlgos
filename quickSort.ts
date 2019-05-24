// helper function that helps sort
let pivot = (arr: number[], start: number = 0, end: number = arr.length -1):number => {
  let swap =  (arr: number[], i: number, j: number) => [arr[i], arr[j]] = [arr[j], arr[i]]
  let pivot = arr[start]
  let swapId: number = start

  for (let i = start + 1; i <= end; i += 1){
    // find elements smaller than the pivot (arr[0]) and then swap it to the left
    if (pivot > arr[i]) {
      swapId += 1
      swap(arr, swapId, i)
    }
  }
  // swapId (at this point) is the index referencing the last elment found that is smaller than pivot
    // swap the element with pivot
    // now elements to left of pivot are smaller than pivot, though not ordered. same for the right side, but elements are larger.
  swap(arr, start, swapId)
  // now the element at the swapId is at the correct position in the arr (no need to swap/shift anymore at this position/index)
  return swapId
}

let quickSort = (arr: number [], left: number = 0, right: number = arr.length - 1): number[] => {
  if (left < right){
    // sort arr with pivot function by moving elements smaller than pivot to the left and elements larger to the right
    let pivotId: number = pivot(arr, left, right)
    // continue to sort arr, but only to the left of the pivotId
    quickSort(arr, left, pivotId - 1) 
    // continue to sort arr, but only to the right of the pivotId
    quickSort(arr, pivotId + 1, right) 
  }
  return arr;
}

console.log(quickSort([4, 6, 9, 1, 2, 5]))
