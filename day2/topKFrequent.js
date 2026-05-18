// 给你一个整数数组 nums 和一个整数 k ，请你返回其中出现频率前 k 高的元素。你可以按 任意顺序 返回答案。
// 示例1：
// 输入：nums = [1,1,1,2,2,3], k = 2
// 输出：[1,2]

// 示例2：
// 输入：nums = [1], k = 1
// 输出：[1]
// const nums = [1, 1, 1, 2, 2, 3],
// k = 2
// function topK(arr, k) {
//   const fkobj = {}
//   arr.forEach((num) => {
//     fkobj[num] = (fkobj[num] || 0) + 1
//   })
//   // { '1': 3, '2': 2, '3': 1 } fkobk
//   console.log(fkobj, 'fkobk')
//   const aes = Object.entries(fkobj)
//   // [ [ '1', 3 ], [ '2', 2 ], [ '3', 1 ] ] aes
//   // 使用Object.entries将对象转换为键值对数组，然后映射为包含数字和频率的数组。

//   console.log(aes, 'aes')
//   // parseInt将字符串转换成数字
//   const freArr = Object.entries(fkobj).map(([num, freq]) => [
//     parseInt(num),
//     freq,
//   ])
//   console.log(freArr, 'freArr')
//   //freArr [ [ 1, 3 ], [ 2, 2 ], [ 3, 1 ] ]
//   // 倒叙排序，让最高的频率在最前面
//   freArr.sort((a, b) => b[1] - a[1])
//   console.log(freArr, 'freArr')
//   //freArr [ [ 1, 3 ], [ 2, 2 ], [ 3, 1 ] ]

//   res = freArr.slice(0, k).map((ele) => ele[0])
//   return res
// }

// 给你一个整数数组 nums 和一个整数 k ，请你返回其中出现频率前 k 高的元素。你可以按 任意顺序 返回答案。
// 示例1：
// 输入：nums = [1,1,1,2,2,3], k = 2
// 输出：[1,2]

// 示例2：
// 输入：nums = [1], k = 1
// 输出：[1]
const nums = [1, 1, 1, 2, 2, 3],
  k = 2

function topK(arr, k) {
  let kmap = {}
  for (let ele of arr) {
    kmap[ele] = (kmap[ele] || 0) + 1
  }
  const kArr = Object.entries(kmap).map(([a, b]) => [parseInt(a), b])
  return (res = kArr
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map(([a, b]) => a))
  console.log(kArr, 'kArr')
}
console.log(topK(nums, k), '222')
