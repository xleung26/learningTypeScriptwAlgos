let selctionSort = (arr: number[]): number[] => {
  let swap = (arr: number[], i: number, j: number) => [arr[i], arr[j]] =[arr[j], arr[i]]
  let min: number;
  let arrLength = arr.length
  for (let i = 0; i < arrLength; i += 1){
    min = i
    // j start at i + 1 because elements on the left is already sorted after each i iteration (the next min will be swapped to the left in order)
    for (let j = i + 1; j < arrLength; j += 1){
      if (arr[min] > arr[j]) min = j
    }
    if (min !== i) swap(arr, i, min)
  }
  return arr;
}

console.log(selctionSort([6,5,4,3,2,1]))