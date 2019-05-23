let bubbleSort= (arr: number []): number[] => {
  let swap = (arr: number [], i: number, j: number)=> [arr[i], arr[j]] = [arr[j], arr[i]] 

  // init var to equal done to stop for loop when arr is done sorting early
  let done: boolean = true;
  let arrLength = arr.length
  for (let i = 0; i < arrLength; i += 1){
    for (let j = 0; j < arrLength; j += 1){
      if (arr[j] > arr[j+1]) {
        swap(arr, j, j+1)
        // set false if its still sorting at least once
        done = false
      }
    }
    if (done) break;
  }
  return arr;
}

console.log(bubbleSort([6,5,4,3,2,1]))