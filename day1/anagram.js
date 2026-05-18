// const str = 'abcdABCD'
// console.log(str.charCodeAt(0), 'str')//97
// console.log(str.charCodeAt(1), 'str')//98
// console.log(str.charCodeAt(2), 'str')//99
// console.log(str.charCodeAt(3), 'str')//100
// console.log(str.charCodeAt(4), 'str')//65

// console.log(str.charCodeAt(5), 'str')//66
// console.log(str.charCodeAt(6), 'str')//67

const str = 'anagram'
const sts = 'nagaram'
// function isAnagram(s, t) {
//   if (s.length != t.length) {
//     return false
//   }
//   const counter = new Array(26).fill(0)
//   for (char of t) {
//     counter[char.charCodeAt(0) - 'a'.charCodeAt(0)]++
//   }
//   for (char of s) {
//     index = char.charCodeAt(0) - 'a'.charCodeAt(0)
//     if (--counter[index] < 0) {
//       return false
//     }
//   }
//   for (count of counter) {
//     if (count != 0) {
//       return false
//     }
//   }
//   return true
// }

// console.log(isAnagram(str, sts))
// function isAnagram(s, t) {
//   if (s.length !== t.length) {
//     return false
//   }
//   const objS = {}
//   const objT = {}

//   for (i = 0; i < s.length; i++) {
//     objS[s[i]] = (objS[s[i]] || 0) + 1
//     objT[t[i]] = (objT[t[i]] || 0) + 1
//   }

//   for (key in objS) {
//     if (objS[key] !== objT[key]) {
//       return false
//     }
//   }

//   for (key in objT) {
//     if (objT[key] == undefined) {
//       return false
//     }
//   }
//   return true
// }

function isAnagram(s, t) {
  if (s.length !== s.length) return false
  let maps = {}
  let mapt = {}

  for (i = 0; i < s.length; i++) {
    maps[s[i]] = (maps[s[i]] || 0) + 1
    mapt[s[i]] = (mapt[s[i]] || 0) + 1
  }
  for (let ele in maps) {
    if (maps[ele] !== mapt[ele]) {
      return false
    }
  }
  for (let ele in mapt) {
    if (mapt[ele] == undefined) {
      return false
    }
  }
  return true
}

console.log(isAnagram(str, sts))
