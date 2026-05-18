const arr = [1, 0, 2, 3, 0, 4, 5, 0]
const arr1 = [1, 0, 2, 3, 0, 4, 5]
// function duplicateZero(arr) {
//   let des = -1
//   let cur = -1
//   for (i = 0; i < arr.length; i++) {
//     cur++
//     if (arr[i]) {
//       des++
//     } else {
//       des += 2
//     }
//     if (des >= arr.length - 1) {
//       break
//     }
//   }
//   for (i = cur; i >= 0; i--) {
//     if (arr[i]) {
//       arr[des--] = arr[cur--]
//     } else {
//       arr[des--] = 0
//       arr[des--] = 0
//       cur--
//     }
//   }
//   return arr
// }

// duplicateZero(arr)

// duplicateZero(arr1)
// console.log(arr, 'duparr', arr1)

// function swap(arr, i, j) {
//   arr[j] = arr.splice(i, 1, arr[j])[0]
// }

// function move(arr) {
//   let des = -1
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i]) {
//       des++
//       swap(arr, i, des)
//     }
//   }
//   return arr
// }

// move(arr)
// console.log(arr, 'arr3')

// const arr = [0, 1, 0, 3, 12]
// 题目要求：将所有0移动到数组末尾l
function swap(arr, i, j) {
  arr[j] = arr.splice(i, 1, arr[j])[0]
}

function move(arr) {
  let des = -1
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != 0) {
      des++
      swap(arr, des, i)
    }
  }
  return arr
}
move(arr)
console.log(arr, 'ar11r')
