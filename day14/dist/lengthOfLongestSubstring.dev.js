"use strict";

// LCR 016. 无重复字符的最长子串
// 已解答
// 中等
// 相关标签
// premium lock icon
// 相关企业
// 给定一个字符串 s ，请你找出其中不含有重复字符的 最长连续子字符串 的长度。
// 示例 1：
// 输入: s = "abcabcbb"
// 输出: 3 
// 解释: 因为无重复字符的最长子字符串是 "abc"，所以其长度为 3。
// 示例 2：
// 输入: s = "bbbbb"
// 输出: 1
// 解释: 因为无重复字符的最长子字符串是 "b"，所以其长度为 1。
// 示例 3：
// 输入: s = "pwwkew"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
//      请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
// 示例 4：
// 输入: s = ""
// 输出: 0

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function lengthOfLongestSubstring(s) {
  var left = 0,
      len = 0,
      set = new Set();

  for (var right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set["delete"](s[left]);
      left++;
    }

    set.add(s[right]);
    console.log(set.size);
    len = Math.max(len, right - left + 1);
  }

  return len;
};

console.log(lengthOfLongestSubstring("abcabcbb")); // 3

console.log(lengthOfLongestSubstring("bbbbb")); // 1

console.log(lengthOfLongestSubstring("pwwkew")); // 3

console.log(lengthOfLongestSubstring("")); // 0