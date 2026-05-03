# Arrays & Hashing

## 🧩 Key Patterns

### 1. Two Pointer
Two pointers moving towards each other or in the same direction.
- **When**: Sorted array, find pair with given sum, remove duplicates
- **Time**: O(n)

### 2. Sliding Window
Maintain a window of elements, expand/shrink as needed.
- **Fixed window**: Exactly k elements
- **Variable window**: Shrink when condition violated
- **When**: Subarray/substring problems with constraints

### 3. Prefix Sum
Precompute cumulative sums for O(1) range queries.
```
prefix[0] = 0
prefix[i] = prefix[i-1] + arr[i-1]
sum(l, r) = prefix[r+1] - prefix[l]
```

### 4. Kadane's Algorithm
Maximum subarray sum in O(n).
```
maxSum = arr[0], curSum = arr[0]
for i in 1..n-1:
    curSum = max(arr[i], curSum + arr[i])
    maxSum = max(maxSum, curSum)
```

## 📚 Big Company Problems
- Two Sum, Three Sum, Four Sum
- Container with most water
- Trapping rain water
- Longest substring without repeating characters
- Maximum subarray (Kadane's)
- Subarray sum equals K
- Product of array except self
- Merge intervals
