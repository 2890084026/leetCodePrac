// 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
// 示例 1：

// 输入：n = 3
// 输出：["((()))","(()())","(())()","()(())","()()()"]
// 示例 2：

// 输入：n = 1
// 输出：["()"]

// function generateParenthesis(num) {
//   let stack = []

//   function dfs(str, left, right) {
//     if (str.length == num * 2) {
//       return stack.push(str)
//     }
//     if (left < num) {
//       dfs(str + '(', left + 1, right)
//     }
//     if (right < left) {
//       dfs(str + ')', left, right + 1)
//     }
//   }
//   dfs('', 0, 0)
//   return stack
// }

function generateParenthesis(num) {
  let stack = []
  function dfs(left, right, path) {
    if (path.length == num * 2) {
      return stack.push(path)
    }
    if (left < num) {
      dfs(left + 1, right, path + '(')
    }
    if (right < left) {
      dfs(left, right + 1, path + ')')
    }
  }
  dfs(0, 0, '')
  return stack
}

console.log(generateParenthesis(2))
console.log(generateParenthesis(3))
