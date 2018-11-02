function findMinAndRemoveSorted(array) {
  let min = array[0];
  let minIndex = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
      minIndex = i;
    }
  }
  array.splice(minIndex, 1);
  return min;
}

function merge(firstArray, secondArray) {
  let mergedArray = [];
  while (firstArray.length > 0 && secondArray.length > 0) {
    let firstMin = firstArray[0];
    let secondMin = secondArray[0];
    if (firstMin < secondMin) {
      mergedArray.push(firstArray.shift());
    } else {
      mergedArray.push(secondArray.shift());
    }
  }
  return mergedArray.concat(firstArray).concat(secondArray);
}

function mergeSort(array) {
  let midpoint = array.length / 2;
  let firstHalf = array.slice(0, midpoint);
  let secondHalf = array.slice(midpoint, array.length);
  if (array.length > 1) {
    return merge(mergeSort(firstHalf), mergeSort(secondHalf));
  } else {
    return array;
  }
}
