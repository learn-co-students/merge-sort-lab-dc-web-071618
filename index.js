function findMinAndRemoveSorted(array) {
  let min = array[0];
  let minIdx = 0;
  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
      minIdx = i;
    }
  }
  array.splice(minIdx, 1);
  return min;
}

function merge(array1, array2) {
  let mergedArray = [];
  while (array1.length > 0 && array2.length > 0) {
    let min1 = array1[0];
    let min2 = array2[0];
    if (min1 < min2) {
      mergedArray.push(array1.shift());
    } else {
      mergedArray.push(array2.shift());
    }
  }
  return mergedArray.concat(array1).concat(array2);
}

function mergeSort(array) {
  let midIdx = array.length / 2;
  let subArr1 = array.slice(0, midIdx);
  let subArr2 = array.slice(midIdx, array.length);

  if (array.length > 1) {
    return merge(mergeSort(subArr1), mergeSort(subArr2));
  } else {
    return array;
  }
}
