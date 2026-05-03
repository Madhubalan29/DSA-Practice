# Graph Algorithms

## 🎯 Sub-Topics

### 1. BFS / DFS — O(V + E)
- **BFS**: Level-order, shortest path in unweighted graph (use queue)
- **DFS**: Explore as deep as possible (use recursion/stack)
- Connected components, cycle detection, topological sort

### 2. Topological Sort — O(V + E)
- Only for **DAG** (Directed Acyclic Graph)
- **Kahn's (BFS)**: Indegree-based
- **DFS-based**: Post-order + reverse

### 3. Dijkstra — O((V + E) log V)
- Shortest path from single source, **non-negative weights**
- Use min-heap / priority queue

### 4. Bellman-Ford — O(V × E)
- Handles **negative weights**
- Detect negative cycles (if relaxation possible after V-1 iterations)

### 5. Floyd-Warshall — O(V³)
- **All-pairs shortest path**
- `dp[i][j] = min(dp[i][j], dp[i][k] + dp[k][j])`

### 6. MST (Minimum Spanning Tree)
- **Kruskal's**: Sort edges + Union-Find — O(E log E)
- **Prim's**: Greedy with priority queue — O(E log V)

### 7. Strongly Connected Components (SCC)
- **Kosaraju's**: Two DFS passes (one on reverse graph)
- **Tarjan's**: Single DFS with low-link values

### 8. Bridges & Articulation Points
- Tarjan's algorithm using DFS discovery and low times
- Bridge: edge whose removal disconnects graph
- Articulation Point: vertex whose removal disconnects graph

### 9. Graph + DP ⭐⭐⭐
- DP on DAGs (process in topological order)
- Shortest/longest path in DAG
- Number of paths in DAG
- **Bitmask DP on graphs**: TSP, Hamiltonian Path

### 10. Network Flow
- **Ford-Fulkerson** / **Edmonds-Karp**: Max flow
- **Min-cut Max-flow** theorem

### 11. Bipartite Graph
- Check bipartiteness using BFS/DFS (2-coloring)
- Hungarian algorithm for maximum matching

## 📚 Big Company Problems
- Number of islands
- Rotting oranges (BFS)
- Course schedule I & II (Topological Sort)
- Cheapest flights within K stops (Dijkstra/Bellman-Ford)
- Network delay time
- Word ladder
- Clone graph
- Alien dictionary
- Accounts merge (DSU/DFS)
