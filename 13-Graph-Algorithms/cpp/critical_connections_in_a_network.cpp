/*
 * Problem: Critical Connections in a Network (Bridges)
 * Source:  LeetCode 1192 - https://leetcode.com/problems/critical-connections-in-a-network/
 * 
 * Approach: Tarjan's algorithm — DFS with discovery time and low-link values.
 *           An edge (u, v) is a bridge if low[v] > disc[u].
 * Time Complexity:  O(V + E)
 * Space Complexity: O(V + E)
 * 
 * Tags: graph, dfs, tarjan, bridges
 */

#include <bits/stdc++.h>
using namespace std;

int timer_ = 0;

void dfs(int u, int parent, vector<vector<int>>& adj, vector<int>& disc, vector<int>& low, vector<vector<int>>& bridges) {
    disc[u] = low[u] = timer_++;
    
    for (int v : adj[u]) {
        if (v == parent) continue;
        
        if (disc[v] == -1) {
            dfs(v, u, adj, disc, low, bridges);
            low[u] = min(low[u], low[v]);
            
            if (low[v] > disc[u]) {
                bridges.push_back({u, v});
            }
        } else {
            low[u] = min(low[u], disc[v]);
        }
    }
}

vector<vector<int>> criticalConnections(int n, vector<vector<int>>& connections) {
    vector<vector<int>> adj(n);
    for (auto& conn : connections) {
        adj[conn[0]].push_back(conn[1]);
        adj[conn[1]].push_back(conn[0]);
    }
    
    vector<int> disc(n, -1), low(n, -1);
    vector<vector<int>> bridges;
    timer_ = 0;
    
    for (int i = 0; i < n; i++) {
        if (disc[i] == -1) {
            dfs(i, -1, adj, disc, low, bridges);
        }
    }
    
    return bridges;
}

int main() {
    int n = 4;
    vector<vector<int>> connections = {{0,1},{1,2},{2,0},{1,3}};
    
    auto bridges = criticalConnections(n, connections);
    
    cout << "Critical connections (bridges):" << endl;
    for (auto& b : bridges) {
        cout << b[0] << " -- " << b[1] << endl;
    }
    // Output: 1 -- 3
    
    return 0;
}
