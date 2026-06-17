"use strict";

var arr = [1, 0, 2, 3, 0, 4, 5, 0];
var arr1 = [1, 0, 2, 3, 0, 4, 5];
var arr3 = [0, 0, 0, 0, 0, 0, 0];

function duplicateZeros(arr) {
  var des = 0; // 已消费的槽位数

  var cur = 0; // 最后处理的原始索引
  // 第一轮：找到截断位置

  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      des += 1;
    } else {
      des += 2;
    }

    if (des >= arr.length) {
      cur = i;
      break;
    }
  } // 边界：最后一个 0 只能放一份拷贝


  if (des > arr.length) {
    arr[arr.length - 1] = 0;
    des = arr.length - 1;
    cur--;
  } // 第二轮：从后往前填充


  for (var _i = cur; _i >= 0; _i--) {
    if (arr[_i]) {
      arr[--des] = arr[_i];
    } else {
      arr[--des] = 0;
      arr[--des] = 0;
    }
  }

  return arr;
}

console.log(duplicateZeros(arr3)); // duplicateZero(arr1)
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
  arr[j] = arr.splice(i, 1, arr[j])[0];
}

function move(arr) {
  var des = -1;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] != 0) {
      des++;
      swap(arr, des, i);
    }
  }

  return arr;
}

move(arr);
console.log(arr, "ar11r");