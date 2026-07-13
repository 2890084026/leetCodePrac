// ============================================================
// LeetCode 704. 二分查找 (Binary Search)
// ============================================================
// 条件：升序数组，无重复元素。搜索 target，返回下标，不存在返回 -1。
// 方法：二分查找。
// 时间：O(log n)  空间：O(1)
// ============================================================
// log n 的含义：每次砍掉一半，数据量翻倍只多查一次。
//   n=8     → 最多 3 次
//   n=16    → 最多 4 次
//   n=1024  → 最多 10 次
//   n=1 亿  → 最多 27 次
// ============================================================

function search(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    //           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    //           注意：是 (left + right) / 2，不是 (right - left) / 2
    //           (right - left) / 2 丢了 left 偏移，当 left > 0 时会算错

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;   // target 在右边
    } else {
      right = mid - 1;  // target 在左边
    }
  }

  return -1;
}

// ----------------------------------------------------------
// 图解：
//
// nums = [-1, 0, 3, 5, 9, 12], target = 9
//
// [ -1,  0,  3,  5,  9, 12 ]    left=0, right=5
//   ↑            ↑         ↑
//  left         mid      right
// nums[2]=3 < 9 → left = 3
//
//               [ 5,  9, 12 ]    left=3, right=5
//                 ↑   ↑    ↑
//               left mid right
// nums[4]=9 === target → 返回 4 ✅
// ----------------------------------------------------------

// ============================================================
// 三个容易写错的点
// ============================================================
// 1. mid 计算：Math.floor((left + right) / 2)，不是 (right - left) / 2
// 2. 循环条件：left <= right（不是 left < right），否则单元素时直接跳过
// 3. 边界更新：left = mid + 1 / right = mid - 1（不是 mid），否则可能死循环

// ============================================================
// 左闭右闭 [left, right]  vs  左闭右开 [left, right)
// ============================================================
// 上面是 [left, right] 写法（最常用），下面是 [left, right) 写法：

function search2(nums, target) {
  let left = 0;
  let right = nums.length;  // 注意：right 初始化为 length，不是 length-1

  while (left < right) {    // 注意：left < right，不是 left <= right
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid;          // 注意：right = mid，不是 mid - 1
    }
  }

  return -1;
}

// ============================================================
// 测试
// ============================================================
console.log('704. 二分查找:');
console.log('  [-1,0,3,5,9,12], target=9  →', search([-1, 0, 3, 5, 9, 12], 9));  // 4
console.log('  [-1,0,3,5,9,12], target=2  →', search([-1, 0, 3, 5, 9, 12], 2));  // -1
console.log('  [5], target=5              →', search([5], 5));                    // 0
console.log('  [5], target=-5             →', search([5], -5));                   // -1
