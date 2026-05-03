/* Bipartite Check using BFS | LeetCode 785 | Time: O(V+E) */
#include <bits/stdc++.h>
using namespace std;
bool isBipartite(vector<vector<int>>& graph) {
    int n = graph.size(); vector<int> color(n, -1);
    for (int i = 0; i < n; i++) {
        if (color[i] != -1) continue;
        queue<int> q; q.push(i); color[i] = 0;
        while (!q.empty()) { int u = q.front(); q.pop();
            for (int v : graph[u]) {
                if (color[v] == -1) { color[v] = 1 - color[u]; q.push(v); }
                else if (color[v] == color[u]) return false;
            }
        }
    }
    return true;
}
int main() {
    vector<vector<int>> g = {{1,3},{0,2},{1,3},{0,2}};
    cout << boolalpha << isBipartite(g) << endl; // true
}
