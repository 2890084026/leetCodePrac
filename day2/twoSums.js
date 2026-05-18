// 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
// 示例：
// 输入：nums = [2,7,11,15], target = 9
// 输出：[0,1]
// 因为 nums[0] + nums[1] == 9 ，返回 [0, 1]

// const arr = [2, 7, 11, 15],
//   tar = 9
//   双循环算法：
// function twoSum(arr, tar) {
//   for (i = 0; i < arr.length; i++) {
//     for (j = 0; j < arr.length; j++) {
//       if (arr[i] + arr[j] == tar) {
//         return [i, j]
//       }
//     }
//   }
//   return null
// }
// console.log(twoSum(arr, tar))

// function twoSum(arr, tar) {
//   let obj = {}
//   let diff = 0
//   for (i = 0; i < arr.length; i++) {
//     const diff = tar - arr[i]
//     if (diff in obj) {
//       return [obj[diff], i]
//     }
//     obj[arr[i]] = i
//   }
//   return null
// }
// 单循环算法
// 计算每个元素与tar之间的差值，如果插值在对象中存在，则返回当前项arr[i]和对象中对应项map[diff]
// 如果不存在则将arr[i] 也就是当前项  存在obj中

const arr = [2, 7, 11, 15],
  tar = 13
  
function twoSum(arr, tar) {
  let diff = 0
  let map = {}
  for (i = 0; i < arr.length; i++) {
    diff = tar - arr[i]
    if (diff in map) {
      return [map[diff], i]
    }
    map[arr[i]] = i
  }
  return null
}
console.log(twoSum(arr, tar))
