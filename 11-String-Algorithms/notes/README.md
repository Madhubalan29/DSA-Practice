# String Algorithms

## 🎯 Key Algorithms

### 1. KMP (Knuth-Morris-Pratt) — O(n + m)
Pattern matching using **failure function** (LPS array).
- Build LPS: longest proper prefix which is also suffix
- Use LPS to avoid re-scanning characters

### 2. Rabin-Karp — O(n + m) average
Hash-based pattern matching using **rolling hash**.
- Hash = polynomial hash with prime base
- Compare hashes first, verify on match (avoid false positives)

### 3. Z-Algorithm — O(n)
Z[i] = length of longest substring starting at i which is also a prefix.
- Concatenate: `pattern + "$" + text`, then compute Z-array

### 4. Manacher's Algorithm — O(n)
Find **longest palindromic substring** in linear time.
- Transform string with separators: `#a#b#a#`
- Use mirror property to expand palindromes

### 5. Suffix Array — O(n log² n)
Sorted array of all suffixes. Used with LCP array for powerful string operations.

## 📚 Big Company Problems
- Implement strStr (KMP)
- Longest palindromic substring (Manacher / DP)
- Longest common substring
- String matching queries
- Repeated substring pattern
