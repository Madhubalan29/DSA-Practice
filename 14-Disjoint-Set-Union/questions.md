# 🔥 Interview Hard Questions — Disjoint Set Union

## Question 1: Swim in Rising Water
- **Platform:** LeetCode
- **Link:** https://leetcode.com/problems/swim-in-rising-water/
- **Difficulty:** Hard
- **Description:** Given an n×n grid where grid[i][j] represents the elevation, find the minimum time t such that you can swim from (0,0) to (n-1,n-1). At time t, water level is t and you can swim through cells with elevation ≤ t.
- **Key Concepts:** DSU with sorted edges, Binary Search + BFS/DFS, Min-Max Path
- **Why Interview-Worthy:** Elegant DSU application — union cells by increasing elevation.

---

## Question 2: Accounts Merge
- **Platform:** LeetCode
- **Link:** https://leetcode.com/problems/accounts-merge/
- **Difficulty:** Hard (Medium on LC, interview-hard in complexity)
- **Description:** Given a list of accounts where each account has a name and a list of emails, merge accounts that share at least one common email.
- **Key Concepts:** Union-Find, Graph connected components, Email deduplication
- **Why Interview-Worthy:** Real-world DSU application — frequently asked at Meta, Google.
