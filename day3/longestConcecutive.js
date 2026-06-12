// 题目
// 给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。

// 请你设计并实现时间复杂度为 O(n) 的算法解决此问题。

// 示例：
// 输入：nums = [100,4,200,1,3,2]
// 输出：4
// 解释：最长数字连续序列是 [1, 2, 3, 4]。它的长度为 4。

// const nums = [100, 4, 200, 1, 3, 2, 5]

// function concecutive(nums) {
//   if (nums.length == 0) return
//   const sorted = Array.from(new Set(nums)).sort((a, b) => a - b)
//   console.log(sorted, 'sorted')

//   let maxCount = 0
//   let current = 1

//   for (i = 0; i < sorted.length; i++) {
//     if (sorted[i] == sorted[i - 1] + 1) {
//       current++
//     } else {
//       maxCount = Math.max(current, maxCount)
//       current = 1
//     }
//   }
//   maxCount = Math.max(current, maxCount)
//   return maxCount
// }

// 豆包解法
// function conce(nums) {
//   const numSet = new Set(nums)

//   let maxLen = 1
//   for (const num of numSet) {
//     if (!numSet.has(num - 1)) {
//       let currentNum = num
//       let currentLen = 1
//       while (numSet.has(currentNum + 1)) {
//         currentNum++
//         currentLen++
//       }
//       maxLen = Math.max(maxLen, currentLen)
//     }
//   }
//   return maxLen
// }

const nums = [100, 4, 200, 1, 3, 2, 5]
function longestC(nums) {
  let numSet = new Set(nums)
  let maxLen = 1
  for (let num of nums) {
    if (!numSet.has(num - 1)) {
      let currentnum = num
      let currentLen = 1
      while (numSet.has(currentnum + 1)) {
        currentnum++
        currentLen++
      }
      maxLen = Math.max(currentLen, maxLen)
    }
  }
  return maxLen
}
// console.log(concecutive(nums))

console.log(longestC(nums))

// console.log(conce(nums))
