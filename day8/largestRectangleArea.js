// LeetCode  84
// 给定 n 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 。

// 求在该柱状图中，能够勾勒出来的矩形的最大面积。

// 输入：heights = [2,1,5,6,2,3]
// 输出：10
// 解释：最大的矩形为图中红色区域，面积为 10

// 输入： heights = [2,4]
// 输出： 4

// function largestRectangleArea(nums) {
//   let stack = []
//   let maxArea = 0
//   nums.push(0)
//   for (i = 0; i < nums.length; i++) {
//     while (stack.length && nums[i] < nums[stack.at(-1)]) {
//       let cur = stack.pop()
//       let h = nums[cur]
//       let left = stack.length ? stack.at(-1) : -1
//       let w = i - 1 - left
//       let s = h * w
//       maxArea = Math.max(s, maxArea)
//     }
//     stack.push(i)
//   }
//   return maxArea
// }

function largestRectangleArea(height) {
  let stack = []
  let maxArea = 0
  height.push(0)
  for (i = 0; i < height.length; i++) {
    while (stack.length && height[i] < height[stack.at(-1)]) {
      let cur = stack.pop()
      let h = height[cur]
      let left = stack.length ? stack.at(-1) : -1
      let w = i - 1 - left
      maxArea = Math.max(h * w, maxArea)
    }
    stack.push(i)
  }
  return maxArea
}

console.log(largestRectangleArea([2, 1, 5, 6, 2, 3])) // 10
console.log(largestRectangleArea([1, 2, 3, 4, 5])) // 9
console.log(largestRectangleArea([5, 4, 3, 2, 1])) // 9
console.log(largestRectangleArea([])) // 0
console.log(largestRectangleArea([1])) // 1
