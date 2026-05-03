# Sqrt Decomposition & MO's Algorithm

## Sqrt Decomposition
- Divide array into blocks of size √n
- Precompute answer for each block
- Query: O(√n), Update: O(1) or O(√n)

## MO's Algorithm
- Offline query processing for range queries
- Sort queries by (L/√n, R) — block decomposition
- Move L and R pointers to answer queries
- Time: O((N + Q) × √N)
- Works for: distinct count, frequency queries, XOR of range
