/*
 * Problem: Network Delay Time (Dijkstra)
 * Source:  LeetCode 743
 * Time: O((V+E) log V), Space: O(V+E)
 * Tags: dijkstra, shortest-path
 */
#include <bits/stdc++.h>
using namespace std;
typedef pair<int,int> pii;

int networkDelayTime(vector<vector<int>>& times, int n, int k) {
    vector<vector<pii>> adj(n + 1);
    for (auto& t : times) adj[t[0]].push_back({t[1], t[2]});
    
    vector<int> dist(n + 1, INT_MAX);
    priority_queue<pii, vector<pii>, greater<>> pq;
    dist[k] = 0; pq.push({0, k});
    
    while (!pq.empty()) {
        auto [d, u] = pq.top(); pq.pop();
        if (d > dist[u]) continue;
        for (auto [v, w] : adj[u]) {
            if (dist[u] + w < dist[v]) {
                dist[v] = dist[u] + w;
                pq.push({dist[v], v});
            }
        }
    }
    
    int ans = *max_element(dist.begin() + 1, dist.end());
    return ans == INT_MAX ? -1 : ans;
}

int main() {
    vector<vector<int>> times = {{2,1,1},{2,3,1},{3,4,1}};
    cout << "Delay: " << networkDelayTime(times, 4, 2) << endl; // 2
    return 0;
}
