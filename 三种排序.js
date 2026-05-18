// 冒泡排序：将一个数组从前往后，依次比较相邻元素，如果逆序则交换，让较大的数字往后移动，实现冒泡一样的操作
const arr = [5, 2, 9, 1, 5, 6]
// function bubbleSort(arr) {
//   let flag = false
//   let temp
//   for (i = 0; i < arr.length - 1; i++) {
//     for (j = 0; j < arr.length - 1 - i; j++) {
//       if (arr[j + 1] < arr[j]) {
//         flag = true
//         temp = arr[j + 1]
//         arr[j + 1] = arr[j]
//         arr[j] = temp
//       }
//     }
//     if (flag) {
//       flag = false
//     } else {
//       break
//     }
//   }
//   return arr
// }
// const res = bubbleSort(arr)
// console.log(res)

// 选择排序：因为在排序的过程中所有的元素不断的接近正常的顺序，如果一趟比较下来之后没有发生交换，说明排序结束，可以提前结束比较。
// function selectSort(arr) {
//   for (i = 0; i < arr.length; i++) {
//     let min = arr[i]
//     let minIndex = i
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
// const resSelect = selectSort(arr)
// console.log(resSelect)

// 插入排序：将一个数组中最小的值选出来，然后让他跟当前项交换
function insertSort(arr) {
  let insertIndex = 0
  let insertValue = 0
  for (i = 1; i < arr.length; i++) {
    insertIndex = i - 1
    insertValue = arr[i]
    //// 这里注意inserIndex的条件需要<= 0

    while (insertIndex >= 0 && insertValue < arr[insertIndex]) {
      arr[insertIndex + 1] = arr[insertIndex]
      insertIndex--
    }
    if (insertIndex != i - 1) {
      arr[insertIndex + 1] = insertValue
    }
  }
  return arr
}
const insertRes = insertSort(arr)
console.log(insertRes)
