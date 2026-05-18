// 亦或  ^ 相当于无进位相加

// 核心性质（必考）
// 交换律：a^b = b^a
// 结合律：(a^b)^c = a^(b^c)
// 自反归零：a ^ a = 0
// 不变性：a ^ 0 = a
// 还原：a^b^b = a（两次异或同一个数变回原数）

// 6.某个元素只出现一次以外，其余每个元素均出现两次，找出1次的
// 输入：nums = [2,2,1]
// 输出：1"

// 将一个数取反+1
// 对 x 先取反 + 1（得相反数\(-x\)），再和原数 x 做按位与：
// \(\boldsymbol{x \ \& \ (\sim x + 1)}\)
// 结果 = 这个数最右侧的 1 对应的数值

// 题目:
// 6.某个元素只出现一次以外，其余每个元素均出现两次，找出1次的
// 输入：nums = [2,2,1]
// 输出：1
function singleNumber(nums) {
  return nums.reduce((acc, num) => acc ^ num, 0)
}

function single(nums) {
  let res = 0
  for (num in nums) {
    res ^= num
  }
  return res
}
// 测试
console.log(singleNumber([2, 2, 1])) // 1
console.log(singleNumber([4, 1, 2, 1, 2])) // 4

// 题目:
// 6.某两个元素只出现一次以外，其余每个元素均出现两次，找出1次的两个元素
// 输入：nums = [2,2,1,3]
// 输出：1,3
function findOdd(nums) {
  let eor = nums.reduce((a, b) => a ^ b, 0) //   eor=a^b
  //   数字eor 原来       1010111100
  //            取反~eor= 0101000011
  //      取反+1~eor+1  = 0101000100
  //      再让原来的数字与取反+1相与  得到：
  //          rightone = 0000000100
  //   最后让rightone 与数组每一项相与  可以得到两批数字 一批是与rightone 与结果为0的数字
  //   另一批是与rightone 与结果不为0  的数字
  //   因此我们得出的是两批数字  两批数字分别涵盖 出现奇数次的两个数字
  //   让其中一批的数字与 每一项相 亦或  可以得到其中一个数字 res1
  //   另一个数字就是  res2=res1^eor

  //   两个二进制数字相与，1010111100
  //                     0101000100
  let rightOne = eor & (~eor + 1) //提取出最右侧的1
  let res1 = 0
  for (const num of nums) {
    if ((rightOne & num) == 0) {
      res1 ^= num
    }
  }
  let res2 = res1 ^ eor
  return [res1, res2]
}

console.log(findOdd([2, 2, 1, 3])) // 1,3
console.log(findOdd([4, 1, 2, 1, 2, 3])) // 4,3
