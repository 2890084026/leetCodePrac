// const arr = [0, 1, 0, 3, 12]
// 题目要求：将所有0移动到数组末尾
//使用双指针 设置慢指针des=-1 遍历指针i
//遍历指针遇到0的时候 des 不变，当遍历到下标0的时候，数组还是[0,1,0,3,12]
//当遍历指针遇到0的时候，des先进行des++，然后让arr[i]跟arr[des]进行交换swap(arr,i,des) 当前数组为例，遍历指针i=1的时候，不是0 那么需要先des++ 然后swap操作之后，为[1,0,0,3,12]
//最后会将所有0移动到数组末尾
// splice 参数1：start从哪个位置开始删，参数2：删除个数，参数3：需要加入的元素

// function swap(arr, i, j) {
//   arr[j] = arr.splice(i, 1, arr[j])[0]
// }
// // swap(arr, 1, 2)
// console.log(arr)

// function moveZero(arr) {
//   let des = -1
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] !== 0) {
//       des++
//       swap(arr, des, i)
//     }
//   }
// }
// moveZero(arr)
// console.log(arr, 'arr')

// 给你一个长度固定的整数数组 arr
// 请你将该数组中出现的每个零都复写一遍，并将其余的元素向右平移。
// 注意:请不要在超过该数组长度的位置写入元素。请对输入的数组 就地 进行上述修改，不要从函数返回任何东西。
// 示例 1:
// 输入:arr =[1,0,2,3,0,4,5,0]
// 输出:[1,0,0,2,3,0,0,4]
// 解释:调用函数后，输入的数组将被修改为:[1,0,0，2，3,0，0，4]
// 示例 2:
// 输入:arr =[1,2,3]
// 输出:[1,2，3]
// 解释:调用函数后，输入的数组将被修改为:[1，2，3]

// 如果采用就地复写的话，会有可能覆盖掉原来不需要复写的非零数字，所以可以采用倒着复写
// 此时需要找到最后一个需要复写的数字，然后进行从后往前复写

// 采用双指针，初始遍历指针cur，慢指针des
// 从前往后当cur是0的时候让 des+=2 cur++  如果不是让cur++ des++
// 处理边界当cur到最后一个数字的时候刚好是0，则不需要进行复写，需要将刚才 +1的cur-1 des-2

const arr = [1, 0, 2, 3, 0, 4, 5, 0]

function duplicateZero(arr) {
  let des = -1
  let cur = -1
  for (i = 0; i < arr.length; i++) {
    cur++
    console.log(cur, 'arr[i]1')

    if (arr[i]) {
      des++
    } else {
      des += 2
    }
    if (des >= arr.length - 1) {
      break
    }
  }
  console.log(cur, 'cur')
  console.log(des, 'des', arr.length)

  if (des == arr.length) {
    des -= 2
    cur -= 1
  }
  console.log(cur, 'curf')
  console.log(des, 'desf')
  for (i = cur; i >= 0; i--) {
    console.log(arr[i], 'arr[i]', des)

    if (arr[i] == 0) {
      arr[des--] = 0
      arr[des--] = 0
      cur--
    } else {
      arr[des--] = arr[cur--]
    }
  }
}
duplicateZero(arr)
console.log(arr, 'arr')
