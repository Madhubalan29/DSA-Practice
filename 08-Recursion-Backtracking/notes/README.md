# Recursion & Backtracking

## 🎯 Core Idea
- **Recursion**: Break problem into smaller subproblems
- **Backtracking**: Try all possibilities, undo (backtrack) if invalid

## 🧩 Patterns

### 1. Pick / Not Pick (Subsets)
```
f(idx, subset):
    if idx == n: process(subset)
    // Don't pick
    f(idx + 1, subset)
    // Pick
    subset.add(arr[idx])
    f(idx + 1, subset)
    subset.remove(last)
```

### 2. Permutations
```
f(idx, arr):
    if idx == n: process(arr)
    for i = idx to n-1:
        swap(arr[idx], arr[i])
        f(idx + 1, arr)
        swap(arr[idx], arr[i])  // backtrack
```

### 3. Grid Backtracking (N-Queens, Sudoku)
```
Place element → Check validity → Recurse → Undo placement
```

## 💡 Tips
1. Always define a **clear base case**
2. Think about **what choices** you have at each step
3. **Pruning**: Skip invalid paths early to optimize
4. Draw the **recursion tree** to understand flow

## 📚 Big Company Problems
- Subsets I & II
- Permutations I & II
- Combination Sum I, II, III
- N-Queens
- Sudoku Solver
- Word Search
- Palindrome Partitioning
- Generate Parentheses
