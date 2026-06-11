// LCR 181. 字符串中的单词反转
// 简单
// 相关标签
// premium lock icon
// 相关企业
// 你在与一位习惯从右往左阅读的朋友发消息，他发出的文字顺序都与正常相反但单词内容正确，为了和他顺利交流你决定写一个转换程序，把他所发的消息 message 转换为正常语序。

// 注意：输入字符串 message 中可能会存在前导空格、尾随空格或者单词间的多个空格。返回的结果字符串中，单词间应当仅用单个空格分隔，且不包含任何额外的空格。

// 示例 1：

// 输入: message = "the sky is blue"
// 输出: "blue is sky the"
// 示例 2：

// 输入: message = "  hello world!  "
// 输出: "world! hello"
// 解释: 输入字符串可以在前面或者后面包含多余的空格，但是反转后的字符不能包括。
// 示例 3：

// 输入: message = "a good   example"
// 输出: "example good a"
// 解释: 如果两个单词间有多余的空格，将反转后单词间的空格减少到只含一个。
// var reverseWords = function (s) {
//   return s.trim().split(/\s+/).reverse().join(' ')
// }
var reverseWords = function (s) {
  // 第一步：先去掉首尾空格
  s = s.trim()
  let res = []
  let i = (j = s.length - 1)
  console.log(i, 'i')

  while (i >= 0) {
    console.log(i,'i',j);
    
    // 找到单词开头
    while (i >= 0 && s[i] !== ' ') i--
    // 把单词加入结果
    res.push(s.substring(i + 1, j + 1))
    // 跳过所有空格
    while (i >= 0 && s[i] === ' ') i--
    j = i
  }

  return res.join(' ')
}
// 逐个测试
console.log(reverseWords('the sky is blue')) // blue is sky the
// console.log(reverseWords('  hello world  ')) // world hello
// console.log(reverseWords('a   good  example')) // example good a
// console.log(reverseWords('leetcode')) // leetcode
// console.log(reverseWords(' ')) // 空字符串
// console.log(reverseWords('  I love JavaScript  ')) // JavaScript love I
