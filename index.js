function mergeSort(arr) {
  let midpoint = arr.length / 2;
  let firstHalf = arr.slice(0, midpoint);
  let secondHalf = arr.slice(midpoint, arr.length);

  if (arr.length < 2) {
    return arr;
  } else {
    return merge(mergeSort(firstHalf), mergeSort(secondHalf));
  }
}

function findMinAndRemoveSorted(arr) {
  let min = arr[0];
  let minIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
      minIndex = i;
    }
  }

  arr.splice(minIndex, 1);
  return min;
}

function merge(array1, array2) {
  let sortedArray = [];

  while (array1.length !== 0 && array2.length !== 0) {
    let min1 = array1[0];
    let min2 = array2[0];

    if (min1 < min2) {
      array1.splice(0, 1);
      sortedArray.push(min1);
    } else {
      array2.splice(0, 1);
      sortedArray.push(min2);
    }
  }

  return sortedArray.concat(array1).concat(array2);
}
