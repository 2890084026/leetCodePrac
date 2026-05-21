// 题目
// 设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。
// 实现 MinStack 类:
// ●
// MinStack() 初始化堆栈对象。
// ●
// void push(int val) 将元素val推入堆栈。
// ●
// void pop() 删除堆栈顶部的元素。
// ●
// int top() 获取堆栈顶部的元素。
// ●
// int getMin() 获取堆栈中的最小元素。
// 示例：
// 示例1：
// 输入：
// ["MinStack","push","push","push","getMin","pop","top","getMin"]
// [[],[-2],[0],[-3],[],[],[],[]]
// 输出：
// [null,null,null,null,-3,null,0,-2]

// let minStack = function () {
//   this.stack = []
//   this.minStack = []
// }

// minStack.prototype.push = function (val) {
//   this.stack.push(val)
//   if (!this.minStack.length || val < this.minStack.at(-1)) {
//     this.minStack.push(val)
//   }
// }

// minStack.prototype.pop = function () {
//   let t = this.stack.pop()
//   if (t == this.minStack.at(-1)) {
//     this.minStack.pop()
//   }
// }

// minStack.prototype.top = function () {
//   return this.stack.at(-1)
// }

// minStack.prototype.getMin = function () {
//   return this.minStack.at(-1)
// }

const minStack = function () {
  this.stack = []
  this.minStack = []
}

minStack.prototype.push = function (val) {
  this.stack.push()
  if (!this.minStack.length || val < this.minStack.at(-1)) {
    this.minStack.push(val)
  }
}
minStack.prototype.pop=function(){
  let num =this.stack.pop()
  if(num==this.minStack.at(-1)){
    this.minStack.pop()
  }
}

minStack.prototype.gettop = function () {
  return this.stack.at(-1)
}

minStack.prototype.getMin = function () {
  return this.minStack.at(-1)
}

// 开始测试
let ms = new minStack()
ms.push(-2)
ms.push(0)
ms.push(-3)
console.log(ms.getMin()) // 应输出 -3
ms.pop()
console.log(ms.top()) // 应输出 0
console.log(ms.getMin()) // 应输出 -2
