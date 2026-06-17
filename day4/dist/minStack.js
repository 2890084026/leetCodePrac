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
// class MinStack {
//     private stack
//     private minstack
//     constructor() {
//         this.stack = []
//         this.minstack = []
//     }
//     push(x: number): void {
//         this.stack.push(x)
//         if (!this.minstack.length || x <= this.minstack.at(-1)) {
//             this.minstack.push(x)
//         }
//     }
//     pop(): void {
//         let p = this.stack.pop()
//         if (p == this.minstack.at(-1)) {
//             this.minstack.pop()
//         }
//     }
//     top(): number {
//         return this.stack.at(-1)
//     }
//     getMin(): number {
//         return this.minstack.at(-1)
//     }
// }
/**
 * initialize your data structure here.
 */
var MinStack = function () {
    this.stack = [];
    this.minstack = [];
};
/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    this.stack.push(x);
    if (!this.minstack.length || x <= this.minstack.at(-1)) {
        this.minstack.push(x);
    }
};
/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    var t = this.stack.pop();
    if (t == this.minstack.at(-1)) {
        this.minstack.pop();
    }
};
/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.stack.at(-1);
};
/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.minstack.at(-1);
};
/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// 开始测试
var ms = new MinStack();
ms.push(-2);
ms.push(0);
ms.push(-3);
console.log(ms.getMin()); // 应输出 -3
ms.pop();
console.log(ms.top()); // 应输出 0
console.log(ms.getMin()); // 应输出 -2
