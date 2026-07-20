"use strict";

// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
// 有效字符串需满足：
// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 每个右括号都有一个对应的相同类型的左括号。
// 示例:
// 示例1
// 输入：s = "()[]{}"
// 输出：true
// 解释："(" "[" "{" 都有对应的右括号匹配
// 示例2
// 输入：s = "(]"
// 输出："("没有右括号")"匹配
// ● s 仅由括号 '()[]{}' 组成
// function isValid(s) {
//   // 定义一个映射，方便查找左右括号的对应关系
//   const bracketMap = {
//     ')': '(',
//     '}': '{',
//     ']': '[',
//   }
//   // 初始化一个栈
//   let stack = []
//   // 遍历字符串
//   for (let char of s) {
//     // 如果是左括号，压入栈中
//     if (Object.values(bracketMap).includes(char)) {
//       stack.push(char)
//     }
//     // 如果是右括号
//     else if (char in bracketMap) {
//       console.log(stack, 'stack')
//       // 栈为空或者栈顶的左括号与当前右括号不匹配，则字符串无效
//       if (!stack.length || stack.pop() !== bracketMap[char]) {
//         return false
//       }
//     }
//     // 如果遇到了非括号字符，也可以根据题目的具体要求决定如何处理，这里假设输入只包含括号
//     else {
//       throw new Error('Invalid character encountered.')
//     }
//   }
//   // 遍历结束，如果栈为空，说明所有括号都已正确闭合
//   return stack.length === 0
// }
function isValidBracket(strs) {
  if (!strs.length) return;
  var bracketMap = {
    ')': '(',
    '}': '{',
    ']': '['
  };
  var stack = [];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = strs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var str = _step.value;

      if (Object.values(bracketMap).includes(str)) {
        stack.push(str);
      } else if (str in bracketMap) {
        if (!stack.length || stack.pop() !== bracketMap[str]) {
          return false;
        }
      } else {
        return false;
      }
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

  return stack.length == 0;
}

function isValid22(s) {
  if (!s.length) return false;
  var brackmap = {
    ')': '(',
    '}': '{',
    ']': '['
  };
  var stack = [];
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = s[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var str = _step2.value;

      if (Object.values(brackmap).includes(str)) {
        stack.push(str);
      } else if (str in brackmap) {
        if (!stack.length || stack.pop !== brackmap[str]) {
          //pop没调用
          return false;
        }
      } else {
        return false;
      }
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
        _iterator2["return"]();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  return stack.length == 0;
}

;
console.log(isValidBracket('{[]}')); // 输出: true