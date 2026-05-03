# Dynamic Programming

## Sub-Topics

### 01 - 1D DP
Fibonacci, climbing stairs, house robber

### 02 - 2D DP
Grid paths, edit distance, unique paths

### 03 - DP on Strings
LCS, LPS, edit distance, wildcard matching

### 04 - DP on Subsequences
LIS, subset sum, partition equal subset sum

### 05 - DP on Grids
Min path sum, unique paths, dungeon game

### 06 - Knapsack Variants
0/1 Knapsack, unbounded knapsack, coin change

### 07 - DP with Bitmask ⭐⭐⭐
- State: `dp[mask]` where mask represents subset of elements chosen
- TSP: `dp[mask][i]` = min cost to visit cities in mask, ending at i
- Assignment problem, Hamiltonian path
- Time: O(2^n * n)

### 08 - Digit DP
Count numbers in range [L, R] satisfying some property.
State: `dp[pos][tight][...extra states]`

### 09 - DP on Trees
- Subtree DP: process children first, combine
- Re-rooting technique: compute answer for all roots in O(n)
- Diameter, max path sum, number of nodes in subtree

### 10 - Interval DP
`dp[i][j]` = answer for subarray [i..j]
MCM, burst balloons, palindrome partitioning

### 11 - LIS Variants
Longest Increasing Subsequence - O(n log n) with patience sorting

### 12 - Matrix Chain Multiplication
Classic interval DP: optimal way to parenthesize matrix products

## Big Company Problems
- Climbing stairs, House robber I/II
- Longest common subsequence, Edit distance
- Coin change I/II, 0/1 Knapsack
- Word break, Palindrome partitioning
- Burst balloons, MCM
- Best time to buy/sell stock (all variants)
- Longest increasing subsequence
