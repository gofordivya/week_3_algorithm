//Initialize the array:
//Define the Bubble Sort function:
//sort num in acsending order
// 2 for loop - outer and inner
// outer iteration throughh num, for i from 0 to n-1:
//inner loop : for comaprison and swapping , for j from 0 to n-i-1:
//if arr[j]>arr[j+1]: swap(arr[j+1],[j])
//assign names
//retuen value

function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        var smallNum = array[j];
        array[j] = array[j + 1];
        array[j + 1] = smallNum;
      }
    }
  }
  return array;
}

// example usage

console.log(bubbleSort([5, 1, 9, 4, 3]));
