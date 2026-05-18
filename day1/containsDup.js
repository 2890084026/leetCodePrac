const arr = [1, 2, 3, 4]
const ars = [1, 2, 3, 1]

// function containDup(arr) {
//   const hash = new Map()
//   for (const ele of arr) {
//     if (hash.has(ele)) {
//       return true
//     } else {
//       hash.set(ele, true)
//     }
//   }
//   return false
// }
// console.log(containDup(arr))
// console.log(containDup(ars))

// function containsDup(arr) {
//   const set = new Set()
//   for (i = 0; i < arr.length; i++) {
//     if (set.has(arr[i])) {
//       return true
//     }
//     set.add(arr[i])
//   }
//   return false
// }
// console.log(containsDup(arr))
// console.log(containsDup(ars))

function containDup(arr) {
  let map = new Map()
  for (ele of arr) {
    if (map.has(ele)) {
      return true
    }
    map.set(ele, true)
  }
  return false
}
console.log(containDup(arr))
console.log(containDup(ars))
