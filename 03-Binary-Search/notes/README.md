# Binary Search

## 🎯 Core Idea
Reduce search space by half in each step. Works on **sorted / monotonic** data.

## 🧩 Three Patterns

### 1. Standard Binary Search
Find exact element in sorted array.
```
lo = 0, hi = n-1
while (lo <= hi):
    mid = lo + (hi - lo) / 2
    if arr[mid] == target: return mid
    else if arr[mid] < target: lo = mid + 1
    else: hi = mid - 1
```

### 2. Binary Search on Answer
When the answer is monotonic — "minimum X such that condition is satisfied."
```
lo = min_possible, hi = max_possible
while (lo < hi):
    mid = lo + (hi - lo) / 2
    if (feasible(mid)): hi = mid
    else: lo = mid + 1
return lo
```

### 3. Search in Rotated Sorted Array
Identify which half is sorted, then decide.

## 💡 When to Use
- Array is sorted or answer space is monotonic
- "Find minimum/maximum that satisfies condition"
- Problem has a **yes/no threshold** (FFFFFTTTTT pattern)

## 📚 Big Company Problems
- Search in rotated sorted array
- Find first & last position
- Median of two sorted arrays ⭐⭐⭐
- Koko eating bananas (search on answer)
- Aggressive cows / Book allocation
- Split array largest sum
