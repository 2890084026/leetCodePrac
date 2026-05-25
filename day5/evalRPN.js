//  逆波兰表达式求值
// 题目
// 给你一个字符串数组 tokens ，表示一个根据 逆波兰表示法 表示的算术表达式。

// 请你计算该表达式。返回一个表示表达式值的整数。

// 注意：
// 有效的算符为 '+'、'-'、'*' 和 '/' 。
// 每个操作数（运算对象）都可以是一个整数或者另一个表达式。
// 两个整数之间的除法总是 向零截断 。
// 表达式中不含除零运算。
// 输入是一个根据逆波兰表示法表示的算术表达式。
// 答案及所有中间计算结果可以用 32 位 整数表示。

// function evalRPN(arr) {
//   let stack = []
//   let ops = {
//     '+': (a, b) => a + b,
//     '-': (a, b) => a - b,
//     '*': (a, b) => a * b,
//     '/': (a, b) => Math.trunc(a / b),
//   }
//   for (let ele of arr) {

//     if (ops[ele]) {
//       let b = stack.pop()
//       let a = stack.pop()
//       stack.push(ops[ele](a, b))
//     } else {
//       stack.push(Number(ele))
//     }
//   }
//   return stack[0]
// }

function evalRPN(tokens) {
  let stack = []
  let ops = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => Math.trunc(a / b),
  }
  for (let token of tokens) {
    if (token in ops) {
      let b = stack.pop()
      let a = stack.pop()
      stack.push(ops[token](a, b))
    } else {
      stack.push(Number(token))
    }
  }
  return stack[0]
}

// 直接测试验算
// 测试1
console.log(evalRPN(['2', '1', '+', '3', '*'])) // 预期 9
// 测试2
console.log(evalRPN(['4', '13', '5', '/', '+'])) // 预期 6
// 测试3
console.log(
  evalRPN([
    '10',
    '6',
    '9',
    '3',
    '+',
    '-11',
    '*',
    '/',
    '*',
    '17',
    '+',
    '5',
    '+',
  ]),
) // 预期 22
