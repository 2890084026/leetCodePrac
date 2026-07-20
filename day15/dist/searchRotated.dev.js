"use strict";

// ============================================================
// LeetCode 33. 搜索旋转排序数组 (Search in Rotated Sorted Array)
// ============================================================
// 条件：旋转后的升序数组，无重复元素。搜索 target，返回下标，不存在返回 -1。
// 例如：[4,5,6,7,0,1,2], target=0 → 4
// 方法：二分查找 — 先判断哪一半有序，再看 target 在不在里面。
// 时间：O(log n)  空间：O(1)
// ============================================================
// 核心洞察：取 mid，至少有一半是有序的。
//   1. 左半有序 → 判断 target 是否在 [nums[left], nums[mid]) 范围内
//   2. 否则右半有序 → 判断 target 是否在 (nums[mid], nums[right]] 范围内
//   每轮排除一半，O(log n)
// ============================================================
function search(nums, target) {
  var left = 0;
  var right = nums.length - 1;

  while (left <= right) {
    var mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return mid; // ── 判断哪一半是有序的 ──

    if (nums[left] <= nums[mid]) {
      // 左半有序 [left, mid]
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1; // target 在有序的左半
      } else {
        left = mid + 1; // target 在右半
      }
    } else {
      // 右半有序 [mid, right]
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1; // target 在有序的右半
      } else {
        right = mid - 1; // target 在左半
      }
    }
  }

  return -1;
}

