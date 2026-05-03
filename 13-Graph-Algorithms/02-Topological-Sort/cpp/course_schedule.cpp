/*
 * Problem: Course Schedule II (Topological Sort)
 * Source:  LeetCode 210
 * Approach: Kahn's BFS-based topological sort using indegree.
 * Time: O(V+E), Space: O(V+E)
 * Tags: topological-sort, bfs, dag
 */
#include <bits/stdc++.h>
using namespace std;

vector<int> findOrder(int numCourses, vector<vector<int>>& prerequisites) {
    vector<vector<int>> adj(numCourses);
    vector<int> indegree(numCourses, 0);
    for (auto& p : prerequisites) { adj[p[1]].push_back(p[0]); indegree[p[0]]++; }
    
    queue<int> q;
    for (int i = 0; i < numCourses; i++) if (indegree[i] == 0) q.push(i);
    
    vector<int> order;
    while (!q.empty()) {
        int u = q.front(); q.pop(); order.push_back(u);
        for (int v : adj[u]) if (--indegree[v] == 0) q.push(v);
    }
    return order.size() == numCourses ? order : vector<int>{};
}

int main() {
    vector<vector<int>> prereqs = {{1,0},{2,0},{3,1},{3,2}};
    auto order = findOrder(4, prereqs);
    for (int x : order) cout << x << " "; // 0 1 2 3 or 0 2 1 3
    return 0;
}
