"use strict";

// 239. 滑动窗口最大值
// 尝试过
// 困难
// 相关标签
// premium lock icon
// 相关企业
// 提示
// 给你一个整数数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。
// 返回 滑动窗口中的最大值 。
// 示例 1：
// 输入：nums = [1,3,-1,-3,5,3,6,7], k = 3
// 输出：[3,3,5,5,6,7]
// 解释：
// 滑动窗口的位置                最大值
// ---------------               -----
// [1  3  -1] -3  5  3  6  7       3
//  1 [3  -1  -3] 5  3  6  7       3
//  1  3 [-1  -3  5] 3  6  7       5
//  1  3  -1 [-3  5  3] 6  7       5
//  1  3  -1  -3 [5  3  6] 7       6
//  1  3  -1  -3  5 [3  6  7]      7
// 示例 2：
// 输入：nums = [1], k = 1
// 输出：[1]
var nums = [1, 3, -1, -3, 5, 3, 6, 7],
    k = 3; // 我的暴力解法，时间复杂度O(n*k)，空间复杂度O(n-k+1)
// var maxSlidingWindow = function (nums, k) {
//   let curstart = 0,
//     res = [];
//   while (k <= nums.length) {
//     let max = -Infinity;
//     for (i = curstart; i < k; i++) {
//       if (nums[i] > max) {
//         max = nums[i];
//       }
//     }
//     res.push(max);
//     k++;
//     curstart++;
//   }
//   return res;
// };
// var maxSlidingWindow = function (nums, k) {
//   const res = [];
//   const deque = []; // 存储下标，单调递减
//   for (let i = 0; i < nums.length; i++) {
//     // 1. 移除队尾所有小于当前值的元素
//     while (deque.length && nums[i] >= nums[deque[deque.length - 1]]) {
//       deque.pop();
//     }
//     deque.push(i);
//     // 2. 队首下标超出窗口范围，移除
//     while (deque[0] <= i - k) {
//       deque.shift();
//     }
//     // 3. 形成完整窗口后记录最大值
//     if (i >= k - 1) {
//       res.push(nums[deque[0]]);
//     }
//   }
//   return res;
// };
// 错误示例：  nums=[7,2,4] 会出错，因为当窗口移动到 [2,4] 时，队列中仍然保留了 7 的值，导致结果错误

var maxSlidingWindow = function maxSlidingWindow(nums, k) {
  var res = [];
  var deque = []; // 存储下标，单调递减

  for (var i = 0; i < nums.length; i++) {
    // 1. 移除队尾所有小于当前值的元素
    while (deque.length && nums[i] >= deque.at(-1)) {
      deque.pop();
    }

    deque.push(nums[i]); // 2. 队首下标超出窗口范围，移除

    while (deque.length > k) {
      deque.shift();
    } // 3. 形成完整窗口后记录最大值


    if (i >= k - 1) {
      res.push(deque[0]);
    }
  }

  return res;
};

console.log(maxSlidingWindow(nums, k));