# Fenwick Tree (Binary Indexed Tree)

## Core Idea
Compact data structure for prefix sums with point updates in O(log n).
Simpler to implement than Segment Tree but less flexible.

## Operations
- **Update(i, delta)**: Add delta to position i — O(log n)
- **Query(i)**: Prefix sum [1..i] — O(log n)
- **Range query [l, r]**: Query(r) - Query(l-1)

## Key trick: `i & (-i)` gives lowest set bit

## Sub-Topics
- **Basic 1D BIT**: Point update, prefix query
- **2D BIT**: 2D prefix sums with updates
- **BIT with range updates**: Using two BITs

## Big Company Problems
- Count of smaller numbers after self
- Range sum query (mutable)
- Count inversions
