# Bit Manipulation

## 🎯 Essential Operations

| Operation | Code | Description |
|-----------|------|-------------|
| Check i-th bit | `(n >> i) & 1` | Is bit i set? |
| Set i-th bit | `n \| (1 << i)` | Turn on bit i |
| Clear i-th bit | `n & ~(1 << i)` | Turn off bit i |
| Toggle i-th bit | `n ^ (1 << i)` | Flip bit i |
| Count set bits | `__builtin_popcount(n)` / `Integer.bitCount(n)` | Number of 1s |
| Lowest set bit | `n & (-n)` | Isolate rightmost 1 |
| Clear lowest set bit | `n & (n - 1)` | Remove rightmost 1 |
| Check power of 2 | `n && !(n & (n-1))` | True if power of 2 |

## 🧩 Key Patterns

### Power Set (All Subsets)
Generate all 2^n subsets of an array using bitmask:
```cpp
for (int mask = 0; mask < (1 << n); mask++) {
    for (int i = 0; i < n; i++) {
        if (mask & (1 << i)) {
            // include arr[i] in this subset
        }
    }
}
```

### XOR Properties
- `a ^ a = 0`
- `a ^ 0 = a`
- XOR is associative & commutative
- **Single number among doubles**: XOR all → result is the unique one

## 📚 Big Company Problems
- Single Number (LeetCode 136)
- Single Number II (every element 3 times except one)
- Subsets (Power Set)
- Maximum XOR of two numbers
- Counting bits
