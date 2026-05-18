const arr = [5, 2, 9, 1, 5, 6]

// function insertSort(arr) {
//   let insertIndex = 0
//   let insertValue = 0
//   for (i = 1; i < arr.length; i++) {
//     insertIndex = i - 1
//     insertValue = arr[i]
//     while (insertIndex >= 0 && insertValue < arr[insertIndex]) {
//       arr[insertIndex + 1] = arr[insertIndex]
//       insertIndex--
//     }
//     if (insertIndex != i - 1) {
//         arr[insertIndex+1]=insertValue
//     }
//   }
//   return arr
// }

// function selectSort(arr) {
//   let minIndex = 0
//   let min = 0
//   for (i = 0; i < arr.length; i++) {
//     min = arr[i]
//     minIndex = i
//     for (j = i + 1; j < arr.length; j++) {
//       if (arr[j] < min) {
//         min = arr[j]
//         minIndex = j
//       }
//     }
//     if (minIndex != i) {
//       arr[minIndex] = arr[i]
//       arr[i] = min
//     }
//   }
//   return arr
// }
function bubble(arr) {
  let flag = false
  let temp = 0
  for (i = 0; i < arr.length - 1; i++) {
    for (j = 0; j < arr.length - i - 1; j++) {
      if (arr[j + 1] < arr[j]) {
        flag = true
        temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
    if (flag) {
      flag = false
    } else {
      break
    }
  }
  return arr
}
// selectSort(arr)
// console.log(arr,'22');

bubble(arr)
console.log(arr, 'arr')
