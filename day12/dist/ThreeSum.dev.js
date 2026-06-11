"use strict";

// 15. 三数之和
// 中等
// 相关标签
// premium lock icon
// 相关企业
// 提示
// 给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k ，同时还满足 nums[i] + nums[j] + nums[k] == 0 。请你返回所有和为 0 且不重复的三元组。
// 注意：答案中不可以包含重复的三元组。
// 示例 1：
// 输入：nums = [-1,0,1,2,-1,-4]
// 输出：[[-1,-1,2],[-1,0,1]]
// 解释：
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0 。
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0 。
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0 。
// 不同的三元组是 [-1,0,1] 和 [-1,-1,2] 。
// 注意，输出的顺序和三元组的顺序并不重要。
// 示例 2：
// 输入：nums = [0,1,1]
// 输出：[]
// 解释：唯一可能的三元组和不为 0 。
// 示例 3：
// 输入：nums = [0,0,0]
// 输出：[[0,0,0]]
// 解释：唯一可能的三元组和为 0 。
// function threeSum(nums) {
//   let sortednums = nums.sort((a, b) => a - b)
//   let res = []
//   for (i = 0; i < sortednums.length; i++) {
//     if (sortednums[i] == sortednums[i - 1]) continue
//     let left = i + 1, ////这里左指针必须等i+1 确保三个数据分别取自数组不同位置
//       right = sortednums.length - 1
//     sum = sortednums[left] + sortednums[right] + sortednums[i]
//     while (left < right) {
//       if (sum > 0) {
//         right--
//       } else if (sum < 0) {
//         left++
//       } else {
//         res.push([nums[i], nums[left], nums[right]])
//         while (left < right && nums[left] == nums[left + 1]) left++   ////这里要注意left的下一项是left+1
//         while (left < right && nums[right] == nums[right - 1]) right--////right的下一项是right--
//         left++
//         right--
//       }
//     }
//   }
//   return res
// }
var threeSum = function threeSum(nums) {
  var len = nums.length;
  var res = [];
  nums.sort(function (a, b) {
    return a - b;
  });
  console.log(nums, 'nums');

  for (i = 0; i < len; i++) {
    if (nums[i] == nums[i - 1]) continue;
    var left = i + 1,
        right = len - 1;

    while (left < right) {
      var sum = nums[i] + nums[left] + nums[right];

      if (sum > 0) {
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        res.push([nums[i], nums[left], nums[right]]);

        while (left < right && nums[left] == nums[left + 1]) {
          left++;
        }

        while (left < right && nums[right] == nums[right - 1]) {
          right--;
        }

        left++;
        right--;
      }
    }
  }

  return res;
}; // console.log(threeSum([-1, 0, 1, 2, -1, -4]))
// 输出 [[-1,-1,2],[-1,0,1]]
// console.log(threeSum([0, 0, 0, 0]))
// 输出 [[0,0,0]]


console.log(threeSum([-100, -70, -60, 110, 120, 130, 160]));