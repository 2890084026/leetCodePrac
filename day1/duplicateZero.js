const arr = [1, 0, 2, 3, 0, 4, 5, 0];
const arr1 = [1, 0, 2, 3, 0, 4, 5];
const arr3 = [0, 0, 0, 0, 0, 0, 0];

function duplicateZeros(arr) {
  let des = 0;  // 已消费的槽位数
  let cur = 0;  // 最后处理的原始索引

  // 第一轮：找到截断位置
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      des += 1;
    } else {
      des += 2;
    }
    if (des >= arr.length) {
      cur = i;
      break;
    }
  }

  // 边界：最后一个 0 只能放一份拷贝
  if (des > arr.length) {
    arr[arr.length - 1] = 0;
    des = arr.length - 1;
    cur--;
  }

  // 第二轮：从后往前填充
  for (let i = cur; i >= 0; i--) {
    if (arr[i]) {
      arr[--des] = arr[i];
    } else {
      arr[--des] = 0;
      arr[--des] = 0;
    }
  }

  return arr;
}

// ============================================
// des = -1 版本：des 表示"结果数组最后填到的位置"
// ============================================
function duplicateZerosV2(arr) {
  let des = -1;  // 结果数组最后填充位置
  let cur = -1;  // 最后处理的原始索引

  // 第一轮：找到截断点
  for (let i = 0; i < arr.length; i++) {
    cur++;
    des += arr[i] ? 1 : 2;
    if (des >= arr.length - 1) break;
  }

  // 边界：最后一个 0 溢出一份，手动填到末尾
  if (des === arr.length) {
    arr[arr.length - 1] = 0;
    des = arr.length - 2;
    cur--;
  }

  // 第二轮：从后往前写
  for (let i = cur; i >= 0; i--) {
    if (arr[i]) {
      arr[des--] = arr[cur--];
    } else {
      arr[des--] = 0;
      arr[des--] = 0;
      cur--;
    }
  }

  return arr;
}

// ============================================
// 更优解：一次计数 + 一次倒序填充
// 核心思路：zeros 作为每个元素的"右移偏移量"，
// 从右往左处理时，遇到 0 就递减 zeros，
// 保证左侧元素不会再被这个 0 的右移影响。
// ============================================
function duplicateZerosBest(arr) {
  const n = arr.length;

  // 统计所有 0 的个数
  let zeros = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] === 0) zeros++;
  }

  // 从右往左写
  for (let i = n - 1; i >= 0; i--) {
    if (arr[i] === 0) {
      if (i + zeros < n) arr[i + zeros] = 0; // 复制的 0（靠右）
      zeros--;
      if (i + zeros < n) arr[i + zeros] = 0; // 原始的 0（靠左）
    } else {
      if (i + zeros < n) arr[i + zeros] = arr[i];
    }
  }

  return arr;
}

console.log(duplicateZeros(arr3));
console.log(duplicateZerosBest(arr3));

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
  arr[j] = arr.splice(i, 1, arr[j])[0];
}

function move(arr) {
  let des = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != 0) {
      des++;
      swap(arr, des, i);
    }
  }
  return arr;
}
move(arr);
console.log(arr, "ar11r");
