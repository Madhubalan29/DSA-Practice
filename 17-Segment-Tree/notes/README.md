# Segment Tree

## Core Idea
Binary tree for range queries and point/range updates in O(log n).

## Sub-Topics

### Basic Segment Tree
- Build: O(n), Query: O(log n), Update: O(log n)
- Range sum, range min/max, range GCD

### Lazy Propagation
- Range updates in O(log n) instead of O(n log n)
- Postpone updates until actually needed
- Must push lazy values down before querying children

### Persistent Segment Tree
- Keep all versions of the tree after each update
- O(log n) extra space per update
- Used for: Kth smallest in range, version queries

### Merge Sort Tree
- Each node stores sorted list of elements in range
- Count elements ≤ K in range [L, R] in O(log²n)

## Big Company Problems
- Range sum query (mutable)
- Count of range sum
- Falling squares
- Rectangle area (coordinate compression + sweep line)
