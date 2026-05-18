// 字母异位词分组
// 给你一个字符串数组，请你将 字母异位词 组合在一起。可以按任意顺序返回结果列表。

// 字母异位词 是由重新排列源单词的所有字母得到的一个新单词。

// 示例1：
// 输入：strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
// 输出：[["bat"],["nat","tan"],["ate","eat","tea"]]
//  "ate" "eat" "tea" 是一组字母异味词

// 示例2：
// 输入：strs = [""]
// 输出：[[""]]
// 特殊情况

// 示例3：
// 输入：strs = ["a"]
// 输出：[["a"]]

// const strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat']
// function groupAnagram(arr) {
//   const map = new Map()
//   for (const ele of arr) {
//     console.log(ele, 'ele')

//     const sortedstr = ele.split('').sort().join('')
//     if (map.has(sortedstr)) {
//       map.get(sortedstr).push(ele)
//     } else {
//       map.set(sortedstr, [ele])
//     }
//   }
//   return Array.from(map.values())
// }

// 字母异位词分组
// 给你一个字符串数组，请你将 字母异位词 组合在一起。可以按任意顺序返回结果列表。

// 字母异位词 是由重新排列源单词的所有字母得到的一个新单词。

// 示例1：
// 输入：strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
// 输出：[["bat"],["nat","tan"],["ate","eat","tea"]]
//  "ate" "eat" "tea" 是一组字母异味词

const strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat']

function groupAnagram(arr) {
  const map = new Map()
  for (let ele of arr) {
    const sortedStr = ele.split('').sort().join('')
    if (map.has(sortedStr)) {
      map.get(sortedStr).push(ele)
    } else {
      map.set(sortedStr, [ele])
    }
  }
  return Array.from(map.values())
}

console.log(groupAnagram(strs))
