// TODO: add notes 

let pivot = (arr: number[], start: number = 0, end: number = arr.length -1):number => {
  let swap =  (arr: number[], i: number, j: number) => [arr[i], arr[j]] = [arr[j], arr[i]]
  let pivot = arr[start]
  let swapId: number = start

  for (let i = start + 1; i <= end; i += 1){
    if (pivot > arr[i]) {
      swapId += 1
      swap(arr, swapId, i)
    }
  }

  swap(arr, start, swapId)
  return swapId
}

let quickSort = (arr: number [], left: number = 0, right: number = arr.length - 1): number[] => {
  if (left < right){
    let pivotId: number = pivot(arr, left, right)
    quickSort(arr, left, pivotId - 1) 
    quickSort(arr, pivotId + 1, right) 
  }
  return arr;
}

console.log(quickSort([4, 6, 9, 1, 2, 5]))
