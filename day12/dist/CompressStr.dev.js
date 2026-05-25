"use strict";

// 443. 压缩字符串
// 中等
// 相关标签
// premium lock icon
// 相关企业
// 提示
// 给你一个字符数组 chars ，请使用下述算法压缩：
// 从一个空字符串 s 开始。对于 chars 中的每组 连续重复字符 ：
// 如果这一组长度为 1 ，则将字符追加到 s 中。
// 否则，需要向 s 追加字符，后跟这一组的长度。
// 压缩后得到的字符串 s 不应该直接返回 ，需要转储到字符数组 chars 中。需要注意的是，如果组长度为 10 或 10 以上，则在 chars 数组中会被拆分为多个字符。
// 请在 修改完输入数组后 ，返回该数组的新长度。
// 你必须设计并实现一个只使用常量额外空间的算法来解决此问题。
// 注意：数组中超出返回长度的字符无关紧要，应予忽略。
// 示例 1：
// 输入：chars = ["a","a","b","b","c","c","c"]
// 输出：6
// 解释："aa" 被 "a2" 替代。"bb" 被 "b2" 替代。"ccc" 被 "c3" 替代。
// 示例 2：
// 输入：chars = ["a"]
// 输出：1
// 解释：唯一的组是“a”，它保持未压缩，因为它是一个字符。
// 示例 3：
// 输入：chars = ["a","b","b","b","b","b","b","b","b","b","b","b","b"]
// 输出：4
// 解释：由于字符 "a" 不重复，所以不会被压缩。"bbbbbbbbbbbb" 被 “b12” 替代。
// function CompressStr(chars) {
//   let read = 0 //遍历指针
//   let write = 0
//   let count = 0
//   while (read < chars.length) {
//     if (chars[read + 1] < chars.length && chars[read] == chars[read + 1]) {
//       read++
//       count++
//     } else {
//       chars[write++] = chars[read]
//       if (count > 0) {
//         let countStr = count.toString()
//         for (let ele of countStr) {
//           chars[write++] = ele
//         }
//       }
//       count = 0
//       read++
//     }
//   }
//   return w
// }
// 豆包解法：
function CompressStr(chars) {
  var read = 0;
  var write = 0;
  var len = chars.length;

  while (read < len) {
    var count = 0;
    var cur = chars[read];

    while (read < len && chars[read] == cur) {
      read++;
      count++;
    }

    chars[write++] = cur;

    if (count > 1) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = count.toString()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var num = _step.value;
          chars[write++] = num;
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }

  return write;
}