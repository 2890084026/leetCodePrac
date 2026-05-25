// 11. 盛最多水的容器
// 中等
// 相关标签
// premium lock icon
// 相关企业
// 提示
// 给定一个长度为 n 的整数数组 height 。有 n 条垂线，第 i 条线的两个端点是 (i, 0) 和 (i, height[i]) 。

// 找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

// 返回容器可以储存的最大水量。

// 说明：你不能倾斜容器。

function maxArea(height) {
  let left = 0
  let right = height.length - 1
  let maxArea = 0
  while (left < right) {
    let area = Math.min(height[left], height[right]) * (right - left)
    maxArea = Math.max(maxArea, area)
    if (height[left] < height[right]) {
      left++
    } else {
      right--
    }
  }
  return maxArea
}
// 测试 1：力扣官方示例
console.log(maxArea([1,8,6,2,5,4,8,3,7])); // 输出：49 ✅

// 测试 2：基础用例
console.log(maxArea([1,1])); // 输出：1 ✅

// 测试 3：递增数组
console.log(maxArea([1,2,3,4,5])); // 输出：6 ✅

// 测试 4：单个元素/边界
console.log(maxArea([5])); // 输出：0 ✅
console.log(maxArea([2,3,4,5,18,17,6])); // 输出：17 ✅
