function generateParenthesis(num) {
  let stack = []

  function dfs(str, left, right) {
    if (str.length == num * 2) {
      return stack.push(str)
    }
    if (left < num) {
      dfs(str + '(', left + 1, right)
    }
    if (right < left) {
      dfs(str + ')', left, right + 1)
    }
  }
  dfs('', 0, 0)
  return stack
}
console.log(generateParenthesis(4))
