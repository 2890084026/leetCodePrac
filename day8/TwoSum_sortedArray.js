// 167. 两数之和 II - 输入有序数组
// 中等
// 相关标签
// premium lock icon
// 相关企业
// 给你一个下标从 1 开始的整数数组 numbers ，该数组已按 非递减顺序排列  ，请你从数组中找出满足相加之和等于目标数 target 的两个数。如果设这两个数分别是 numbers[index1] 和 numbers[index2] ，则 1 <= index1 < index2 <= numbers.length 。

// 以长度为 2 的整数数组 [index1, index2] 的形式返回这两个整数的下标 index1 和 index2。

// 你可以假设每个输入 只对应唯一的答案 ，而且你 不可以 重复使用相同的元素。

// 你所设计的解决方案必须只使用常量级的额外空间。

// 示例 1：

// 输入：numbers = [2,7,11,15], target = 9
// 输出：[1,2]
// 解释：2 与 7 之和等于目标数 9 。因此 index1 = 1, index2 = 2 。返回 [1, 2] 。
// 示例 2：

// 输入：numbers = [2,3,4], target = 6
// 输出：[1,3]
// 解释：2 与 4 之和等于目标数 6 。因此 index1 = 1, index2 = 3 。返回 [1, 3] 。
// 示例 3：

// 输入：numbers = [-1,0], target = -1
// 输出：[1,2]
// 解释：-1 与 0 之和等于目标数 -1 。因此 index1 = 1, index2 = 2 。返回 [1, 2] 。
// function twoSum(arr, tar) {
//   let left = 0
//   let right = arr.length - 1
//   while (left < right) {
//     let sum = arr[left] + arr[right]
//     if (sum < tar) {
//       left++
//     } else if (sum > tar) {
//       right--
//     } else if (sum == tar) {
//       return [left + 1, right + 1]
//     }
//   }
// }

function twoSum(arr, tar) {
  let left = 0
  let right = arr.length - 1
  while (left < right) {
    let sum = arr[left] + arr[right]
    if (sum < tar) {
      left++
    } else if (sum > tar) {
      right--
    } else {
      return [left + 1, right + 1]
    }
  }
}
// 测试用例：[数组, 目标值, 期望结果]
const testCases = [
  [[2, 7, 11, 15], 9, [1, 2]],
  [[2, 3, 4], 6, [1, 3]],
  [[-1, 0], -1, [1, 2]],
  [[1, 2, 3, 4, 5], 9, [4, 5]],
]

// 自动验证
testCases.forEach(([nums, target, expect], idx) => {
  const result = twoSum(nums, target)
  const pass = result[0] === expect[0] && result[1] === expect[1]
  console.log(`测试${idx + 1}: ${pass ? '✅ 通过' : '❌ 失败'}`)
  console.log(`输入: [${nums}], 目标: ${target}`)
  console.log(`期望: [${expect}] | 输出: [${result}]\n`)
})
