function evalRPN(arr) {
  let stack = []
  let ops = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => Math.trunc(a / b),
  }
  for (let ele of arr) {

    if (ops[ele]) {
      let b = stack.pop()
      let a = stack.pop()
      stack.push(ops[ele](a, b))
    } else {
      stack.push(Number(ele))
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
