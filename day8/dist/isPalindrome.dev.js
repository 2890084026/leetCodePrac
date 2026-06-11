"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// 如果在将所有大写字符转换为小写字符、并移除所有非字母数字字符之后，短语正着读和反着读都一样。则可以认为该短语是一个 回文串 。
// 字母和数字都属于字母数字字符。
// 给你一个字符串 s，如果它是 回文串 ，返回 true ；否则，返回 false 。
// 示例 1：
// 输入: s = "A man, a plan, a canal: Panama"
// 输出：true
// 解释："amanaplanacanalpanama" 是回文串。
// 示例 2：
// 输入：s = "race a car"
// 输出：false
// 解释："raceacar" 不是回文串。
// 示例 3：
// 输入：s = " "
// 输出：true
// 解释：在移除非字母数字字符之后，s 是一个空字符串 "" 。
// 由于空字符串正着反着读都一样，所以是回文串。
// 提示：
// 1 <= s.length <= 2 * 105
// s 仅由可打印的 ASCII 字符组成
// var isPalindrome = function(s) {
//     let left = 0, right = s.length - 1;
//     const isNumLetter = c => /[0-9a-zA-Z]/.test(c);
//     while(left < right) {
//         // 左指针跳过非法字符
//         while(left < right && !isNumLetter(s[left])) left++;
//         // 右指针跳过非法字符
//         while(left < right && !isNumLetter(s[right])) right--;
//         // 转小写对比
//         if(s[left].toLowerCase() !== s[right].toLowerCase()){
//             return false;
//         }
//         left++;
//         right--;
//     }
//     return true;
// };
// function isPalindrome(strs) {
//   let left = 0
//   let right = strs.length - 1
//   let rag = (a) => /[a-zA-Z0-9]/.test(a)
//   while (left < right) {
//     while (left < right && !rag(strs[left])) left++
//     while (left < right && !rag(strs[right])) right--
//     if (strs[left].toLowerCase() !== strs[right].toLowerCase()) {
//       return false
//     }
//     left++
//     right--
//   }
//   return true
// }
// function easyWay(str) {
//   const validStr = str.replace(/[^0-9a-zA-Z]/g, '').toLowerCase()
//   const reverseStr = validStr.split('').reverse().join('')
//   return validStr == reverseStr
// }
// function easyWay(strs) {
//   let validStr = strs.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
//   let reverseStr = validStr.split('').reverse().join('')
//   return validStr == reverseStr
// }
var easyWay = function easyWay(s) {
  var str = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  var reverse = str.split('').reverse().join('');
  return str == reverse;
}; // 测试用例


var testCases = [['A man, a plan, a canal: Panama', true], ['race a car', false], [' ', true], ['0P', false], ['a', true], ['abba', true]]; // 执行验证

testCases.forEach(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      str = _ref2[0],
      expect = _ref2[1];

  var res = easyWay(str);
  console.log("\u8F93\u5165\uFF1A".concat(str, " | \u9884\u671F").concat(expect, " | \u7ED3\u679C").concat(res, " ").concat(res === expect ? '✅' : '❌'));
});