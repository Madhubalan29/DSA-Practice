# 🚀 DSA Mastery — Competitive Programming & Interview Prep

> Based on [Striver's CP Sheet](https://takeuforward.org/competitive-programming/strivers-cp-sheet) + Advanced Topics asked by FAANG/Top Product Companies.

Every problem is solved in **both C++ and Java**.

📖 **[View Complete Concept Map →](CONCEPT_MAP.md)** | 🧠 **688+ curated problems** across **151 sub-topics**

---

## 📂 Repository Structure

| # | Topic | Sub-Topics | Difficulty | Problems |
|---|-------|-----------|------------|----------|
| 01 | **Implementation & Constructive** | Ad-hoc, Simulation, Greedy Construction | ⭐ Easy → Medium | 16 |
| 02 | **Mathematics** | Number Theory, Modular Arithmetic, Combinatorics, GCD/LCM, Euler Totient, Catalan, Matrix Determinant, Probability | ⭐ Easy → Hard | 41 |
| 03 | **Binary Search** | Basic, Search on Answer, Rotated Array | ⭐ Easy → Medium | 17 |
| 04 | **Prime, Sieve, Factorisation** | Sieve of Eratosthenes, Segmented Sieve, Factorisation | ⭐⭐ Medium | 15 |
| 05 | **Bit Manipulation** | Basics, Power Set, XOR Problems | ⭐⭐ Medium | 17 |
| 06 | **Arrays & Hashing** | Two Pointer, Sliding Window, Prefix Sum, Kadane's, HashMap, Dutch National Flag, Merge Intervals, Matrix Traversal | ⭐ Easy → Medium | 45 |
| 07 | **Sorting & Searching** | Merge Sort, Quick Sort, Counting Sort, Heap Sort, Radix Sort, Bucket Sort, Custom Comparators | ⭐ Easy → Medium | 33 |
| 08 | **Recursion & Backtracking** | Subsets, Permutations, N-Queens, Sudoku, Divide & Conquer, Rat in Maze, Word Search, Expression Parsing | ⭐⭐ Medium → Hard | 42 |
| 09 | **Linked List** | Singly, Doubly, Cycle Detection, Merge/Sort, Flatten, LRU Cache, Reverse in Groups | ⭐ Easy → Medium | 32 |
| 10 | **Stack, Queue, Priority Queue** | Stack, Monotonic Stack, Queue, Heap, Deque, Circular Queue, NGE, Stock Span | ⭐⭐ Medium | 40 |
| 11 | **String Algorithms** | KMP, Rabin-Karp, Z-Algo, Manacher, Suffix Array, String Hashing, Palindrome Partitioning, Aho-Corasick | ⭐⭐⭐ Hard | 34 |
| 12 | **Trees** | Traversals, BST, LCA, Tree DP, Euler Tour, HLD, Morris Traversal, Centroid Decomposition | ⭐⭐ Medium → Hard | 38 |
| 13 | **Graph Algorithms** | BFS/DFS, Topo Sort, Dijkstra, Bellman-Ford, Floyd-Warshall, MST, SCC, Bridges, Graph+DP, Flow, Bipartite, Euler Path, 2-SAT, Centroid Decomp | ⭐⭐⭐ Hard | 59 |
| 14 | **Disjoint Set Union** | Union-Find, Path Compression, DSU Problems, Union by Rank, Weighted DSU, Offline Queries | ⭐⭐ Medium | 23 |
| 15 | **Dynamic Programming** | 1D, 2D, Strings, Subsequences, Grids, Knapsack, Bitmask, Digit, Tree, Interval, LIS, MCM, Monotone Queue, CHT, SOS, Broken Profile, Probability | ⭐⭐⭐ Hard | 84 |
| 16 | **Trie** | Standard Trie, XOR Trie, Trie Problems, Autocomplete, Persistent | ⭐⭐ Medium → Hard | 20 |
| 17 | **Segment Tree** | Basic, Lazy Propagation, Persistent, Merge Sort Tree, Iterative, 2D | ⭐⭐⭐ Hard | 21 |
| 18 | **Fenwick Tree (BIT)** | Basic BIT, 2D BIT, BIT Problems | ⭐⭐⭐ Hard | 12 |
| 19 | **Sqrt Decomposition / MO's** | Sqrt Decomposition, MO's Algorithm, MO's on Trees, Block Decomposition | ⭐⭐⭐ Hard | 14 |
| 20 | **Matrix Exponentiation** | Linear Recurrence, Fibonacci Variants, Graph Powers | ⭐⭐⭐ Hard | 12 |
| 21 | **Greedy Algorithms** | Activity Selection, Interval Scheduling, Huffman, Fractional Knapsack, Job Scheduling, Minimum Platforms, Gas Station | ⭐⭐ Medium | 29 |
| 22 | **Game Theory** | Nim Game, Sprague-Grundy, Combinatorial Games, Minimax, Alpha-Beta Pruning | ⭐⭐⭐ Hard | 20 |
| 23 | **Geometry** | Convex Hull, Line Intersection, Sweep Line, Closest Pair, Point in Polygon, Polygon Area | ⭐⭐⭐ Hard | 24 |

---

## 🗂️ Folder Convention

```
Topic-Folder/
├── Sub-Topic/
│   ├── cpp/
│   │   └── problem_name.cpp
│   ├── java/
│   │   └── ProblemName.java
│   ├── notes/
│   │   └── README.md          ← Theory, patterns, tips
│   └── questions.md           ← Curated problems with links
└── notes/
    └── README.md
```

---

## 🏷️ File Naming Convention

| Language | Convention | Example |
|----------|-----------|---------| 
| C++ | `snake_case.cpp` | `two_sum.cpp` |
| Java | `PascalCase.java` | `TwoSum.java` |

---

## 📝 Problem Template

Every solution file follows this structure:

```
/*
 * Problem: [Problem Name]
 * Source:  [LeetCode/Codeforces/SPOJ/etc.] - [Link]
 * 
 * Approach: [Brief description]
 * Time Complexity:  O(...)
 * Space Complexity: O(...)
 * 
 * Tags: [topic tags]
 */
```

---

## 🎯 Recommended Study Order

1. **Foundation** → Arrays, Sorting, Binary Search, Recursion
2. **Data Structures** → Stack, Queue, Linked List, Trees, BST
3. **Core Algorithms** → Graph BFS/DFS, DP Basics, Greedy
4. **Advanced DS** → Trie, Segment Tree, Fenwick Tree, DSU
5. **Advanced Algorithms** → DP+Bitmask, Graph+DP, String Algos
6. **Expert Topics** → Sqrt Decomposition, Matrix Expo, Game Theory, Geometry

---

## ⚡ Quick Compile & Run

### C++
```bash
g++ -std=c++17 -O2 -o solution problem_name.cpp && ./solution
```

### Java
```bash
javac ProblemName.java && java ProblemName
```

---

## 🛠️ Question Generator

Generate curated problems for all sub-topics:

```bash
# Generate all questions (won't overwrite existing)
node generate_questions.js

# Force overwrite all
node generate_questions.js --force

# Preview without writing files
node generate_questions.js --dry-run

# Filter by topic
node generate_questions.js --topic="Binary Search"

# Filter by difficulty
node generate_questions.js --difficulty=Hard
```

---

## 📊 Progress Tracker

| Topic | Sub-topics | Problems | Progress |
|-------|-----------|----------|----------|
| Implementation | 3 | 16 | 0/16 |
| Mathematics | 8 | 41 | 0/41 |
| Binary Search | 3 | 17 | 0/17 |
| Prime/Sieve | 3 | 15 | 0/15 |
| Bit Manipulation | 3 | 17 | 0/17 |
| Arrays & Hashing | 8 | 45 | 0/45 |
| Sorting & Searching | 7 | 33 | 0/33 |
| Recursion & Backtracking | 9 | 42 | 0/42 |
| Linked List | 7 | 32 | 0/32 |
| Stack/Queue/PQ | 8 | 40 | 0/40 |
| String Algorithms | 8 | 34 | 0/34 |
| Trees | 8 | 38 | 0/38 |
| Graph Algorithms | 14 | 59 | 0/59 |
| Disjoint Set | 6 | 23 | 0/23 |
| Dynamic Programming | 17 | 84 | 0/84 |
| Trie | 5 | 20 | 0/20 |
| Segment Tree | 6 | 21 | 0/21 |
| Fenwick Tree | 3 | 12 | 0/12 |
| Sqrt Decomp/MO's | 4 | 14 | 0/14 |
| Matrix Expo | 3 | 12 | 0/12 |
| Greedy | 7 | 29 | 0/29 |
| Game Theory | 5 | 20 | 0/20 |
| Geometry | 6 | 24 | 0/24 |
| **TOTAL** | **151** | **688** | **0/688** |

---

## 🔗 Resources

- [Striver's CP Sheet](https://takeuforward.org/competitive-programming/strivers-cp-sheet)
- [Striver's SDE Sheet](https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/)
- [CP-Algorithms](https://cp-algorithms.com/)
- [CSES Problem Set](https://cses.fi/problemset/)
- [LeetCode](https://leetcode.com/)
- [Codeforces](https://codeforces.com/)
- [AtCoder DP Contest](https://atcoder.jp/contests/dp)

---

*Happy Coding! 🧠💻*