function search3333(nums, target) {
  var left = 0,
      right = nums.length - 1;

  while (left <= right) {
    var mid = Math.floor((left + right) / 2);
    if (nums[mid] == target) return true;

    if (nums[left] == nums[mid] && nums[mid] == nums[right]) {
      right--;
      left++;
    }

    if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return false;
}

;

function search22(nums, target) {
  var left = 0,
      right = nums.length - 1;

  while (left <= right) {
    var mid = Math.floor((left + right) / 2);
    if (nums[mid] == target) return mid;

    if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (nums[left] < target && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return -1;
}

function search222(nums, target) {
  var left = 0,
      right = nums.length - 1;

  while (left <= right) {
    var mid = Math.floor((left + right) / 2);
    if (nums[mid] == target) return mid;

    if (nums[left] < nums[mid]) {
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return -1;
} // ❌ search222 错误点：
// 第 74 行：nums[left] < nums[mid] → 应为 nums[left] <= nums[mid]
// 原因：当 left === mid（区间剩 1~2 个元素）时，< 会漏掉"单个元素也算有序"的情况，
//       导致代码错误进入 else 分支。<= 才能正确识别左半有序。
// ----------------------------------------------------------
// 图解：
//
// nums = [4, 5, 6, 7, 0, 1, 2], target = 0
// nums = [0, 1, 2, 4, 5, 6, 7], target = 0
// nums = [7 ,0, 1, 2, 4, 5, 6]
// nums = [6, 7, 0, 1, 2, 4, 5]
// nums = [5, 6, 7, 0, 1, 2, 4]
// nums = [4, 5, 6, 7, 0, 1, 2]
// nums = [2, 4, 5, 6, 7, 0, 1]
// nums = [0, 1, 2, 4, 5, 6, 7]
// nums = [1, 2, 4, 5, 6, 7, 0]
// 第一轮:  left=0, right=7, mid=3
//   [4, 5, 6, 7, 0, 1, 2]
//    ↑        ↑        ↑
//   left     mid     right
//   nums[left]=4 <= nums[mid]=7 → 左半有序 [4,5,6,7]
//   target=0 不在 [4, 7] 内 → 去右半 → left = 4
//
// 第二轮:  left=4, right=7, mid=5
//               [0, 1, 2]
//                ↑  ↑  ↑
//              left mid right
//   nums[left]=0 <= nums[mid]=1 → 左半有序 [0,1]
//   target=0 在 [0, 1] 内 → 去左半 → right = 4
//
// 第三轮:  left=4, right=4, mid=4
//   nums[4]=0 === target → 返回 4 ✅
// ----------------------------------------------------------
// ============================================================
// LeetCode 81. 搜索旋转排序数组 II（有重复元素）
// ============================================================
// 条件：和 33 一样，但数组可能有重复元素。
// 方法：多一种无法判断哪边有序的情况（左=中=右），收缩边界。
// 时间：平均 O(log n)，最坏 O(n)  空间：O(1)
// ============================================================


function search2(nums, target) {
  var left = 0;
  var right = nums.length - 1;

  while (left <= right) {
    var mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return true; // 无法判断哪边有序 → 左右同时收缩

    if (nums[left] === nums[mid] && nums[mid] === nums[right]) {
      left++;
      right--;
    } else if (nums[left] <= nums[mid]) {
      // 左半有序
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      // 右半有序
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return false;
}

function search333(nums, target) {
  var left = 0,
      right = nums.length - 1;

  while (left <= right) {
    var mid = Math.floor((left + right) / 2);
    if (nums[mid] == target) return true;

    if (nums[left] == target && nums[right] == target) {
      left++;
      right--;
    } else if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return false;
} // ❌ search333 错误点：
// 第 166 行：nums[left] == target && nums[right] == target
//        → 应为 nums[left] === nums[mid] && nums[mid] === nums[right]
// 原因：这是 LeetCode 81 处理重复元素的逻辑——当三个指针的值相等时
//       无法判断哪边有序，才收缩边界。写成 == target 完全丢掉了这个意图，
//       这步判断的是三个指针的值，和 target 无关。
// ----------------------------------------------------------
// 为什么三个相等时 left++ right-- 是安全的？
//
// nums = [1, 0, 1, 1, 1], target = 0
// left=0, right=4
// nums[left]=1, nums[mid]=1, nums[right]=1 → 无法判断
// left++, right-- → 缩小范围 [0, 1, 1]（目标 0 还在里面）✓
// ----------------------------------------------------------
// ============================================================
// 四道题的关系总结
// ============================================================
//                    ┌─ 数组是否旋转？
//                    │
//      ┌─ 是 ───────┤
//      │             │   ┌─ 33. 搜索目标值（无重复）
//      │             └─ 搜索 ─┤
//      │                 └─ 81. 搜索目标值（有重复）
// 旋转数组 ─┤
//      │                 ┌─ 153. 找最小值（无重复）
//      │             ┌─ 找值 ─┤
//      └─ 找最值 ────┤       └─ 154. 找最小值（有重复）
//
// | 题目 | 任务        | 重复 | 核心技巧                          | 时间           |
// |------|------------|------|----------------------------------|---------------|
// | 33   | 搜索 target | 无   | 定位有序半段 + 判断 target 范围    | O(log n)      |
// | 81   | 搜索 target | 有   | 同 33 + 相等时收缩                | 平均 O(log n) |
// | 153  | 找最小值    | 无   | nums[mid] vs nums[right]         | O(log n)      |
// | 154  | 找最小值    | 有   | 同 153 + 相等时 right--           | 平均 O(log n) |
// ============================================================
// 测试
// ============================================================


console.log("33. 搜索旋转排序数组（无重复）:");
console.log("  [4,5,6,7,0,1,2], target=0 →", search([4, 5, 6, 7, 0, 1, 2], 0)); // 4

console.log("  [4,5,6,7,0,1,2], target=3 →", search([4, 5, 6, 7, 0, 1, 2], 3)); // -1

console.log("  [1], target=0             →", search([1], 0)); // -1

console.log("81. 搜索旋转排序数组 II（有重复）:");
console.log("  [2,5,6,0,0,1,2], target=0 →", search2([2, 5, 6, 0, 0, 1, 2], 0)); // true

console.log("  [2,5,6,0,0,1,2], target=3 →", search2([2, 5, 6, 0, 0, 1, 2], 3)); // false