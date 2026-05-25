// 给定一个整数数组 temperatures，表示每天的温度，返回一个数组 answer，其中 answer[i] 是指对于第 i 天，
// 下一个更高温度出现在几天后。如果气温在这之后都不会升高，请在该位置用 0 来代替。

// function dailyTemperatures(temperatures) {
//     const n = temperatures.length;
//     const res = new Array(n).fill(0); // 结果数组，默认 0
//     const stack = []; // 单调栈，存下标

//     for (let i = 0; i < n; i++) {
//         // 当前温度 > 栈顶温度 → 找到了下一个更高温
//         while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
//             const prevIndex = stack.pop();
//             res[prevIndex] = i - prevIndex;
//         }
//         stack.push(i);
//     }

//     return res;
// }

function dailyTemperatures(nums) {
  let len = nums.length
  let stack = []
  let res = new Array(len).fill(0)
  for (i = 0; i < len; i++) {
    while (stack.length && nums[i] > nums[stack.at(-1)]) {
      let prevIndex = stack.pop()
      res[prevIndex] = i - prevIndex
    }
    stack.push(i)
  }
  return res
}

// 测试用例 1
const t1 = [73, 74, 75, 71, 69, 72, 76, 73]
console.log(dailyTemperatures(t1))
// 预期：[1,1,4,2,1,1,0,0]
