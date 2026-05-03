# Disjoint Set Union (DSU / Union-Find)

## Core Operations
- **Find(x)**: Find root of x's set
- **Union(x, y)**: Merge sets containing x and y

## Optimizations
1. **Path Compression**: Make nodes point directly to root during Find
2. **Union by Rank/Size**: Attach smaller tree under larger tree
3. Combined: Nearly O(1) amortized per operation

## When to Use
- Connected components (dynamic), Cycle detection, Kruskal's MST

## Big Company Problems
- Number of connected components
- Redundant connection
- Accounts merge
- Most stones removed
